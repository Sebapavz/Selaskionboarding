/**
 * Selaski Onboarding Guide — v1.1
 * Agregar videos: busca VIDEO_URLS y reemplaza null con la URL embed.
 *   Loom:    'https://www.loom.com/embed/ID'
 *   YouTube: 'https://www.youtube.com/embed/ID'
 */
(function () {
  'use strict';
  if (document.getElementById('slk-root')) return;

  ['https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap',
   'https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/1.119.0/iconfont/tabler-icons.min.css'
  ].forEach(function (h) { var l=document.createElement('link');l.rel='stylesheet';l.href=h;document.head.appendChild(l); });

  var LOGO = 'data:image/jpeg;base64,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';

  // ============================================================
  // VIDEO_URLS
  // ============================================================
  var VID = {
    master: {
      empresas:  'https://www.youtube.com/embed/gvH_Q6jX6cY',   // Paso 1
      cuenta:    null,   // Paso 2
      usuarios:  null,   // Paso 3
      contactos: null,   // Paso 4
      etiquetas: null,   // Paso 5 (condicional)
      alertas:   null,   // Paso 6
      orden:     null,   // Paso 7
      embarque:  null,   // Paso 8
      listados:  null,   // Paso 9
      reportes:  null    // Paso 10
    },
    secundario: {
      credenciales: null,
      acceso:       null,
      dashboard:    null,
      ordenes:      null,
      embarques:    null,
      documentos:   null,
      reportes:     null
    }
  };

  var MS=[
    {id:'empresas',title:'Gestión de empresas',path:'\u2699\ufe0f > Usuarios & Configuración > Gestión de Empresas',block:'config',bl:'Configuración base',desc:'Crear la empresa de la cuenta. Sin una empresa registrada no es posible crear operaciones. La moneda se asigna automáticamente según el país.',actions:[{i:'ti-building',t:'Ingresar nombre de la empresa (obligatorio)'},{i:'ti-globe',t:'Seleccionar el país — define la moneda base automáticamente'},{i:'ti-id',t:'Agregar registro fiscal si corresponde (opcional)'},{i:'ti-photo',t:'Cargar logo en PNG o JPEG (opcional)'}],warn:'El país no puede modificarse una vez que la empresa tiene operaciones creadas.'},
    {id:'cuenta',title:'Configuración de cuenta',path:'\u2699\ufe0f > Usuarios & Configuración > Configuración Cuenta',block:'config',bl:'Configuración base',desc:'Definir cómo se mostrarán fechas, montos y decimales en toda la plataforma.',actions:[{i:'ti-calendar',t:'Elegir formato de fecha: DD/MM/YYYY para Latinoamérica'},{i:'ti-currency-dollar',t:'Seleccionar moneda base: USD, CLP, MXN, EUR, etc.'},{i:'ti-decimal',t:'Definir cantidad de decimales (por defecto: 2)'}]},
    {id:'usuarios',title:'Usuarios secundarios',path:'\u2699\ufe0f > Usuarios & Configuración > Usuarios Secundarios',block:'config',bl:'Configuración base',desc:'Crear los accesos del equipo y definir qué puede ver cada usuario mediante filtros.',actions:[{i:'ti-user-plus',t:'Crear usuarios con nombre, email y cargo'},{i:'ti-building',t:'Asignar empresas — sin asignar, el usuario accede a todas'},{i:'ti-tags',t:'Definir tipo de operación: importación, exportación o ambas'}],tip:'Los usuarios secundarios no pueden crear otros usuarios ni editar sus permisos.'},
    {id:'contactos',title:'Contactos',path:'Módulo Contactos > Agregar contacto',block:'maestros',bl:'Maestros',desc:'Registrar los contactos principales. La información de pago se importa automáticamente a las órdenes.',actions:[{i:'ti-truck',t:'Proveedor: forma de pago y días de producción estimados'},{i:'ti-shopping-cart',t:'Comprador: forma de pago y días de demurrage'},{i:'ti-file-invoice',t:'Agente de aduana: honorarios por monto fijo o rangos'}],tip:'Marca un contacto como favorito (\u2b50) para que se asigne por defecto en cada nueva orden.'},
    {id:'etiquetas',title:'Gestor de etiquetas',path:'\u2699\ufe0f > Gestor de Etiquetas',block:'maestros',bl:'Maestros',conditional:true,question:'¿Deseas segmentar tus productos u órdenes por categorías o etiquetas?',questionDesc:'Permite filtrar operaciones en listados y reportes. Puedes configurarlas en cualquier momento.',desc:'Crear categorías, subcategorías y tags para clasificar productos y órdenes.',actions:[{i:'ti-tag',t:'Crear categorías y subcategorías para productos'},{i:'ti-tags',t:'Crear tags para clasificar órdenes'},{i:'ti-filter',t:'Verificar disponibilidad en filtros de listados'}],tip:'Los cambios se reflejan en toda la plataforma de inmediato.'},
    {id:'alertas',title:'Alertas',path:'\u2699\ufe0f > Alertas',block:'reglas',bl:'Reglas operativas',desc:'Configurar notificaciones por email para eventos clave de la operación.',actions:[{i:'ti-toggle-right',t:'Activar alertas con el switch Off/On'},{i:'ti-clock',t:'Ingresar días de anticipación donde corresponda'},{i:'ti-bell-ringing',t:'Recomendada \u2736 Cambio ETD — automática, sin configurar días'},{i:'ti-bell-ringing',t:'Recomendada \u2736 Cambio ETA — automática, sin configurar días'},{i:'ti-clock-alert',t:'Recomendada \u2736 Demurrage — configurar días según contrato'}]},
    {id:'orden',title:'Crear primera orden',path:'Módulo Importación o Exportación > Crear orden',block:'ops',bl:'Operaciones',desc:'Registrar la primera orden de compra o venta. La forma de pago se importa automáticamente del contacto.',actions:[{i:'ti-building',t:'Seleccionar empresa y tag'},{i:'ti-truck',t:'Elegir proveedor o comprador'},{i:'ti-package',t:'Cargar productos desde maestro, archivo o manualmente'},{i:'ti-git-branch',t:'¿Más de un embarque? Activar "Orden fraccionada" antes de guardar'}],warn:'"Orden fraccionada" no puede activarse después de guardar.'},
    {id:'embarque',title:'Embarque',path:'Orden > Pestaña Embarques',block:'ops',bl:'Operaciones',desc:'Si la orden no es fraccionada, Selaski genera el embarque automáticamente. Si es fraccionada, se crean desde la pestaña Embarques.',actions:[{i:'ti-radar',t:'Tracking: BL, booking o contenedor + carrier'},{i:'ti-timeline',t:'Lead Time: etapas proyectadas vs. tiempos reales'},{i:'ti-container',t:'Carga: contenedores y cantidades despachadas'},{i:'ti-file-check',t:'Documentos: cargar y gestionar documentos requeridos'}],tip:'El tracking se actualiza automáticamente cada día.'},
    {id:'listados',title:'Listados de la plataforma',path:'Módulo Embarques > Listado de Embarques',block:'ops',bl:'Operaciones',desc:'Vista centralizada de embarques activos. Personaliza columnas, combina filtros y descarga informes en Excel.',actions:[{i:'ti-layout-columns',t:'Personalizar: agregar, quitar y reordenar columnas'},{i:'ti-filter',t:'Filtros combinables: empresa, tag, vía, estado, fechas'},{i:'ti-download',t:'Descargar informe Excel con columnas y filtros activos'},{i:'ti-package',t:'Listado de Productos: vista estándar o semanal'}],tip:'La configuración de columnas se aplica también al informe descargable.'},
    {id:'reportes',title:'Reportes y accesos compartidos',path:'Módulo Reportes II > Agregar responsable',block:'ops',bl:'Operaciones',desc:'Compartir información con equipos externos o internos mediante link protegido con PIN.',actions:[{i:'ti-user-plus',t:'Crear responsable con nombre y email'},{i:'ti-file-text',t:'Asignar informes: embarques, productos, carga, órdenes'},{i:'ti-adjustments',t:'Personalizar y filtrar información antes de compartir'},{i:'ti-link',t:'Compartir link — responsable recibe PIN por correo'}],tip:'El responsable guarda el link en favoritos para acceder sin ingresar a Selaski.'}
  ];

  var SS=[
    {id:'credenciales',title:'Acceso y credenciales',path:'www.selaski.com/login',block:'access',bl:'Antes de entrar',desc:'Ingresar con las credenciales del usuario master. El acceso está limitado por los filtros configurados.',actions:[{i:'ti-login',t:'Ingresar con email y contraseña del master'},{i:'ti-lock',t:'Cambiar contraseña si es el primer acceso'}],warn:'Solo verás las empresas, tags y operaciones en los filtros que el master definió.'},
    {id:'acceso',title:'Entender tu nivel de acceso',path:'Consultar con usuario master',block:'access',bl:'Antes de entrar',desc:'Identificar qué información está disponible según los filtros del master.',actions:[{i:'ti-building',t:'Confirmar a qué empresas tengo acceso'},{i:'ti-tags',t:'Confirmar qué tags puedo visualizar'},{i:'ti-arrow-left-right',t:'Importación, exportación o ambas'}],tip:'Si no ves información esperada, consulta al usuario master.'},
    {id:'dashboard',title:'Módulo de operaciones',path:'Pantalla principal > Dashboard / Calendario / Mapa',block:'ops',bl:'Operaciones',desc:'Vista principal con embarques activos. Dashboard, calendario y mapa en tiempo real.',actions:[{i:'ti-layout-dashboard',t:'Dashboard: embarques activos y detalle'},{i:'ti-calendar',t:'Calendario: ETA, ETD, arribo bodega, producción'},{i:'ti-map',t:'Mapa: rastrear buques en tiempo real'}]},
    {id:'ordenes',title:'Órdenes de compra / venta',path:'Módulo Importación o Exportación > Listado',block:'ops',bl:'Operaciones',desc:'Gestionar las órdenes accesibles. Filtrar, personalizar columnas y descargar reportes.',actions:[{i:'ti-filter',t:'Filtros por número, SKU, proveedor o tag'},{i:'ti-layout-columns',t:'Personalizar columnas del listado'},{i:'ti-download',t:'Descargar informe en Excel'}],warn:'Los usuarios secundarios no pueden crear ni eliminar órdenes.'},
    {id:'embarques',title:'Embarques',path:'Módulo Embarques > Listado de embarques',block:'ops',bl:'Operaciones',desc:'Ver y gestionar embarques activos: tracking, carga, costos, aduana y documentos.',actions:[{i:'ti-radar',t:'Verificar estado y tracking'},{i:'ti-container',t:'Revisar carga contenerizada y productos'},{i:'ti-currency-dollar',t:'Consultar costos si tienes acceso'}]},
    {id:'documentos',title:'Documentos',path:'Módulo Documentos > Listado de documentos',block:'ops',bl:'Operaciones',desc:'Ver el estado de todos los documentos. Cargar o descargar según el permiso asignado.',actions:[{i:'ti-file-check',t:'Revisar documentos pendientes y fechas de vencimiento'},{i:'ti-upload',t:'Cargar documentos asignados a tu responsabilidad'},{i:'ti-message-circle',t:'Chat para comentar o solicitar cambios'}],tip:'Solo puedes gestionar los documentos donde el master te asignó.'},
    {id:'reportes',title:'Reportes compartidos',path:'Link de acceso enviado por el master',block:'ops',bl:'Operaciones',desc:'Acceder a reportes del master mediante link protegido con PIN.',actions:[{i:'ti-link',t:'Abrir link y guardarlo en favoritos'},{i:'ti-key',t:'Ingresar PIN recibido por correo'},{i:'ti-chart-bar',t:'Consultar reportes disponibles'}]}
  ];

  var BC={config:'slk-bc',maestros:'slk-bm',reglas:'slk-br',ops:'slk-bo',access:'slk-ba'};
  var W=340, H=564;

  // --- STATE ---
  var KEY='slk-guide-v2';
  var G=(function(){
    try{var s=JSON.parse(localStorage.getItem(KEY));if(s&&typeof s==='object')return s;}catch(e){}
    return{tab:'master',step:{master:0,secundario:0},skipped:{master:[],secundario:[]},decisions:{},open:true,pos:null};
  })();
  function save(){try{localStorage.setItem(KEY,JSON.stringify(G));}catch(e){}}

  // --- CSS ---
  var st=document.createElement('style');
  st.id='slk-css';
  st.textContent=[
    '#slk-root{position:fixed;z-index:2147483647;font-family:"DM Sans",-apple-system,sans-serif;user-select:none;}',
    '#slk-root *{box-sizing:border-box;margin:0;padding:0;font-family:"DM Sans",-apple-system,sans-serif;}',
    /* PANEL */
    '#slk-root .slk-panel{width:'+W+'px;height:'+H+'px;background:#fff;border:1px solid #dde2ee;border-radius:12px;box-shadow:0 8px 32px rgba(31,51,94,.18);display:flex;flex-direction:column;overflow:hidden;}',
    /* MINI */
    '#slk-root .slk-mini{width:64px;background:#1F335E;border-radius:12px;box-shadow:0 4px 16px rgba(31,51,94,.25);cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:10px 6px;gap:4px;transition:opacity .15s;}',
    '#slk-root .slk-mini:hover{opacity:.88;}',
    '#slk-root .slk-mini img{height:18px;width:52px;object-fit:contain;mix-blend-mode:screen;}',
    '#slk-root .slk-mini-badge{background:#FF8D3D;color:#fff;font-size:9px;font-weight:700;padding:2px 6px;border-radius:99px;white-space:nowrap;}',
    /* HEADER — drag handle */
    '#slk-root .slk-hd{background:#1F335E;padding:9px 12px;display:flex;align-items:center;gap:8px;flex-shrink:0;border-radius:11px 11px 0 0;cursor:grab;}',
    '#slk-root .slk-hd:active{cursor:grabbing;}',
    '#slk-root .slk-logo{height:22px;mix-blend-mode:screen;flex:1;object-fit:contain;object-position:left;pointer-events:none;}',
    '#slk-root .slk-icon-btn{background:rgba(255,255,255,.1);border:none;color:#fff;width:24px;height:24px;border-radius:5px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;transition:background .15s;}',
    '#slk-root .slk-icon-btn:hover{background:rgba(255,255,255,.22);}',
    /* TABS */
    '#slk-root .slk-tabs{display:flex;padding:4px;gap:3px;background:#f0f3f9;border-bottom:1px solid #dde2ee;flex-shrink:0;}',
    '#slk-root .slk-tab{flex:1;padding:5px;border:none;background:transparent;border-radius:4px;font-size:11px;color:#5a6a8a;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;transition:all .15s;font-family:inherit;}',
    '#slk-root .slk-tab.slk-ta{background:#1F335E;color:#fff;}',
    '#slk-root .slk-tab i{font-size:14px;}',
    /* PROGRESS */
    '#slk-root .slk-prog{display:flex;align-items:center;padding:7px 10px;gap:0;flex-shrink:0;background:#f9fafc;border-bottom:1px solid #dde2ee;overflow-x:auto;}',
    '#slk-root .slk-prog::-webkit-scrollbar{height:2px;}',
    '#slk-root .slk-dot{width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:8px;font-weight:700;flex-shrink:0;border:1.5px solid #dde2ee;background:#fff;color:#8a9abb;cursor:pointer;transition:all .15s;}',
    '#slk-root .slk-dot.slk-dd{background:#1D9E75;border-color:#1D9E75;color:#fff;}',
    '#slk-root .slk-dot.slk-dc{background:#FF8D3D;border-color:#FF8D3D;color:#fff;}',
    '#slk-root .slk-dot.slk-ds{background:#f4f6fa;border-color:#dde2ee;color:#dde2ee;cursor:default;}',
    '#slk-root .slk-ln{flex:1;height:2px;background:#dde2ee;min-width:3px;}',
    '#slk-root .slk-ln.slk-ld{background:#1D9E75;}',
    /* BODY — scrollable, fills remaining height */
    '#slk-root .slk-body{flex:1;overflow-y:auto;min-height:0;}',
    '#slk-root .slk-body::-webkit-scrollbar{width:3px;}',
    '#slk-root .slk-body::-webkit-scrollbar-thumb{background:#dde2ee;border-radius:2px;}',
    /* VIDEO */
    '#slk-root .slk-vw{aspect-ratio:16/9;background:#1F335E;position:relative;flex-shrink:0;}',
    '#slk-root .slk-vw iframe{width:100%;height:100%;border:none;display:block;}',
    '#slk-root .slk-vp{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;}',
    '#slk-root .slk-vpi{width:36px;height:36px;border-radius:50%;background:rgba(255,141,61,.15);border:1.5px solid rgba(255,141,61,.3);display:flex;align-items:center;justify-content:center;color:#FF8D3D;font-size:16px;}',
    '#slk-root .slk-vpt{color:rgba(255,255,255,.4);font-size:10px;}',
    /* CARD */
    '#slk-root .slk-card{padding:11px;}',
    '#slk-root .slk-btag{display:inline-block;font-size:9px;font-weight:700;padding:2px 7px;border-radius:99px;margin-bottom:7px;letter-spacing:.04em;text-transform:uppercase;}',
    '#slk-root .slk-bc{background:rgba(30,158,166,.12);color:#1E9EA6;}',
    '#slk-root .slk-bm{background:rgba(255,141,61,.12);color:#FF8D3D;}',
    '#slk-root .slk-br{background:rgba(30,113,188,.12);color:#1E71BC;}',
    '#slk-root .slk-bo{background:rgba(29,158,117,.12);color:#1D9E75;}',
    '#slk-root .slk-ba{background:rgba(31,51,94,.08);color:#1F335E;}',
    '#slk-root .slk-sh{display:flex;align-items:flex-start;gap:8px;margin-bottom:8px;}',
    '#slk-root .slk-sn{width:22px;height:22px;border-radius:50%;background:rgba(255,141,61,.12);color:#FF8D3D;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;}',
    '#slk-root .slk-st{font-size:12px;font-weight:700;color:#1F335E;margin-bottom:2px;line-height:1.3;}',
    '#slk-root .slk-sp{font-size:9px;color:#8a9abb;font-family:monospace;background:#f4f6fa;padding:1px 5px;border-radius:3px;display:inline-block;line-height:1.5;}',
    '#slk-root .slk-desc{font-size:11px;color:#5a6a8a;line-height:1.65;margin:6px 0 8px;}',
    '#slk-root .slk-acts{list-style:none;border-top:1px solid #f4f6fa;padding-top:6px;}',
    '#slk-root .slk-acts li{display:flex;align-items:flex-start;gap:6px;padding:4px 0;font-size:10.5px;color:#5a6a8a;border-bottom:1px solid #f9fafc;line-height:1.5;}',
    '#slk-root .slk-acts li:last-child{border-bottom:none;}',
    '#slk-root .slk-acts li i{color:#1E9EA6;font-size:12px;flex-shrink:0;margin-top:1px;}',
    '#slk-root .slk-tip,#slk-root .slk-warn{border-radius:0 4px 4px 0;padding:6px 9px;font-size:10.5px;margin-top:7px;line-height:1.55;display:flex;gap:5px;}',
    '#slk-root .slk-tip{background:rgba(29,158,117,.08);border-left:2px solid #1D9E75;color:#0F6E56;}',
    '#slk-root .slk-warn{background:rgba(255,141,61,.08);border-left:2px solid #FF8D3D;color:#9B4F00;}',
    '#slk-root .slk-tip i,#slk-root .slk-warn i{font-size:12px;flex-shrink:0;margin-top:1px;}',
    /* CONDITIONAL */
    '#slk-root .slk-cond{text-align:center;padding:14px 10px;}',
    '#slk-root .slk-cq{font-size:12px;font-weight:600;color:#1F335E;margin-bottom:6px;line-height:1.4;}',
    '#slk-root .slk-cd{font-size:10.5px;color:#5a6a8a;margin-bottom:14px;line-height:1.6;}',
    '#slk-root .slk-cbtns{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;}',
    '#slk-root .slk-cy{padding:7px 12px;border:none;background:#FF8D3D;color:#fff;border-radius:5px;font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:4px;font-family:inherit;}',
    '#slk-root .slk-cn{padding:7px 12px;border:1px solid #dde2ee;background:#fff;color:#5a6a8a;border-radius:5px;font-size:11px;cursor:pointer;font-family:inherit;}',
    /* FOOTER */
    '#slk-root .slk-ft{display:flex;justify-content:space-between;align-items:center;padding:7px 11px;border-top:1px solid #dde2ee;background:#fff;flex-shrink:0;border-radius:0 0 11px 11px;}',
    '#slk-root .slk-prev,#slk-root .slk-next{padding:5px 10px;border-radius:5px;border:1px solid #dde2ee;background:#fff;color:#1F335E;font-size:11px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:4px;font-family:inherit;transition:all .15s;}',
    '#slk-root .slk-prev:hover,#slk-root .slk-next:hover{background:#f4f6fa;}',
    '#slk-root .slk-next.slk-np{background:#1F335E;border-color:#1F335E;color:#fff;}',
    '#slk-root .slk-next.slk-np:hover{background:#162647;}',
    '#slk-root .slk-prev:disabled,#slk-root .slk-next:disabled{opacity:.3;cursor:default;}'
  ].join('');
  document.head.appendChild(st);

  // --- ROOT ---
  var root=document.createElement('div');
  root.id='slk-root';
  document.body.appendChild(root);

  // --- POSITIONING ---
  function defaultPos(){return{left:window.innerWidth-W-16,top:72};}
  function clamp(p){
    return{
      left:Math.max(8,Math.min(window.innerWidth-W-8,p.left)),
      top:Math.max(8,Math.min(window.innerHeight-80,p.top))
    };
  }
  function applyPos(){
    var p=clamp(G.pos||defaultPos());
    root.style.left=p.left+'px';
    root.style.top=p.top+'px';
  }
  applyPos();
  window.addEventListener('resize',function(){applyPos();});

  // --- DRAG ---
  var dragging=false,dox=0,doy=0;
  function startDrag(e){
    if(e.target.closest('button')||e.target.closest('.slk-tab'))return;
    dragging=true;
    var r=root.getBoundingClientRect();
    dox=e.clientX-r.left;
    doy=e.clientY-r.top;
    document.addEventListener('mousemove',onDrag);
    document.addEventListener('mouseup',stopDrag);
    e.preventDefault();
  }
  function onDrag(e){
    if(!dragging)return;
    var p=clamp({left:e.clientX-dox,top:e.clientY-doy});
    root.style.left=p.left+'px';
    root.style.top=p.top+'px';
  }
  function stopDrag(){
    if(!dragging)return;
    dragging=false;
    var r=root.getBoundingClientRect();
    G.pos={left:r.left,top:r.top};
    save();
    document.removeEventListener('mousemove',onDrag);
    document.removeEventListener('mouseup',stopDrag);
  }
  /* Touch */
  function startTouch(e){
    var t=e.touches[0];
    dragging=true;
    var r=root.getBoundingClientRect();
    dox=t.clientX-r.left;
    doy=t.clientY-r.top;
    document.addEventListener('touchmove',onTouch,{passive:false});
    document.addEventListener('touchend',stopTouch);
  }
  function onTouch(e){
    if(!dragging)return;
    e.preventDefault();
    var t=e.touches[0];
    var p=clamp({left:t.clientX-dox,top:t.clientY-doy});
    root.style.left=p.left+'px';
    root.style.top=p.top+'px';
  }
  function stopTouch(){
    dragging=false;
    var r=root.getBoundingClientRect();
    G.pos={left:r.left,top:r.top};
    save();
    document.removeEventListener('touchmove',onTouch);
    document.removeEventListener('touchend',stopTouch);
  }

  // --- HELPERS ---
  function ss(){return G.tab==='master'?MS:SS;}
  function ci(){return G.step[G.tab];}
  function cs(){return ss()[ci()];}
  function sk(){return new Set(G.skipped[G.tab]);}

  // --- RENDER ---
  function render(){
    var steps=ss(),idx=ci(),s=cs(),skSet=sk();
    var dk=G.tab+'_'+s.id;
    var isPending=s.conditional&&G.decisions[dk]===undefined;
    var skipCount=G.skipped[G.tab].filter(function(x){return x<=idx;}).length;
    var total=steps.length-G.skipped[G.tab].length;
    var vIdx=idx-skipCount;
    var videoUrl=VID[G.tab][s.id];
    var h='';

    if(!G.open){
      h='<div class="slk-mini" id="slk-mini-btn">';
      h+='<img src="'+LOGO+'" alt="Selaski">';
      h+='<span class="slk-mini-badge">'+( vIdx+1)+' / '+total+'</span>';
      h+='</div>';
      root.innerHTML=h;
      document.getElementById('slk-mini-btn').onclick=function(){G.open=true;save();render();};
      document.getElementById('slk-mini-btn').addEventListener('mousedown',startDrag);
      document.getElementById('slk-mini-btn').addEventListener('touchstart',startTouch,{passive:true});
      return;
    }

    h='<div class="slk-panel">';
    h+='<div class="slk-hd" id="slk-drag-hd">';
    h+='<img class="slk-logo" src="'+LOGO+'" alt="Selaski">';
    h+='<button class="slk-icon-btn" id="btn-min" title="Minimizar"><i class="ti ti-minus"></i></button>';
    h+='</div>';

    h+='<div class="slk-tabs">';
    h+='<button class="slk-tab'+(G.tab==='master'?' slk-ta':'')+'" data-tab="master"><i class="ti ti-settings"></i>Master</button>';
    h+='<button class="slk-tab'+(G.tab==='secundario'?' slk-ta':'')+'" data-tab="secundario"><i class="ti ti-user"></i>Secundario</button>';
    h+='</div>';

    h+='<div class="slk-prog">';
    steps.forEach(function(ps,i){
      var isSk=skSet.has(i),isDone=i<idx&&!isSk,isCur=i===idx;
      var cls=isDone?' slk-dd':isCur?' slk-dc':isSk?' slk-ds':'';
      var inn=isDone?'<i class="ti ti-check"></i>':isSk?'&minus;':(i+1);
      h+='<div class="slk-dot'+cls+'" data-step="'+i+'" title="'+ps.title+'">'+inn+'</div>';
      if(i<steps.length-1)h+='<div class="slk-ln'+((isDone||isSk)?' slk-ld':'')+'"></div>';
    });
    h+='</div>';

    h+='<div class="slk-body">';
    h+='<div class="slk-vw">';
    if(videoUrl){
      h+='<iframe src="'+videoUrl+'" allow="autoplay;fullscreen" allowfullscreen></iframe>';
    } else {
      h+='<div class="slk-vp"><div class="slk-vpi"><i class="ti ti-video"></i></div><div class="slk-vpt">Video próximamente</div></div>';
    }
    h+='</div>';

    h+='<div class="slk-card">';
    if(isPending){
      h+='<div class="slk-cond"><div class="slk-cq">'+s.question+'</div><div class="slk-cd">'+s.questionDesc+'</div>';
      h+='<div class="slk-cbtns"><button class="slk-cy" data-dec="yes"><i class="ti ti-check"></i>Sí, configurar</button>';
      h+='<button class="slk-cn" data-dec="no">Omitir</button></div></div>';
    } else {
      h+='<span class="slk-btag '+(BC[s.block]||'slk-bc')+'">'+s.bl+'</span>';
      h+='<div class="slk-sh"><div class="slk-sn">'+(vIdx+1)+'</div><div>';
      h+='<div class="slk-st">'+s.title+'</div><div class="slk-sp">'+s.path+'</div></div></div>';
      h+='<p class="slk-desc">'+s.desc+'</p>';
      h+='<ul class="slk-acts">';
      s.actions.forEach(function(a){h+='<li><i class="ti '+a.i+'"></i><span>'+a.t+'</span></li>';});
      h+='</ul>';
      if(s.tip)h+='<div class="slk-tip"><i class="ti ti-bulb"></i><span>'+s.tip+'</span></div>';
      if(s.warn)h+='<div class="slk-warn"><i class="ti ti-alert-triangle"></i><span>'+s.warn+'</span></div>';
    }
    h+='</div></div>';

    h+='<div class="slk-ft">';
    h+='<button class="slk-prev"'+(idx===0?' disabled':'')+' id="btn-prev"><i class="ti ti-arrow-left"></i>Anterior</button>';
    h+='<span style="font-size:10px;color:#8a9abb;">'+(isPending?'':(vIdx+1)+' / '+total)+'</span>';
    if(idx<steps.length-1){
      h+='<button class="slk-next slk-np" id="btn-next">Siguiente<i class="ti ti-arrow-right"></i></button>';
    } else {
      h+='<button class="slk-next" disabled><i class="ti ti-circle-check"></i>Listo</button>';
    }
    h+='</div></div>';

    root.innerHTML=h;

    /* Drag on header */
    var hd=document.getElementById('slk-drag-hd');
    if(hd){
      hd.addEventListener('mousedown',startDrag);
      hd.addEventListener('touchstart',startTouch,{passive:true});
    }

    document.getElementById('btn-min').onclick=function(){G.open=false;save();render();};
    var prev=document.getElementById('btn-prev');
    if(prev)prev.onclick=function(){
      var pi=G.step[G.tab]-1;
      if(sk().has(pi)){
        G.skipped[G.tab]=G.skipped[G.tab].filter(function(x){return x!==pi;});
        var ps=steps[pi];
        if(ps.conditional)delete G.decisions[G.tab+'_'+ps.id];
      }
      G.step[G.tab]=pi;save();render();
    };
    var next=document.getElementById('btn-next');
    if(next)next.onclick=function(){G.step[G.tab]++;save();render();};

    root.querySelectorAll('.slk-tab').forEach(function(t){
      t.onclick=function(){if(!t.classList.contains('slk-ta')){G.tab=t.dataset.tab;save();render();}};
    });
    root.querySelectorAll('.slk-dot').forEach(function(d){
      d.onclick=function(){
        if(!d.classList.contains('slk-ds')){G.step[G.tab]=parseInt(d.dataset.step,10);save();render();}
      };
    });
    root.querySelectorAll('[data-dec]').forEach(function(b){
      b.onclick=function(){
        var choice=b.dataset.dec;
        G.decisions[dk]=choice;
        if(choice==='no'){G.skipped[G.tab].push(G.step[G.tab]);G.step[G.tab]++;}
        save();render();
      };
    });
  }

  render();
})();
