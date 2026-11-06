(function(){
var CLIENT='ca-pub-3700786821756111', SLOTS={L:'',R:'',M:''};
function get(){try{return JSON.parse(localStorage.getItem('tdv_consent'));}catch(e){return null;}}
function set(v){try{localStorage.setItem('tdv_consent',JSON.stringify(v));}catch(e){}}
function loadAds(mode){
 if(!CLIENT||window.__tdvAds)return;window.__tdvAds=1;
 window.adsbygoogle=window.adsbygoogle||[];if(mode!=='all')window.adsbygoogle.requestNonPersonalizedAds=1;
 var s=document.createElement('script');s.async=true;s.crossOrigin='anonymous';
 s.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+encodeURIComponent(CLIENT);document.head.appendChild(s);
 document.querySelectorAll('[data-ad]').forEach(function(a){
  var slot=SLOTS[a.getAttribute('data-ad')];if(!slot)return;
  var ins=document.createElement('ins');ins.className='adsbygoogle';ins.style.display='block';
  ins.setAttribute('data-ad-client',CLIENT);ins.setAttribute('data-ad-slot',slot);ins.setAttribute('data-ad-format','auto');ins.setAttribute('data-full-width-responsive','true');
  a.appendChild(ins);a.setAttribute('data-filled','1');try{window.adsbygoogle.push({});}catch(e){}
 });
}
var bar;
function build(){
 bar=document.createElement('div');bar.className='ck';bar.hidden=true;bar.setAttribute('role','region');bar.setAttribute('aria-label','Aviso de cookies');
 bar.innerHTML='<div class="in"><p>Usamos cookies essenciais para o site funcionar e cookies de publicidade (Google AdSense). Aceite todos para ver anúncios personalizados, recuse para ver apenas anúncios não personalizados, ou personalize. <a href="cookies.html">Saiba mais</a></p>'
 +'<button type="button" class="btn o" data-k="ess">Recusar</button><button type="button" class="btn o" data-k="cfg">Personalizar</button><button type="button" class="btn" data-k="all">Aceitar todos</button>'
 +'<div class="pnl" hidden><label><input type="checkbox" checked disabled><span><b>Essenciais</b> — sessão de login e suas escolhas. Sempre ativos.</span></label>'
 +'<label><input type="checkbox" id="ck-ads"><span><b>Anúncios personalizados</b> — desmarcado, você vê apenas anúncios não personalizados.</span></label>'
 +'<button type="button" class="btn" data-k="save">Salvar preferências</button></div></div>';
 document.body.appendChild(bar);
 bar.addEventListener('click',function(e){
  var k=e.target.getAttribute&&e.target.getAttribute('data-k');if(!k)return;
  var pnl=bar.querySelector('.pnl');
  if(k==='cfg'){pnl.hidden=!pnl.hidden;document.getElementById('ck-ads').checked=(get()==='all');return;}
  var had=!!get(),v=k==='all'?'all':(k==='save'&&document.getElementById('ck-ads').checked?'all':'essential');
  set(v);bar.hidden=true;if(window.__tdvAds&&had)location.reload();else loadAds(v);
 });
}
function init(){
 if(!CLIENT)return;build();
 var c=get();if(c)loadAds(c);else bar.hidden=false;
 document.addEventListener('click',function(e){var m=e.target.closest&&e.target.closest('.c-manage');if(m){e.preventDefault();bar.hidden=false;bar.querySelector('.pnl').hidden=false;document.getElementById('ck-ads').checked=(get()==='all');}});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
