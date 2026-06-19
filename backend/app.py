from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Conexão real com o seu Atlas
URI = "mongodb+srv://alevides:1235789@cluster0.1wbzld1.mongodb.net/"
client = MongoClient(URI)
db = client["backlog_jogos"]

# Fixando o usuário 'joaogamer' para simular a sessão
USUARIO_MOCK = "joaogamer"

def get_user_id():
    user = db.users.find_one({"username": USUARIO_MOCK})
    return user["_id"] if user else None

# --- ROTA 1: BUSCAR O BACKLOG ---
@app.route('/api/backlog', methods=['GET'])
def get_backlog():
    user_id = get_user_id()
    if not user_id:
        return jsonify({"erro": "Usuário não encontrado"}), 404

    pipeline = [
        {"$match": {"user_id": user_id}},
        {"$lookup": {
            "from": "games",
            "localField": "igdb_id",
            "foreignField": "igdb_id",
            "as": "dados_do_jogo"
        }},
        {"$unwind": {
            "path": "$dados_do_jogo",
            "preserveNullAndEmptyArrays": True
        }}
    ]
    
    itens = list(db.user_games.aggregate(pipeline))
    
    for item in itens:
        item['_id'] = str(item['_id'])
        item['user_id'] = str(item['user_id'])
        if 'dados_do_jogo' in item and item['dados_do_jogo']:
            item['dados_do_jogo']['_id'] = str(item['dados_do_jogo'].get('_id', ''))
            
    return jsonify(itens)

# --- ROTA 2: ADICIONAR NOVO JOGO ---
@app.route('/api/backlog', methods=['POST'])
def add_to_backlog():
    user_id = get_user_id()
    dados = request.json
    
    db.user_games.update_one(
        {"user_id": user_id, "igdb_id": dados.get("igdb_id")},
        {"$set": {
            "status": dados.get("status", "Quero Jogar"),
            "platform": dados.get("platform", "PC"),
            "updated_at": datetime.utcnow()
        }},
        upsert=True
    )
    return jsonify({"msg": "Adicionado com sucesso!"})

# --- ROTA 3: ATUALIZAR JOGO EXISTENTE ---
@app.route('/api/backlog/<item_id>', methods=['PUT'])
def update_backlog(item_id):
    user_id = get_user_id()
    dados = request.json
    
    update_fields = {"updated_at": datetime.utcnow()}
    if "status" in dados: update_fields["status"] = dados["status"]
    if "rating" in dados: update_fields["rating"] = dados["rating"]
    if "hours_played" in dados: update_fields["hours_played"] = dados["hours_played"]
    if "review" in dados: update_fields["review"] = dados["review"]
    if "spoiler" in dados: update_fields["spoiler"] = dados["spoiler"]

    db.user_games.update_one({"_id": ObjectId(item_id)}, {"$set": update_fields})
    
    # Registro automático no feed se terminou
    if dados.get("status") == "Terminei":
        db.activities.insert_one({
            "user_id": user_id,
            "type": "completed",
            "game_name": "um jogo",
            "rating": dados.get("rating"),
            "created_at": datetime.utcnow()
        })
        
    return jsonify({"msg": "Atualizado com sucesso!"})

# --- ROTA 4: BUSCAR JOGOS NO IGDB ---
@app.route('/api/buscar-jogos', methods=['GET'])
def buscar_jogos():
    query = request.args.get('q', '').lower()
    
    mock_db = [
        {"igdb_id": 1942, "name": "The Witcher 3: Wild Hunt", "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg", "genre": "RPG de Ação", "year": 2015, "synopsis": "Um vasto mundo de fantasia..."},
        {"igdb_id": 7346, "name": "The Legend of Zelda: Breath of the Wild", "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg", "genre": "Aventura", "year": 2017, "synopsis": "Acorde, Link..."},
        {"igdb_id": 113112, "name": "Hollow Knight", "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rgi.jpg", "genre": "Metroidvania", "year": 2017, "synopsis": "Explore as profundezas de um reino esquecido..."}
    ]
    
    resultados = [g for g in mock_db if query in g["name"].lower()] if query else mock_db
    return jsonify(resultados)

