const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const root=document.documentElement;
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

// Abas
function show(id){$$('main section').forEach(s=>s.hidden=s.id!==id);$$('nav [data-tab]').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===id))}
$$('nav [data-tab]').forEach(b=>b.onclick=()=>show(b.dataset.tab));

// Tema
function setTheme(t){root.dataset.theme=t;const d=t==='dark';$('#theme').textContent=d?'☀️ Modo claro':'🌙 Modo escuro';$('#theme').setAttribute('aria-pressed',d);store.set('theme',t)}
setTheme(store.get('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
$('#theme').onclick=()=>setTheme(root.dataset.theme==='dark'?'light':'dark');

// Carrossel
const slides=$$('.slide');let cur=0,timer=null;
slides.forEach((_,i)=>{const b=document.createElement('button');b.className='dot';b.setAttribute('aria-label','Ir ao slide '+(i+1));b.onclick=()=>go(i);$('#dots').append(b)});
function go(i){cur=(i+slides.length)%slides.length;slides.forEach((s,k)=>s.classList.toggle('on',k===cur));$$('.dot').forEach((d,k)=>d.setAttribute('aria-current',k===cur))}
function play(){timer=setInterval(()=>go(cur+1),5000)}
$('#prev').onclick=()=>go(cur-1);$('#next').onclick=()=>go(cur+1);
$('#pause').onclick=e=>{const p=timer!==null;if(p){clearInterval(timer);timer=null}else play();e.target.textContent=p?'▶ Retomar':'⏸ Pausar';e.target.setAttribute('aria-pressed',p)};
go(0);play();

// Cardápio
const items=[
['☕','Espresso','Bebidas','Dose curta e intensa de grãos da casa.','R$ 6'],
['🥛','Cappuccino','Bebidas','Espresso, leite vaporizado e espuma cremosa.','R$ 12'],
['🧊','Cold brew','Bebidas','Extraído a frio por 18 horas. Suave e refrescante.','R$ 14'],
['🧀','Pão de queijo','Salgados','Receita mineira, crocante por fora e macio por dentro.','R$ 5'],
['🥪','Sanduíche natural','Salgados','Pão integral, frango desfiado e ricota.','R$ 16'],
['🍫','Bolo de chocolate','Doces','Massa úmida com cobertura de cacau 70%.','R$ 11'],
['🍞','Torrada com geleia','Doces','Pão rústico e geleia artesanal de frutas vermelhas.','R$ 9'],
['🍮','Pudim de leite','Doces','Cremoso, com calda de caramelo.','R$ 10']];
function render(){const q=$('#q').value.trim().toLowerCase(),c=$('#cat').value;
 const r=items.filter(i=>(!c||i[2]===c)&&(i[1]+i[3]).toLowerCase().includes(q));
 $('#menu').innerHTML=r.map(i=>`<article class="card"><div class="ico" aria-hidden="true">${i[0]}</div><h3>${i[1]}</h3><span class="tag">${i[2]}</span><p>${i[3]}</p><strong>${i[4]}</strong></article>`).join('');
 $('#count').textContent=r.length?r.length+' item(ns) encontrado(s).':'Nenhum item encontrado.'}
$('#q').oninput=render;$('#cat').onchange=render;render();

// Formulários
const emailOk=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
function chk(el,err,msg,ok){const bad=!ok;$(err).textContent=bad?msg:'';el.setAttribute('aria-invalid',bad);return ok}
$('#fc').onsubmit=e=>{e.preventDefault();
 const a=chk($('#cn'),'#en','Informe seu nome.',$('#cn').value.trim().length>1);
 const b=chk($('#ce'),'#ee','Informe um e‑mail válido.',emailOk($('#ce').value));
 const c=chk($('#cm'),'#em','Escreva uma mensagem (mín. 10 caracteres).',$('#cm').value.trim().length>=10);
 $('#cok').textContent=(a&&b&&c)?'Obrigado! Responderemos em até 24 horas.':'';if(a&&b&&c)e.target.reset()};
$('#fl').onsubmit=e=>{e.preventDefault();
 const a=chk($('#le'),'#lee','Informe um e‑mail válido.',emailOk($('#le').value));
 const b=chk($('#lp'),'#lpe','A senha precisa ter 6 ou mais caracteres.',$('#lp').value.length>=6);
 $('#lok').textContent=(a&&b)?'Login realizado! Bem‑vindo ao Clube Aurora.':''};
$('#show').onchange=e=>$('#lp').type=e.target.checked?'text':'password';

// Acessibilidade
let fs=parseInt(store.get('fs')||100);
function setFs(v){fs=Math.min(150,Math.max(80,v));root.style.fontSize=fs+'%';$('#fs').textContent=fs+'%';store.set('fs',fs)}
setFs(fs);
$('#fp').onclick=()=>setFs(fs+10);$('#fm').onclick=()=>setFs(fs-10);$('#fr').onclick=()=>setFs(100);
$('#hc').onclick=e=>{const on=root.dataset.contrast!=='high';if(on)root.dataset.contrast='high';else delete root.dataset.contrast;e.target.setAttribute('aria-pressed',on)};
$('#rm').onclick=e=>{const on=document.body.classList.toggle('no-motion');e.target.setAttribute('aria-pressed',on);if(on&&timer){$('#pause').click()}};