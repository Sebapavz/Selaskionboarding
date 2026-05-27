/**
 * Selaski Onboarding Guide — v1.0
 *
 * AGREGAR VIDEOS:
 * Busca VIDEO_URLS abajo y reemplaza null con la URL embed de tu video.
 *   Loom:    'https://www.loom.com/embed/TU_VIDEO_ID'
 *   YouTube: 'https://www.youtube.com/embed/TU_VIDEO_ID'
 *
 * AGREGAR A SELASKI (Opción A):
 * Copia este archivo a tu servidor y agrega al final del <body> de Selaski:
 *   <script src="https://TU-DOMINIO.com/selaski-guide.js"></script>
 */
(function () {
  'use strict';
  if (document.getElementById('slk-root')) return;

  ['https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap',
   'https://cdnjs.cloudflare.com/ajax/libs/tabler-icons/1.119.0/iconfont/tabler-icons.min.css'
  ].forEach(function (h) {
    var l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = h;
    document.head.appendChild(l);
  });

  var LOGO = 'data:image/jpeg;base64,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';

  // ============================================================
  // VIDEO_URLS — Reemplaza null con la URL embed de tu video
  // Loom:    'https://www.loom.com/embed/TU_VIDEO_ID'
  // YouTube: 'https://www.youtube.com/embed/TU_VIDEO_ID'
  // ============================================================
  var VID = {
    master: {
      empresas:  https://youtu.be/gvH_Q6jX6cY,   // Paso 1: Gestión de empresas
      cuenta:    null,   // Paso 2: Configuración de cuenta
      usuarios:  null,   // Paso 3: Usuarios secundarios
      contactos: null,   // Paso 4: Contactos
      etiquetas: null,   // Paso 5: Gestor de etiquetas (condicional)
      alertas:   null,   // Paso 6: Alertas
      orden:     null,   // Paso 7: Crear primera orden
      embarque:  null,   // Paso 8: Embarque
      listados:  null,   // Paso 9: Listados de la plataforma
      reportes:  null    // Paso 10: Reportes y accesos compartidos
    },
    secundario: {
      credenciales: null, // Paso 1: Acceso y credenciales
      acceso:       null, // Paso 2: Nivel de acceso
      dashboard:    null, // Paso 3: Módulo de operaciones
      ordenes:      null, // Paso 4: Órdenes
      embarques:    null, // Paso 5: Embarques
      documentos:   null, // Paso 6: Documentos
      reportes:     null  // Paso 7: Reportes compartidos
    }
  };

  var MS = [
    {id:'empresas',title:'Gestión de empresas',path:'\u2699\ufe0f > Usuarios & Configuración > Gestión de Empresas',block:'config',bl:'Configuración base',
     desc:'Crear la empresa de la cuenta. Sin una empresa registrada no es posible crear operaciones. La moneda se asigna automáticamente según el país seleccionado.',
     actions:[
       {i:'ti-building',t:'Ingresar nombre de la empresa (obligatorio)'},
       {i:'ti-globe',t:'Seleccionar el país — define la moneda base automáticamente'},
       {i:'ti-id',t:'Agregar registro fiscal si corresponde (opcional)'},
       {i:'ti-photo',t:'Cargar logo en PNG o JPEG (opcional)'}
     ],warn:'El país no puede modificarse una vez que la empresa tiene operaciones creadas.'},
    {id:'cuenta',title:'Configuración de cuenta',path:'\u2699\ufe0f > Usuarios & Configuración > Configuración Cuenta',block:'config',bl:'Configuración base',
     desc:'Definir cómo se mostrarán fechas, montos y decimales en toda la plataforma. Solo afecta la visualización, no los cálculos internos.',
     actions:[
       {i:'ti-calendar',t:'Elegir formato de fecha: DD/MM/YYYY para Latinoamérica'},
       {i:'ti-currency-dollar',t:'Seleccionar moneda base: USD, CLP, MXN, EUR, etc.'},
       {i:'ti-decimal',t:'Definir cantidad de decimales (por defecto: 2)'}
     ]},
    {id:'usuarios',title:'Usuarios secundarios',path:'\u2699\ufe0f > Usuarios & Configuración > Usuarios Secundarios',block:'config',bl:'Configuración base',
     desc:'Crear los accesos del equipo y definir qué puede ver cada usuario mediante filtros de empresa, tags y tipo de operación.',
     actions:[
       {i:'ti-user-plus',t:'Crear usuarios con nombre, email y cargo'},
       {i:'ti-building',t:'Asignar empresas — si no se asigna ninguna, el usuario accede a todas'},
       {i:'ti-tags',t:'Definir tipo de operación: importación, exportación o ambas'}
     ],tip:'Los usuarios secundarios no pueden crear otros usuarios ni editar sus propios permisos.'},
    {id:'contactos',title:'Contactos',path:'Módulo Contactos > Agregar contacto',block:'maestros',bl:'Maestros',
     desc:'Registrar los contactos principales. Al asignar un contacto a una orden, sus datos de pago se importan automáticamente.',
     actions:[
       {i:'ti-truck',t:'Proveedor: configurar forma de pago y días de producción estimados'},
       {i:'ti-shopping-cart',t:'Comprador: configurar forma de pago y días de demurrage permitidos'},
       {i:'ti-file-invoice',t:'Agente de aduana: configurar cálculo de honorarios por rangos'}
     ],tip:'Marca un contacto como favorito (\u2b50) para que se asigne por defecto en cada nueva orden.'},
    {id:'etiquetas',title:'Gestor de etiquetas',path:'\u2699\ufe0f > Gestor de Etiquetas',block:'maestros',bl:'Maestros',
     conditional:true,
     question:'¿Deseas segmentar tus productos u órdenes por categorías o etiquetas?',
     questionDesc:'Permite filtrar y organizar operaciones en listados y reportes. Puedes configurarlas en cualquier momento.',
     desc:'Crear categorías, subcategorías y tags para clasificar productos y órdenes. Quedan disponibles como filtros en todos los listados.',
     actions:[
       {i:'ti-tag',t:'Crear categorías y subcategorías para clasificar productos'},
       {i:'ti-tags',t:'Crear tags para clasificar órdenes'},
       {i:'ti-filter',t:'Verificar que aparecen disponibles en los filtros de listados'}
     ],tip:'Los cambios en etiquetas se reflejan en toda la plataforma de inmediato.'},
    {id:'alertas',title:'Alertas',path:'\u2699\ufe0f > Alertas',block:'reglas',bl:'Reglas operativas',
     desc:'Configurar notificaciones por email para eventos clave. Se activan por tipo de operación (importación/exportación) y vía de transporte.',
     actions:[
       {i:'ti-toggle-right',t:'Activar alertas con el switch Off/On de cada acción'},
       {i:'ti-clock',t:'Ingresar días de anticipación en las alertas que lo requieran'},
       {i:'ti-bell-ringing',t:'Recomendada \u2736 Cambio ETD — notifica cuando la naviera modifica la fecha de salida. No requiere configurar días.'},
       {i:'ti-bell-ringing',t:'Recomendada \u2736 Cambio ETA — notifica cuando la naviera modifica la fecha de arribo. No requiere configurar días.'},
       {i:'ti-clock-alert',t:'Recomendada \u2736 Demurrage — alerta antes de incurrir en sobrestadía. Configurar días según el contrato.'}
     ]},
    {id:'orden',title:'Crear primera orden',path:'Módulo Importación o Exportación > Crear orden',block:'ops',bl:'Operaciones',
     desc:'Registrar la primera orden de compra o venta. Al seleccionar el proveedor o comprador, la forma de pago se importa automáticamente.',
     actions:[
       {i:'ti-building',t:'Seleccionar empresa y tag'},
       {i:'ti-truck',t:'Elegir proveedor o comprador — importa forma de pago automáticamente'},
       {i:'ti-package',t:'Cargar productos desde maestro, archivo Excel o manualmente'},
       {i:'ti-git-branch',t:'¿Más de un embarque en esta OC? Activar "Orden fraccionada" antes de guardar'}
     ],warn:'"Orden fraccionada" no puede activarse después de guardar. Si la orden necesita múltiples embarques, actívalo ahora.'},
    {id:'embarque',title:'Embarque',path:'Orden > Pestaña Embarques',block:'ops',bl:'Operaciones',
     desc:'Si la orden no es fraccionada, Selaski genera el embarque automáticamente al guardar. Si es fraccionada, se crean desde la pestaña Embarques dentro de la orden.',
     actions:[
       {i:'ti-radar',t:'Tracking: ingresar BL, booking o contenedor + carrier para importar ETD, ETA y puertos'},
       {i:'ti-timeline',t:'Lead Time: visualizar etapas proyectadas vs. tiempos reales'},
       {i:'ti-container',t:'Carga: gestionar contenedores y asignar productos con cantidades despachadas'},
       {i:'ti-file-check',t:'Documentos: cargar y gestionar los documentos requeridos'}
     ],tip:'El tracking se actualiza automáticamente cada día. Verifica ingresar el carrier correcto.'},
    {id:'listados',title:'Listados de la plataforma',path:'Módulo Embarques > Listado de Embarques',block:'ops',bl:'Operaciones',
     desc:'Vista centralizada de todos los embarques activos. Permite personalizar columnas, combinar filtros y descargar informes en Excel.',
     actions:[
       {i:'ti-layout-columns',t:'Personalizar: agregar, quitar y reordenar las columnas del listado'},
       {i:'ti-filter',t:'Filtros combinables: empresa, tag, vía, estado, fechas y más'},
       {i:'ti-download',t:'Descargar informe en Excel con columnas y filtros activos'},
       {i:'ti-package',t:'Listado de Productos: vista estándar o semanal de llegadas/salidas'}
     ],tip:'La configuración de columnas se aplica también al informe descargable.'},
    {id:'reportes',title:'Reportes y accesos compartidos',path:'Módulo Reportes II > Agregar responsable',block:'ops',bl:'Operaciones',
     desc:'Compartir información con equipos externos o internos mediante un link de acceso protegido con PIN.',
     actions:[
       {i:'ti-user-plus',t:'Crear un responsable ingresando nombre y email'},
       {i:'ti-file-text',t:'Asignar informes: embarques, productos, carga, órdenes, finanzas, documentos'},
       {i:'ti-adjustments',t:'Personalizar y filtrar la información visible antes de compartir'},
       {i:'ti-link',t:'Compartir el link — el responsable recibe el PIN por correo'}
     ],tip:'El responsable puede guardar el link en favoritos del navegador para acceder sin ingresar a Selaski.'}
  ];

  var SS = [
    {id:'credenciales',title:'Acceso y credenciales',path:'www.selaski.com/login',block:'access',bl:'Antes de entrar',
     desc:'Ingresar con las credenciales asignadas por el usuario master. El acceso está limitado por los filtros que el master configuró.',
     actions:[
       {i:'ti-login',t:'Ingresar con el email y contraseña asignados por el master'},
       {i:'ti-lock',t:'Cambiar contraseña si es el primer acceso'}
     ],warn:'Solo verás las empresas, tags y operaciones incluidas en los filtros que el master definió para tu usuario.'},
    {id:'acceso',title:'Entender tu nivel de acceso',path:'Consultar con usuario master',block:'access',bl:'Antes de entrar',
     desc:'Antes de operar, identificar qué información está disponible según los filtros configurados por el master.',
     actions:[
       {i:'ti-building',t:'Confirmar a qué empresas tengo acceso'},
       {i:'ti-tags',t:'Confirmar qué tags puedo visualizar'},
       {i:'ti-arrow-left-right',t:'Confirmar si mi acceso es importación, exportación o ambas'}
     ],tip:'Si no ves información esperada, consulta al usuario master para revisar los filtros asignados.'},
    {id:'dashboard',title:'Módulo de operaciones',path:'Pantalla principal > Dashboard / Calendario / Mapa',block:'ops',bl:'Operaciones',
     desc:'Vista principal con los embarques activos según tu acceso. Incluye dashboard, calendario de fechas clave y mapa en tiempo real.',
     actions:[
       {i:'ti-layout-dashboard',t:'Dashboard: revisar embarques activos y acceder al detalle'},
       {i:'ti-calendar',t:'Calendario: ver fechas clave — ETA, ETD, arribo bodega, término producción'},
       {i:'ti-map',t:'Mapa: rastrear la ubicación de buques en tiempo real'}
     ]},
    {id:'ordenes',title:'Órdenes de compra / venta',path:'Módulo Importación o Exportación > Listado de órdenes',block:'ops',bl:'Operaciones',
     desc:'Gestionar las órdenes accesibles según tu usuario. Puedes filtrar, personalizar columnas y descargar reportes.',
     actions:[
       {i:'ti-filter',t:'Usar filtros por número, SKU, proveedor o tag'},
       {i:'ti-layout-columns',t:'Personalizar columnas del listado'},
       {i:'ti-download',t:'Descargar informe en Excel'}
     ],warn:'Los usuarios secundarios no pueden crear ni eliminar órdenes salvo que el master lo habilite.'},
    {id:'embarques',title:'Embarques',path:'Módulo Embarques > Listado de embarques',block:'ops',bl:'Operaciones',
     desc:'Ver y gestionar los embarques activos: tracking, carga, costos, aduana y documentos, según el acceso asignado.',
     actions:[
       {i:'ti-radar',t:'Verificar estado y tracking de cada embarque'},
       {i:'ti-container',t:'Revisar carga contenerizada y gestión de productos'},
       {i:'ti-currency-dollar',t:'Consultar costos y flujo de caja si tienes acceso'}
     ]},
    {id:'documentos',title:'Documentos',path:'Módulo Documentos > Listado de documentos',block:'ops',bl:'Operaciones',
     desc:'Ver el estado de todos los documentos. Cargar, revisar o descargar según el permiso asignado en el flujo documental.',
     actions:[
       {i:'ti-file-check',t:'Revisar documentos pendientes y sus fechas de vencimiento'},
       {i:'ti-upload',t:'Cargar documentos asignados a tu responsabilidad'},
       {i:'ti-message-circle',t:'Usar la burbuja de chat para comentar o solicitar cambios'}
     ],tip:'Solo puedes gestionar los documentos en los que el master te definió como responsable.'},
    {id:'reportes',title:'Reportes compartidos',path:'Link de acceso enviado por el master',block:'ops',bl:'Operaciones',
     desc:'Acceder a los reportes que el usuario master compartió mediante link protegido con PIN.',
     actions:[
       {i:'ti-link',t:'Abrir el link de acceso y guardarlo en favoritos del navegador'},
       {i:'ti-key',t:'Ingresar el código PIN recibido por correo'},
       {i:'ti-chart-bar',t:'Consultar los reportes disponibles: embarques, productos, carga, órdenes, documentos'}
     ]}
  ];

  var BC = {config:'slk-bc',maestros:'slk-bm',reglas:'slk-br',ops:'slk-bo',access:'slk-ba'};

  // --- STATE ---
  var KEY = 'slk-guide-v1';
  var G = (function () {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && typeof s === 'object') return s;
    } catch (e) {}
    return {tab:'master', step:{master:0,secundario:0}, skipped:{master:[],secundario:[]}, decisions:{}, open:true};
  })();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(G)); } catch (e) {} }

  // --- CSS ---
  var style = document.createElement('style');
  style.id = 'slk-css';
  style.textContent = [
    '#slk-root{position:fixed;top:72px;right:0;z-index:2147483647;width:340px;font-family:"DM Sans",-apple-system,sans-serif}',
    '#slk-root *{box-sizing:border-box;margin:0;padding:0;font-family:"DM Sans",-apple-system,sans-serif}',
    '#slk-root .slk-panel{background:#fff;border:1px solid #dde2ee;border-right:none;border-radius:12px 0 0 12px;box-shadow:-4px 0 28px rgba(31,51,94,.14);display:flex;flex-direction:column;max-height:calc(100vh - 88px);overflow:hidden}',
    '#slk-root .slk-panel.slk-min{border-radius:12px 0 0 12px}',
    '#slk-root .slk-hd{background:#1F335E;padding:10px 14px;display:flex;align-items:center;gap:10px;flex-shrink:0;border-radius:11px 0 0 0}',
    '#slk-root .slk-panel.slk-min .slk-hd{border-radius:11px 0 0 11px}',
    '#slk-root .slk-logo{height:26px;mix-blend-mode:screen;flex:1;object-fit:contain;object-position:left}',
    '#slk-root .slk-hd-info{color:rgba(255,255,255,.65);font-size:12px;white-space:nowrap}',
    '#slk-root .slk-toggle{background:rgba(255,255,255,.1);border:none;color:#fff;width:28px;height:28px;border-radius:6px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0;transition:background .15s}',
    '#slk-root .slk-toggle:hover{background:rgba(255,255,255,.22)}',
    '#slk-root .slk-tabs{display:flex;padding:5px;gap:4px;background:#f4f6fa;border-bottom:1px solid #dde2ee;flex-shrink:0}',
    '#slk-root .slk-tab{flex:1;padding:7px 6px;border:none;background:transparent;border-radius:5px;font-size:12px;color:#5a6a8a;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:5px;transition:all .15s}',
    '#slk-root .slk-tab.slk-ta{background:#1F335E;color:#fff}',
    '#slk-root .slk-tab:hover:not(.slk-ta){background:#e8ecf3}',
    '#slk-root .slk-tab i{font-size:14px}',
    '#slk-root .slk-prog{display:flex;align-items:center;padding:9px 12px;gap:0;flex-shrink:0;overflow-x:auto;background:#f9fafc;border-bottom:1px solid #dde2ee}',
    '#slk-root .slk-prog::-webkit-scrollbar{height:3px}#slk-root .slk-prog::-webkit-scrollbar-thumb{background:#dde2ee}',
    '#slk-root .slk-dot{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;flex-shrink:0;border:1.5px solid #dde2ee;background:#fff;color:#8a9abb;cursor:pointer;transition:all .15s}',
    '#slk-root .slk-dot.slk-dd{background:#1D9E75;border-color:#1D9E75;color:#fff}',
    '#slk-root .slk-dot.slk-dc{background:#FF8D3D;border-color:#FF8D3D;color:#fff}',
    '#slk-root .slk-dot.slk-ds{background:#f4f6fa;border-color:#dde2ee;color:#dde2ee;cursor:default}',
    '#slk-root .slk-dot:hover:not(.slk-dc):not(.slk-ds){border-color:#1F335E;color:#1F335E}',
    '#slk-root .slk-ln{flex:1;height:2px;background:#dde2ee;min-width:3px}',
    '#slk-root .slk-ln.slk-ld{background:#1D9E75}',
    '#slk-root .slk-body{flex:1;overflow-y:auto;min-height:0}',
    '#slk-root .slk-body::-webkit-scrollbar{width:3px}#slk-root .slk-body::-webkit-scrollbar-thumb{background:#dde2ee;border-radius:2px}',
    '#slk-root .slk-vw{aspect-ratio:16/9;background:#1F335E;position:relative;flex-shrink:0}',
    '#slk-root .slk-vw iframe{width:100%;height:100%;border:none;display:block}',
    '#slk-root .slk-vp{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:#1F335E}',
    '#slk-root .slk-vpi{width:42px;height:42px;border-radius:50%;background:rgba(255,141,61,.15);border:1.5px solid rgba(255,141,61,.3);display:flex;align-items:center;justify-content:center;color:#FF8D3D;font-size:18px}',
    '#slk-root .slk-vpt{color:rgba(255,255,255,.45);font-size:11px}',
    '#slk-root .slk-card{padding:13px}',
    '#slk-root .slk-btag{display:inline-block;font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;margin-bottom:9px;letter-spacing:.04em;text-transform:uppercase}',
    '#slk-root .slk-bc{background:rgba(30,158,166,.12);color:#1E9EA6}',
    '#slk-root .slk-bm{background:rgba(255,141,61,.12);color:#FF8D3D}',
    '#slk-root .slk-br{background:rgba(30,113,188,.12);color:#1E71BC}',
    '#slk-root .slk-bo{background:rgba(29,158,117,.12);color:#1D9E75}',
    '#slk-root .slk-ba{background:rgba(31,51,94,.08);color:#1F335E}',
    '#slk-root .slk-sh{display:flex;align-items:flex-start;gap:10px;margin-bottom:10px}',
    '#slk-root .slk-sn{width:26px;height:26px;border-radius:50%;background:rgba(255,141,61,.12);color:#FF8D3D;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0}',
    '#slk-root .slk-st{font-size:13px;font-weight:700;color:#1F335E;margin-bottom:3px;line-height:1.3}',
    '#slk-root .slk-sp{font-size:10px;color:#8a9abb;font-family:"Courier New",monospace;background:#f4f6fa;padding:2px 5px;border-radius:3px;display:inline-block;line-height:1.4}',
    '#slk-root .slk-desc{font-size:12px;color:#5a6a8a;line-height:1.65;margin:8px 0 10px}',
    '#slk-root .slk-acts{list-style:none;border-top:1px solid #f4f6fa;padding-top:7px}',
    '#slk-root .slk-acts li{display:flex;align-items:flex-start;gap:7px;padding:5px 0;font-size:11.5px;color:#5a6a8a;border-bottom:1px solid #f9fafc;line-height:1.5}',
    '#slk-root .slk-acts li:last-child{border-bottom:none}',
    '#slk-root .slk-acts li i{color:#1E9EA6;font-size:13px;flex-shrink:0;margin-top:1px}',
    '#slk-root .slk-tip{background:rgba(29,158,117,.08);border-left:2px solid #1D9E75;border-radius:0 5px 5px 0;padding:7px 10px;font-size:11.5px;color:#0F6E56;margin-top:9px;line-height:1.55;display:flex;gap:6px}',
    '#slk-root .slk-warn{background:rgba(255,141,61,.08);border-left:2px solid #FF8D3D;border-radius:0 5px 5px 0;padding:7px 10px;font-size:11.5px;color:#9B4F00;margin-top:9px;line-height:1.55;display:flex;gap:6px}',
    '#slk-root .slk-tip i,#slk-root .slk-warn i{font-size:13px;flex-shrink:0;margin-top:1px}',
    '#slk-root .slk-cond{text-align:center;padding:18px 12px}',
    '#slk-root .slk-cq{font-size:13px;font-weight:600;color:#1F335E;margin-bottom:7px;line-height:1.5}',
    '#slk-root .slk-cd{font-size:11.5px;color:#5a6a8a;margin-bottom:16px;line-height:1.6}',
    '#slk-root .slk-cbtns{display:flex;gap:7px;justify-content:center;flex-wrap:wrap}',
    '#slk-root .slk-cy{padding:8px 14px;border:none;background:#FF8D3D;color:#fff;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:5px;transition:opacity .15s}',
    '#slk-root .slk-cn{padding:8px 14px;border:1px solid #dde2ee;background:#fff;color:#5a6a8a;border-radius:6px;font-size:12px;cursor:pointer;transition:background .15s}',
    '#slk-root .slk-cy:hover{opacity:.88}#slk-root .slk-cn:hover{background:#f4f6fa}',
    '#slk-root .slk-ft{display:flex;justify-content:space-between;align-items:center;padding:9px 13px;border-top:1px solid #dde2ee;background:#fff;flex-shrink:0;border-radius:0 0 0 11px}',
    '#slk-root .slk-prev,#slk-root .slk-next{padding:6px 12px;border-radius:6px;border:1px solid #dde2ee;background:#fff;color:#1F335E;font-size:11.5px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:5px;transition:all .15s}',
    '#slk-root .slk-prev:hover,#slk-root .slk-next:hover{background:#f4f6fa}',
    '#slk-root .slk-next.slk-np{background:#1F335E;border-color:#1F335E;color:#fff}',
    '#slk-root .slk-next.slk-np:hover{background:#162647}',
    '#slk-root .slk-prev:disabled,#slk-root .slk-next:disabled{opacity:.3;cursor:default;pointer-events:none}',
    '#slk-root .slk-ctr{font-size:11px;color:#8a9abb}'
  ].join('');
  document.head.appendChild(style);

  // --- DOM ---
  var root = document.createElement('div');
  root.id = 'slk-root';
  document.body.appendChild(root);

  function ss() { return G.tab === 'master' ? MS : SS; }
  function cs() { return ss()[G.step[G.tab]]; }

  function render() {
    var steps = ss();
    var idx = G.step[G.tab];
    var s = steps[idx];
    var skSet = new Set(G.skipped[G.tab]);
    var dk = G.tab + '_' + s.id;
    var videoUrl = VID[G.tab][s.id];
    var skipCount = G.skipped[G.tab].filter(function (x) { return x <= idx; }).length;
    var total = steps.length - G.skipped[G.tab].length;
    var vIdx = idx - skipCount;
    var isPending = s.conditional && G.decisions[dk] === undefined;
    var h = '';

    h += '<div class="slk-panel' + (G.open ? '' : ' slk-min') + '">';
    h += '<div class="slk-hd">';
    h += '<img class="slk-logo" src="' + LOGO + '" alt="Selaski">';
    if (!G.open) h += '<span class="slk-hd-info">Paso ' + (vIdx + 1) + ' / ' + total + '</span>';
    h += '<button class="slk-toggle" title="' + (G.open ? 'Minimizar' : 'Expandir') + '">';
    h += '<i class="ti ' + (G.open ? 'ti-minus' : 'ti-layout-sidebar-right') + '"></i></button>';
    h += '</div>';

    if (G.open) {
      h += '<div class="slk-tabs">';
      h += '<button class="slk-tab' + (G.tab === 'master' ? ' slk-ta' : '') + '" data-tab="master"><i class="ti ti-settings"></i>Master</button>';
      h += '<button class="slk-tab' + (G.tab === 'secundario' ? ' slk-ta' : '') + '" data-tab="secundario"><i class="ti ti-user"></i>Secundario</button>';
      h += '</div>';

      h += '<div class="slk-prog">';
      steps.forEach(function (ps, i) {
        var isSk = skSet.has(i), isDone = i < idx && !isSk, isCur = i === idx;
        var cls = isDone ? ' slk-dd' : isCur ? ' slk-dc' : isSk ? ' slk-ds' : '';
        var inn = isDone ? '<i class="ti ti-check"></i>' : isSk ? '&minus;' : (i + 1);
        h += '<div class="slk-dot' + cls + '" data-step="' + i + '" title="' + ps.title + '">' + inn + '</div>';
        if (i < steps.length - 1) h += '<div class="slk-ln' + ((isDone || isSk) ? ' slk-ld' : '') + '"></div>';
      });
      h += '</div>';

      h += '<div class="slk-body">';
      h += '<div class="slk-vw">';
      if (videoUrl) {
        h += '<iframe src="' + videoUrl + '" allow="autoplay;fullscreen" allowfullscreen></iframe>';
      } else {
        h += '<div class="slk-vp"><div class="slk-vpi"><i class="ti ti-video"></i></div><div class="slk-vpt">Video próximamente</div></div>';
      }
      h += '</div>';

      h += '<div class="slk-card">';
      if (isPending) {
        h += '<div class="slk-cond"><div class="slk-cq">' + s.question + '</div>';
        h += '<div class="slk-cd">' + s.questionDesc + '</div>';
        h += '<div class="slk-cbtns"><button class="slk-cy" data-dec="yes"><i class="ti ti-check"></i>Sí, configurar</button>';
        h += '<button class="slk-cn" data-dec="no">Omitir</button></div></div>';
      } else {
        h += '<span class="slk-btag ' + (BC[s.block] || 'slk-bc') + '">' + s.bl + '</span>';
        h += '<div class="slk-sh"><div class="slk-sn">' + (vIdx + 1) + '</div><div>';
        h += '<div class="slk-st">' + s.title + '</div><div class="slk-sp">' + s.path + '</div></div></div>';
        h += '<p class="slk-desc">' + s.desc + '</p>';
        h += '<ul class="slk-acts">';
        s.actions.forEach(function (a) {
          h += '<li><i class="ti ' + a.i + '"></i><span>' + a.t + '</span></li>';
        });
        h += '</ul>';
        if (s.tip) h += '<div class="slk-tip"><i class="ti ti-bulb"></i><span>' + s.tip + '</span></div>';
        if (s.warn) h += '<div class="slk-warn"><i class="ti ti-alert-triangle"></i><span>' + s.warn + '</span></div>';
      }
      h += '</div></div>';

      h += '<div class="slk-ft">';
      h += '<button class="slk-prev"' + (idx === 0 ? ' disabled' : '') + '><i class="ti ti-arrow-left"></i>Anterior</button>';
      h += '<span class="slk-ctr">' + (isPending ? '' : (vIdx + 1) + '&nbsp;/&nbsp;' + total) + '</span>';
      if (idx < steps.length - 1) {
        h += '<button class="slk-next slk-np">Siguiente<i class="ti ti-arrow-right"></i></button>';
      } else {
        h += '<button class="slk-next" disabled><i class="ti ti-circle-check"></i>Listo</button>';
      }
      h += '</div>';
    }
    h += '</div>';
    root.innerHTML = h;
  }

  root.addEventListener('click', function (e) {
    var steps = ss(), s = cs(), dk = G.tab + '_' + s.id;
    var toggle = e.target.closest('.slk-toggle');
    var tab    = e.target.closest('[data-tab]');
    var dot    = e.target.closest('.slk-dot');
    var prev   = e.target.closest('.slk-prev');
    var next   = e.target.closest('.slk-next');
    var dec    = e.target.closest('[data-dec]');

    if (toggle) {
      G.open = !G.open; save(); render();
    } else if (tab && !tab.classList.contains('slk-ta')) {
      G.tab = tab.dataset.tab; save(); render();
    } else if (dot && !dot.classList.contains('slk-ds')) {
      G.step[G.tab] = parseInt(dot.dataset.step, 10); save(); render();
    } else if (prev && !prev.disabled) {
      var pi = G.step[G.tab] - 1;
      if (new Set(G.skipped[G.tab]).has(pi)) {
        G.skipped[G.tab] = G.skipped[G.tab].filter(function (x) { return x !== pi; });
        var ps = steps[pi];
        if (ps.conditional) delete G.decisions[G.tab + '_' + ps.id];
      }
      G.step[G.tab] = pi; save(); render();
    } else if (next && !next.disabled) {
      G.step[G.tab]++; save(); render();
    } else if (dec) {
      var choice = dec.dataset.dec;
      G.decisions[dk] = choice;
      if (choice === 'no') {
        G.skipped[G.tab].push(G.step[G.tab]);
        G.step[G.tab]++;
      }
      save(); render();
    }
  });

  render();
})();