# --- ROTA 5: FEED SOCIAL ---
@app.route('/api/feed', methods=['GET'])
def get_feed():
    atividades = list(db.activities.find().sort("created_at", -1).limit(20))
    for a in atividades:
        a['_id'] = str(a['_id'])
        a['user_id'] = str(a.get('user_id', ''))
        
        # Puxa o nome e avatar do usuário real para exibir no feed
        user = db.users.find_one({"_id": ObjectId(a['user_id'])}) if a.get('user_id') else None
        a['username'] = user['username'] if user else "Jogador"
        if user and "avatar_url" in user:
            a['avatar_url'] = user["avatar_url"]
            
    return jsonify(atividades)

# --- ROTA 6: ESTATÍSTICAS E GRÁFICOS ---
@app.route('/api/stats', methods=['GET'])
def get_stats():
    user_id = get_user_id()
    user = db.users.find_one({"_id": user_id})
    
    jogos = list(db.user_games.aggregate([
        {"$match": {"user_id": user_id}},
        {"$lookup": {"from": "games", "localField": "igdb_id", "foreignField": "igdb_id", "as": "dados_do_jogo"}},
        {"$unwind": {"path": "$dados_do_jogo", "preserveNullAndEmptyArrays": True}}
    ]))
    
    total_jogos = len(jogos)
    total_horas = sum(j.get("hours_played", 0) for j in jogos)
    notas = [j["rating"] for j in jogos if j.get("rating") is not None]
    media_notas = round(sum(notas) / len(notas), 1) if notas else 0
    
    generos = {}
    plataformas = {}
    distribuicao_notas = {"0-2": 0, "3-4": 0, "5-6": 0, "7-8": 0, "9-10": 0}
    
    for j in jogos:
        plat = j.get("platform", "PC")
        plataformas[plat] = plataformas.get(plat, 0) + 1
        
        gen = j.get("dados_do_jogo", {}).get("genre", "Outros")
        generos[gen] = generos.get(gen, 0) + 1
        
        r = j.get("rating")
        if r is not None:
            if r <= 2: distribuicao_notas["0-2"] += 1
            elif r <= 4: distribuicao_notas["3-4"] += 1
            elif r <= 6: distribuicao_notas["5-6"] += 1
            elif r <= 8: distribuicao_notas["7-8"] += 1
            else: distribuicao_notas["9-10"] += 1

    return jsonify({
        "username": user["username"] if user else "Jogador",
        "bio": user.get("bio", ""),
        "avatar_url": user.get("avatar_url", ""),
        "total_jogos": total_jogos,
        "total_horas": total_horas,
        "media_notas": media_notas,
        "generos": generos,
        "plataformas": plataformas,
        "distribuicao_notas": distribuicao_notas
    })

if __name__ == '__main__':
    # Curativo automático: preenchendo a tabela 'games' com os dados da nossa falsa Twitch (Mock)
    mock_games = [
        {"igdb_id": 1942, "name": "The Witcher 3: Wild Hunt", "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg", "genre": "RPG de Ação", "year": 2015, "synopsis": "Um vasto mundo de fantasia..."},
        {"igdb_id": 7346, "name": "The Legend of Zelda: Breath of the Wild", "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.jpg", "genre": "Aventura", "year": 2017, "synopsis": "Acorde, Link..."},
        {"igdb_id": 113112, "name": "Hollow Knight", "cover": "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rgi.jpg", "genre": "Metroidvania", "year": 2017, "synopsis": "Explore as profundezas de um reino esquecido..."}
    ]
    
    print("Sincronizando capas com o MongoDB Atlas...")
    for g in mock_games:
        db.games.update_one({"igdb_id": g["igdb_id"]}, {"$set": g}, upsert=True)
    print("Tudo pronto! Servidor online.")

    # Ligando o servidor
    app.run(host='0.0.0.0', port=5000, debug=True)