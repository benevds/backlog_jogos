/* ===================== DADOS MOCK (simulam MongoDB) ===================== */
const PLATAFORMA_ICON = { PC: '🖥️', PS5: '🎮', Xbox: '🎮', Switch: '🕹️' };

let backlog = [
  { id:1, title:"Elden Ring", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg", status:"jogando", score:null, hours:62, totalHours:120, platform:"PC", genre:"RPG de Ação", spoiler:false, review:"" },
  { id:2, title:"Baldur's Gate 3", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co6jgg.jpg", status:"jogando", score:null, hours:34, totalHours:90, platform:"PC", genre:"RPG Tático", spoiler:false, review:"" },
  { id:3, title:"Hades II", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co7vge.jpg", status:"jogando", score:null, hours:18, totalHours:40, platform:"Switch", genre:"Roguelike", spoiler:false, review:"" },
  { id:4, title:"The Witcher 3", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg", status:"terminei", score:9.8, hours:103, totalHours:103, platform:"PC", genre:"RPG de Ação", spoiler:true, review:"A melhor narrativa que já vi em um RPG. O final me destruiu emocionalmente, principalmente a decisão sobre o destino da Ciri." },
  { id:5, title:"Hollow Knight", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1rgi.jpg", status:"terminei", score:9.2, hours:48, totalHours:48, platform:"Switch", genre:"Metroidvania", spoiler:false, review:"Atmosfera incrível, trilha sonora linda e level design impecável. Difícil mas justo." },
  { id:6, title:"God of War Ragnarök", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co5myo.jpg", status:"terminei", score:8.9, hours:35, totalHours:35, platform:"PS5", genre:"Ação/Aventura", spoiler:true, review:"O combate evoluiu muito e a relação entre Kratos e Atreus tem momentos tocantes, especialmente quando Atreus decide partir no final." },
  { id:7, title:"Stardew Valley", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co2ozb.jpg", status:"terminei", score:9.0, hours:210, totalHours:210, platform:"PC", genre:"Simulação", spoiler:false, review:"Vício puro. Relaxante e profundo ao mesmo tempo." },
  { id:8, title:"Cyberpunk 2077", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co3jpf.jpg", status:"quero", score:null, hours:0, totalHours:0, platform:"PC", genre:"RPG de Ação", spoiler:false, review:"" },
  { id:9, title:"Final Fantasy VII Rebirth", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co7g66.jpg", status:"quero", score:null, hours:0, totalHours:0, platform:"PS5", genre:"RPG", spoiler:false, review:"" },
  { id:10, title:"Persona 5 Royal", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co39nq.jpg", status:"quero", score:null, hours:0, totalHours:0, platform:"Switch", genre:"RPG", spoiler:false, review:"" },
];

const feedData = [
  { id:1, user:"João Mendes", avatarSeed:"joao", action:"terminou", game:"The Witcher 3", score:9.5, time:"há 12 minutos", review:"Geralt nunca mais será o mesmo pra mim. Que jogo absurdo.", hasReview:true },
  { id:2, user:"Bia Castro", avatarSeed:"bia", action:"começou a jogar", game:"Baldur's Gate 3", score:null, time:"há 38 minutos", review:"", hasReview:false },
  { id:3, user:"Rafa Lins", avatarSeed:"rafa", action:"avaliou", game:"Hades II", score:9.1, time:"há 1 hora", review:"Melione é um dos vilões mais bem escritos dos últimos anos. A progressão de poder é satisfatória demais.", hasReview:true },
  { id:4, user:"Lara Souza", avatarSeed:"lara", action:"adicionou à lista", game:"Final Fantasy VII Rebirth", score:null, time:"há 2 horas", review:"", hasReview:false },
  { id:5, user:"Theo Bastos", avatarSeed:"theo", action:"terminou", game:"God of War Ragnarök", score:7.8, time:"há 5 horas", review:"Bom jogo, mas achei um pouco arrastado no meio. O final compensa.", hasReview:true },
  { id:6, user:"Marina Alves", avatarSeed:"marina", action:"avaliou", game:"Stardew Valley", score:9.6, time:"ontem", review:"Já são 200 horas e ainda descubro coisa nova. Jogo perfeito pra relaxar depois do trabalho.", hasReview:true },
];

const igdbDatabase = [
  { title:"Hollow Knight: Silksong", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co8jcb.jpg", genre:"Metroidvania", year:2025, synopsis:"Sequência aguardada do aclamado Metroidvania, seguindo Hornet em uma nova jornada por um reino repleto de perigos e segredos." },
  { title:"Elden Ring", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg", genre:"RPG de Ação", year:2022, synopsis:"Um vasto mundo de fantasia criado por Hidetaka Miyazaki e George R. R. Martin, repleto de mistério e desafio brutal." },
  { title:"Hades", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co39pl.jpg", genre:"Roguelike", year:2020, synopsis:"Lute para escapar do submundo grego como o Príncipe de Hades, enfrentando hordas de inimigos mitológicos." },
  { title:"Persona 5 Royal", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co39nq.jpg", genre:"RPG", year:2019, synopsis:"Assuma o papel de um estudante que ganha o poder de despertar Personas e lutar contra a corrupção da sociedade." },
  { title:"Disco Elysium", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1wfl.jpg", genre:"RPG Narrativo", year:2019, synopsis:"Um detetive amnésico precisa resolver um assassinato enquanto reconstrói sua própria identidade e ideologia." },
  { title:"Sekiro: Shadows Die Twice", cover:"https://images.igdb.com/igdb/image/upload/t_cover_big/co1zqd.jpg", genre:"Ação", year:2019, synopsis:"Um ninja shinobi busca vingança contra um samurai misterioso no Japão da era Sengoku." },
];

/* ===================== NAVEGAÇÃO ===================== */
const views = document.querySelectorAll('.view');
const navItems = document.querySelectorAll('.nav-item');
const navItemsMobile = document.querySelectorAll('.nav-item-mobile');

function switchView(viewName){
  views.forEach(v => v.classList.toggle('active', v.id === `view-${viewName}`));
  navItems.forEach(n => n.classList.toggle('active', n.dataset.view === viewName));
  navItemsMobile.forEach(n => {
    n.style.color = n.dataset.view === viewName ? 'var(--text-1)' : 'var(--text-2)';
  });
  document.getElementById('mobileNav').classList.add('hidden');
  if(viewName === 'stats') setTimeout(renderCharts, 50);
}
navItems.forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
navItemsMobile.forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));

document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.toggle('hidden');
});

/* ===================== TOAST ===================== */
function showToast(msg){
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 2600);
}

/* ===================== BACKLOG: RENDER ===================== */
function scoreClass(score){
  if(score === null) return '';
  if(score >= 8.5) return 'score-high';
  if(score >= 6.5) return 'score-mid';
  return 'score-low';
}

function renderBacklog(filter='jogando'){
  const grid = document.getElementById('backlogGrid');
  const list = filter === 'todos' ? backlog : backlog.filter(g => g.status === filter);
  grid.innerHTML = '';

  if(list.length === 0){
    grid.innerHTML = `<div class="col-span-full text-center py-16" style="color:var(--text-3);">
      <p class="text-sm">Nenhum jogo nessa categoria ainda.</p>
    </div>`;
    return;
  }

  list.forEach(game => {
    const pct = game.totalHours > 0 ? Math.min(100, (game.hours / game.totalHours) * 100) : 0;
    const card = document.createElement('div');
    card.className = 'game-card rounded-2xl overflow-hidden relative';
    card.innerHTML = `
      ${game.spoiler ? '<div class="spoiler-flag">SPOILER</div>' : ''}
      <div class="relative h-44 overflow-hidden">
        <img src="${game.cover}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/300x400/1a1e2b/565c70?text=${encodeURIComponent(game.title)}'">
        <div class="absolute inset-0" style="background:linear-gradient(180deg, transparent 50%, rgba(10,12,18,0.95));"></div>
        <div class="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div class="chip" style="background:rgba(10,12,18,.8);">${PLATAFORMA_ICON[game.platform] || '🎮'} ${game.platform}</div>
          ${game.score !== null ? `<div class="score-badge ${scoreClass(game.score)}">${game.score}</div>` : ''}
        </div>
      </div>
      <div class="p-4">
        <h3 class="font-display font-bold text-base truncate" title="${game.title}">${game.title}</h3>
        <p class="text-xs mt-0.5" style="color:var(--text-3);">${game.genre}</p>

        ${game.status === 'jogando' ? `
        <div class="mt-3">
          <div class="flex justify-between text-xs mb-1.5" style="color:var(--text-2);">
            <span>${game.hours}h jogadas</span><span>${pct.toFixed(0)}%</span>
          </div>
          <div class="hours-rail"><div class="hours-fill" style="width:${pct}%"></div></div>
        </div>` : ''}

        ${game.status === 'terminei' ? `
          <p class="text-xs mt-3" style="color:var(--text-2);">${game.hours}h totais ${game.review ? '· possui análise' : ''}</p>
        ` : ''}

        ${game.status === 'quero' ? `
          <p class="text-xs mt-3" style="color:var(--text-3);">Ainda não iniciado</p>
        ` : ''}

        <div class="flex gap-2 mt-4">
          <button class="edit-btn btn-ghost flex-1 py-2 rounded-lg text-xs font-medium" data-id="${game.id}">Editar</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', () => openEditModal(parseInt(btn.dataset.id)));
  });
}

/* Filtro de abas */
document.querySelectorAll('.tab-btn').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderBacklog(tab.dataset.filter);
  });
});

/* ===================== MODAL DE EDIÇÃO ===================== */
let currentEditId = null;

function openEditModal(id){
  const game = backlog.find(g => g.id === id);
  if(!game) return;
  currentEditId = id;

  document.getElementById('modalGameTitle').textContent = game.title;
  document.getElementById('modalScoreInput').value = game.score ?? '';
  document.getElementById('modalHoursInput').value = game.hours;
  document.getElementById('modalReviewInput').value = game.review;
  document.getElementById('modalSpoilerInput').checked = game.spoiler;

  document.querySelectorAll('.status-pick-btn').forEach(b => {
    const isActive = b.dataset.status === game.status;
    b.style.borderColor = isActive ? 'var(--magenta)' : 'var(--line)';
    b.style.color = isActive ? 'var(--text-1)' : 'var(--text-2)';
    b.dataset.selected = isActive ? 'true' : 'false';
  });

  document.getElementById('editModal').classList.remove('hidden');
  document.getElementById('editModal').classList.add('flex');
}

function closeEditModal(){
  document.getElementById('editModal').classList.add('hidden');
  document.getElementById('editModal').classList.remove('flex');
  currentEditId = null;
}

document.getElementById('closeModalBtn').addEventListener('click', closeEditModal);
document.getElementById('cancelModalBtn').addEventListener('click', closeEditModal);
document.getElementById('editModal').addEventListener('click', (e) => {
  if(e.target.id === 'editModal') closeEditModal();
});

document.querySelectorAll('.status-pick-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.status-pick-btn').forEach(b => {
      b.style.borderColor = 'var(--line)';
      b.style.color = 'var(--text-2)';
      b.dataset.selected = 'false';
    });
    btn.style.borderColor = 'var(--magenta)';
    btn.style.color = 'var(--text-1)';
    btn.dataset.selected = 'true';
  });
});

document.getElementById('saveModalBtn').addEventListener('click', () => {
  const game = backlog.find(g => g.id === currentEditId);
  if(!game) return;

  const selectedStatusBtn = document.querySelector('.status-pick-btn[data-selected="true"]');
  game.status = selectedStatusBtn ? selectedStatusBtn.dataset.status : game.status;

  const scoreVal = document.getElementById('modalScoreInput').value;
  game.score = scoreVal === '' ? null : parseFloat(scoreVal);
  game.hours = parseInt(document.getElementById('modalHoursInput').value) || 0;
  game.review = document.getElementById('modalReviewInput').value;
  game.spoiler = document.getElementById('modalSpoilerInput').checked;
  if(game.status === 'terminei' && game.totalHours < game.hours) game.totalHours = game.hours;

  closeEditModal();
  const activeFilter = document.querySelector('.tab-btn.active').dataset.filter;
  renderBacklog(activeFilter);
  showToast('Jogo atualizado com sucesso!');
});

/* ===================== MOTOR DE BUSCA (IGDB) ===================== */
const searchInput = document.getElementById('igdbSearchInput');
const igdbResultsEl = document.getElementById('igdbResults');
const igdbEmptyEl = document.getElementById('igdbEmpty');
const igdbLoadingEl = document.getElementById('igdbLoading');
let searchDebounce = null;

searchInput.addEventListener('input', () => {
  clearTimeout(searchDebounce);
  const query = searchInput.value.trim().toLowerCase();

  if(query === ''){
    igdbResultsEl.innerHTML = '';
    igdbEmptyEl.classList.remove('hidden');
    igdbLoadingEl.classList.add('hidden');
    return;
  }

  igdbEmptyEl.classList.add('hidden');
  igdbLoadingEl.classList.remove('hidden');
  igdbResultsEl.innerHTML = '';

  searchDebounce = setTimeout(() => {
    igdbLoadingEl.classList.add('hidden');
    const results = igdbDatabase.filter(g => g.title.toLowerCase().includes(query));
    renderIgdbResults(results);
  }, 450);
});

function renderIgdbResults(results){
  igdbResultsEl.innerHTML = '';
  if(results.length === 0){
    igdbResultsEl.innerHTML = `<div class="col-span-full text-center py-12" style="color:var(--text-3);">
      <p class="text-sm">Nenhum jogo encontrado no IGDB para essa busca.</p>
    </div>`;
    return;
  }
  results.forEach(g => {
    const card = document.createElement('div');
    card.className = 'igdb-result rounded-2xl overflow-hidden flex flex-col';
    card.innerHTML = `
      <img src="${g.cover}" class="w-full h-48 object-cover" onerror="this.src='https://placehold.co/300x400/171b27/565c70?text=${encodeURIComponent(g.title)}'">
      <div class="p-4 flex-1 flex flex-col">
        <h3 class="font-display font-bold text-base">${g.title}</h3>
        <div class="flex gap-2 mt-2">
          <span class="chip">${g.genre}</span>
          <span class="chip">${g.year}</span>
        </div>
        <p class="text-xs mt-3 leading-relaxed flex-1" style="color:var(--text-2);">${g.synopsis}</p>
        <button class="add-igdb-btn btn-primary mt-4 py-2 rounded-lg text-xs flex items-center justify-center gap-2" data-title="${g.title}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Adicionar à coleção
        </button>
      </div>
    `;
    igdbResultsEl.appendChild(card);
  });

  document.querySelectorAll('.add-igdb-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.title;
      const gameData = igdbDatabase.find(g => g.title === title);
      const newId = Math.max(...backlog.map(g => g.id)) + 1;
      backlog.push({
        id:newId, title:gameData.title, cover:gameData.cover, status:'quero',
        score:null, hours:0, totalHours:0, platform:'PC', genre:gameData.genre, spoiler:false, review:''
      });
      btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg> Adicionado`;
      btn.disabled = true;
      btn.style.opacity = '0.6';
      showToast(`${title} foi salvo na sua coleção (MongoDB)!`);
    });
  });
}

/* ===================== FEED SOCIAL ===================== */
function renderFeed(filter='todos'){
  const feedList = document.getElementById('feedList');
  let data = [...feedData];
  if(filter === 'recentes') data = data.slice(0, 4);
  if(filter === 'notas') data = data.filter(f => f.score !== null && f.score >= 8.5);

  feedList.innerHTML = '';
  if(data.length === 0){
    feedList.innerHTML = `<div class="py-12 text-center" style="color:var(--text-3);"><p class="text-sm">Nenhuma atividade encontrada para esse filtro.</p></div>`;
    return;
  }

  data.forEach(item => {
    const el = document.createElement('div');
    el.className = 'feed-item pl-6 pb-7 relative';
    el.innerHTML = `
      <div class="feed-dot"></div>
      <div class="flex items-start gap-3">
        <img src="https://api.dicebear.com/7.x/shapes/svg?seed=${item.avatarSeed}&backgroundColor=171b27" class="w-10 h-10 rounded-xl border shrink-0" style="border-color:var(--line);">
        <div class="flex-1 min-w-0">
          <p class="text-sm">
            <span class="font-semibold">${item.user}</span>
            <span style="color:var(--text-2);"> ${item.action} </span>
            <span class="font-semibold" style="color:var(--cyan);">${item.game}</span>
            ${item.score !== null ? `<span class="score-badge ${scoreClass(item.score)} ml-2 align-middle" style="width:30px;height:30px;font-size:12px;display:inline-flex;">${item.score}</span>` : ''}
          </p>
          <p class="text-xs mt-0.5" style="color:var(--text-3);">${item.time}</p>
          ${item.hasReview ? `
            <div class="mt-3 rounded-xl p-3.5" style="background:var(--bg-panel); border:1px solid var(--line-soft);">
              <p class="text-sm leading-relaxed" style="color:var(--text-1);">${item.review}</p>
            </div>
          ` : ''}
        </div>
      </div>
    `;
    feedList.appendChild(el);
  });
}

document.querySelectorAll('.feed-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.feed-filter-btn').forEach(b => {
      b.style.color = 'var(--text-2)';
      b.style.borderColor = 'var(--line)';
    });
    btn.style.color = 'var(--text-1)';
    btn.style.borderColor = 'var(--magenta)';
    renderFeed(btn.dataset.feedfilter);
  });
});

/* ===================== GRÁFICOS (Chart.js) ===================== */
let chartsRendered = false;
function renderCharts(){
  if(chartsRendered) return;
  chartsRendered = true;

  Chart.defaults.color = '#8b90a3';
  Chart.defaults.font.family = "'Inter', sans-serif";

  new Chart(document.getElementById('chartHoursMonth'), {
    type:'bar',
    data:{
      labels:['Jan','Fev','Mar','Abr','Mai','Jun'],
      datasets:[{
        label:'Horas',
        data:[42, 58, 35, 70, 64, 81],
        backgroundColor:'#ff3d8a',
        borderRadius:6,
        maxBarThickness:36
      }]
    },
    options:{
      responsive:true,
      plugins:{legend:{display:false}},
      scales:{
        x:{grid:{display:false}},
        y:{grid:{color:'#1d212e'}, beginAtZero:true}
      }
    }
  });

  new Chart(document.getElementById('chartGenres'), {
    type:'doughnut',
    data:{
      labels:['RPG', 'Ação', 'Roguelike', 'Simulação', 'Metroidvania'],
      datasets:[{
        data:[38, 24, 16, 14, 8],
        backgroundColor:['#ff3d8a','#3ddcff','#ffb23d','#3dff9e','#7c6cff'],
        borderWidth:0
      }]
    },
    options:{
      responsive:true,
      plugins:{legend:{position:'bottom', labels:{boxWidth:10, padding:12, font:{size:11}}}}
    }
  });

  new Chart(document.getElementById('chartPlatforms'), {
    type:'pie',
    data:{
      labels:['PC', 'PS5', 'Switch', 'Xbox'],
      datasets:[{
        data:[58, 24, 13, 5],
        backgroundColor:['#3ddcff','#5d9fff','#ff5d5d','#3dff9e'],
        borderWidth:0
      }]
    },
    options:{
      responsive:true,
      plugins:{legend:{position:'bottom', labels:{boxWidth:10, padding:12, font:{size:11}}}}
    }
  });

  new Chart(document.getElementById('chartScores'), {
    type:'bar',
    data:{
      labels:['0-2','2-4','4-6','6-7','7-8','8-9','9-10'],
      datasets:[{
        label:'Jogos',
        data:[0, 1, 2, 5, 18, 41, 22],
        backgroundColor:'#3ddcff',
        borderRadius:6,
        maxBarThickness:40
      }]
    },
    options:{
      responsive:true,
      plugins:{legend:{display:false}},
      scales:{
        x:{grid:{display:false}},
        y:{grid:{color:'#1d212e'}, beginAtZero:true}
      }
    }
  });
}

/* ===================== INIT ===================== */
renderBacklog('jogando');
renderFeed('todos');
