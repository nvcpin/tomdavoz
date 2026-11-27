(function(){
var CLIENT='ca-pub-3700786821756111', SLOTS={L:'',R:'',M:''};
function get(){try{return JSON.parse(localStorage.getItem('tdv_consent'));}catch(e){return null;}}
function set(v){try{localStorage.setItem('tdv_consent',JSON.stringify(v));}catch(e){}}

// Google Tag Manager — Analytics opcional; autorizações de publicidade independentes.
function tdvAnalyticsChoice(){try{return JSON.parse(localStorage.getItem('tdv_analytics_consent'));}catch(e){return null;}}
function tdvAnalyticsSet(value){try{localStorage.setItem('tdv_analytics_consent',JSON.stringify(value));}catch(e){}tdvAnalyticsApply(value);}
function tdvAnalyticsApply(value){
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};
  if(!window.__tdvConsentDefaults){window.__tdvConsentDefaults=true;window.gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});}
  if(value!==true){
    if(window.__tdvGtm){window.gtag('consent','update',{analytics_storage:'denied'});}
    if(value===false){document.cookie.split(';').forEach(function(c){var n=c.split('=')[0].trim();if(/^_ga(?:_|$)/.test(n)){document.cookie=n+'=; Max-Age=0; path=/';document.cookie=n+'=; Max-Age=0; path=/; domain=tomdavoz.com.br';}});}
    return;
  }
  if(window.__tdvGtm)return;
  window.gtag('consent','update',{analytics_storage:'granted'});
  window.__tdvGtm=true;
  window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});
  var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id=GTM-K389WTXW';document.head.appendChild(s);
}

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
 bar.innerHTML='<div class="in"><p>Usamos cookies essenciais e, com sua autorização, cookies de análise de visitas (Google Analytics) e de publicidade personalizada (Google AdSense). Você pode aceitar todos, recusar os opcionais ou personalizar suas preferências. <a href="cookies.html">Saiba mais</a></p>'
 +'<button type="button" class="btn o" data-k="ess">Recusar</button><button type="button" class="btn o" data-k="cfg">Personalizar</button><button type="button" class="btn" data-k="all">Aceitar todos</button>'
 +'<div class="pnl" hidden><label><input type="checkbox" checked disabled><span><b>Essenciais</b> — sessão de login e suas escolhas. Sempre ativos.</span></label>'
 +'<label><input type="checkbox" id="ck-analytics"><span><b>Análise de visitas</b> — permite medir visitas e origens de acesso com Google Analytics. Opcional.</span></label>'
 +'<label><input type="checkbox" id="ck-ads"><span><b>Anúncios personalizados</b> — desmarcado, você vê apenas anúncios não personalizados.</span></label>'
 +'<button type="button" class="btn" data-k="save">Salvar preferências</button></div></div>';
 document.body.appendChild(bar);
 bar.addEventListener('click',function(e){
  var k=e.target.getAttribute&&e.target.getAttribute('data-k');if(!k)return;
  var pnl=bar.querySelector('.pnl');
  if(k==='cfg'){pnl.hidden=!pnl.hidden;document.getElementById('ck-analytics').checked=(tdvAnalyticsChoice()===true);document.getElementById('ck-ads').checked=(get()==='all');return;}
  var had=!!get(),v=k==='all'?'all':(k==='save'&&document.getElementById('ck-ads').checked?'all':'essential');
  var allow=k==='all'||(k==='save'&&document.getElementById('ck-analytics').checked);var reloadAnalytics=window.__tdvGtm&&!allow;set(v);tdvAnalyticsSet(allow);bar.hidden=true;if(reloadAnalytics||(window.__tdvAds&&had))location.reload();else loadAds(v);
 });
}
function init(){
 build();var a=tdvAnalyticsChoice();tdvAnalyticsApply(a);
 var c=get();if(c&&a!==null){if(CLIENT)loadAds(c);}else bar.hidden=false;
 document.addEventListener('click',function(e){var m=e.target.closest&&e.target.closest('.c-manage');if(m){e.preventDefault();bar.hidden=false;bar.querySelector('.pnl').hidden=false;document.getElementById('ck-analytics').checked=(tdvAnalyticsChoice()===true);document.getElementById('ck-ads').checked=(get()==='all');}});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
