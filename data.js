const DB = {
  config: {
    baseRateEuro: 13, // Tarifa base en USD por hora
    defaultTC: 17.89, // Tipo de cambio default
    logoName: "Creative Studio",
    clientNote: "Todos los precios incluyen investigación y estrategia, conceptualización, diseño y 2 revisiones. Precios expresados en USD / MXN. Esta es una tarifa de transición — cotizaciones personalizadas disponibles para proyectos fuera de catálogo."
  },
  categories: {
    branding: 'Branding',
    ilustracion_proyecto: 'Ilustración por proyecto',
    ilustracion_acabado: 'Ilustración por acabado',
    social: 'Redes sociales',
    editorial: 'Editorial',
    motion: 'Motion / Video',
    streamer: 'Streamers',
    filmmaking: 'Filmmaking',
    fotografia: 'Fotografía',
    merch: 'Merch y productos',
    identidad: 'Identidad impresa',
    digital: 'Presencia digital',
    contenido: 'Infografías y contenido',
    consultoria: 'Consultoría de marca'
  },
  services: [
    // Branding
    { cat: 'branding', name: 'Identidad de marca básica', desc: 'Logotipo + paleta de color + tipografía + manual básico de uso.', hrs: 20, includes: ['Investigación y brief', 'Conceptualización (2 propuestas)', 'Diseño final', '2 revisiones incluidas', 'Archivos listos para uso'] },
    { cat: 'branding', name: 'Branding completo', desc: 'Sistema de identidad integral: logo, brand guidelines, papelería y aplicaciones.', hrs: 40, featured: true, includes: ['Todo lo de Identidad básica', 'Aplicaciones (tarjeta, hoja membretada, firma)', 'Brand guidelines detallado', 'Manual de uso digital e impreso'] },
    { cat: 'branding', name: 'Campaña publicitaria', desc: 'Concepto creativo + materiales adaptados a distintos formatos y medios.', hrs: 35, includes: ['Investigación y estrategia creativa', 'Concepto y copywriting base', 'Adaptaciones para medios clave', '2 revisiones por pieza'] },
    
    // Ilustración
    { cat: 'ilustracion_acabado', name: 'Boceto / sketch', desc: 'Dibujo a lápiz digital sin color. Perfecto para aprobar poses, composición o concepto.', hrs: 2, includes: ['1 personaje o escena sencilla', 'Fondo neutro o sin fondo', '1 revisión incluida'] },
    { cat: 'ilustracion_acabado', name: 'Flats (color plano)', desc: 'Línea limpia con colores base, sin sombreado. Ideal para stickers o referencia.', hrs: 4, includes: ['Línea limpia + colores base', '1 personaje o escena sencilla', '2 revisiones incluidas'] },
    { cat: 'ilustracion_acabado', name: 'Cell shading', desc: 'Ilustración con sombreado de estilo anime/cartoon: plano y de alto contraste.', hrs: 6, includes: ['Línea limpia + flats + sombras duras', '1 personaje busto o cuerpo completo', '2 revisiones incluidas'] },
    { cat: 'ilustracion_acabado', name: 'Full render', desc: 'Ilustración con sombreado detallado y acabado profesional.', hrs: 12, featured: true, includes: ['Sombreado detallado + luces + texturas', '1 personaje cuerpo completo', '2 revisiones incluidas'] },
    { cat: 'ilustracion_acabado', name: 'Fondo / background', desc: 'Escena o ambiente sin personajes: interior, exterior, fantástico o realista.', hrs: 8, includes: ['Composición + color + iluminación base', 'Alta resolución', '2 revisiones incluidas'] },
    { cat: 'ilustracion_acabado', name: 'Ilustración completa (p+f)', desc: 'Personaje a full render sobre fondo detallado integrado.', hrs: 18, includes: ['1 personaje cuerpo completo (full render)', 'Fondo elaborado', 'Composición e iluminación integradas', '2 revisiones incluidas'] },
    { cat: 'ilustracion_proyecto', name: 'Ilustración editorial', desc: 'Para artículos, libros o medios digitales con enfoque narrativo.', hrs: 10, includes: ['Brief y referencias', 'Arte final en alta resolución', '2 revisiones'] },
    { cat: 'ilustracion_proyecto', name: 'Fanart', desc: 'Personajes existentes de cultura popular. Solo uso personal / no comercial.', hrs: 6, includes: ['Cell shading o flats', '1 personaje con referencia', '2 revisiones incluidas'] },
    { cat: 'ilustracion_proyecto', name: 'Stickers digitales (x5)', desc: 'Set de 5 stickers originales con fondo transparente (PNG).', hrs: 8, includes: ['5 diseños originales', 'Fondo transparente', '2 revisiones al set completa'] },
    { cat: 'ilustracion_proyecto', name: 'Diseño de personaje', desc: 'Hoja de modelo con vista frontal, lateral, paleta y expresiones.', hrs: 14, includes: ['Bocetos de exploración', 'Hoja de referencia digital', '2 revisiones'] },
    { cat: 'ilustracion_proyecto', name: 'Concept art', desc: 'Conceptualización de mundos, entornos o personajes para proyectos.', hrs: 18, includes: ['Exploración visual', 'Arte final pulido', '2 revisiones'] },
    { cat: 'ilustracion_proyecto', name: 'Merch (diseño para producto)', desc: 'Diseño adaptado para impresión física (playeras, posters, etc).', hrs: 8, includes: ['Diseño adaptado a producto', 'Archivo listo para imprenta', '2 revisiones'] },
    { cat: 'ilustracion_proyecto', name: 'Expresiones adicionales (x3)', desc: '3 expresiones extra sobre un personaje ya diseñado.', hrs: 4, includes: ['3 variantes de rostro', 'Mismo estilo que el diseño base'] },
    { cat: 'ilustracion_proyecto', name: 'Versión chibi de personaje', desc: 'Reinterpretación en estilo kawaii/chibi pequeño.', hrs: 5, includes: ['Estilo chibi simplificado', '1 personaje', '2 revisiones'] },
    
    // Motion / Video (Social)
    { cat: 'social', name: 'Pack de publicaciones (x10)', desc: '10 posts con diseño consistente para redes sociales.', hrs: 12, includes: ['Diseño de plantilla base', '10 adaptaciones', '2 revisiones'] },
    { cat: 'social', name: 'Kit de plantillas redes (x20)', desc: 'Set de 20 plantillas editables (Canva o Figma).', hrs: 18, includes: ['Sistema visual coherente', 'Archivos editables', '2 revisiones'] },
    { cat: 'social', name: 'Carrusel informativo (x8)', desc: '8 slides para Instagram o LinkedIn con enfoque en contenido.', hrs: 5, includes: ['Diseño de 8 páginas', 'Infográfico / Editorial', '2 revisiones'] },
    
    // Editorial
    { cat: 'editorial', name: 'Revista (por edición, hasta 20 pp)', desc: 'Maquetación completa con sistema editorial profesional.', hrs: 30, includes: ['Grid y sistema editorial', 'Maquetación de contenido', '2 revisiones'] },
    { cat: 'editorial', name: 'Libro / ebook (hasta 80 pp)', desc: 'Maquetación interior profesional con portada incluida.', hrs: 38, includes: ['Diseño de portada', 'Maquetación interior', '2 revisiones'] },
    
    // Motion / Video / Filmmaking
    { cat: 'motion', name: 'Motion graphics (30s)', desc: 'Animación 2D para intro, outro o anuncio corto.', hrs: 16, includes: ['Storyboard básico', 'Animación 2D', '2 revisiones'] },
    { cat: 'motion', name: 'Edición de video (hasta 5 min)', desc: 'Edición profesional con color, sonido y gráficos básicos.', hrs: 12, includes: ['Corte y montaje', 'Corrección de color', '2 revisiones'] },
    { cat: 'motion', name: 'Edición de video (hasta 15 min)', desc: 'Entrevistas, tutoriales o vlogs con mayor carga de montaje.', hrs: 20, includes: ['Corte avanzado', 'Gráficos informativos', '2 revisiones'] },
    { cat: 'motion', name: 'Fotografía (sesión + edición)', desc: 'Sesión presencial hasta 2 hrs con 30 fotos editadas.', hrs: 8, includes: ['Sesión presencial', '30 fotos editadas', 'Galería digital'] },

    // Filmmaking
    { cat: 'filmmaking', name: 'Reel para redes (hasta 60s)', desc: 'Filmado y editado en formato vertical para TikTok/IG.', hrs: 10, includes: ['Guión breve', 'Filmación 2h', 'Edición + subtítulos', '2 revisiones'] },
    { cat: 'filmmaking', name: 'Pack de reels (x3)', desc: '3 reels filmados en una sola sesión de 4 hrs.', hrs: 22, featured: true, includes: ['Filmación 4h', '3 ediciones individuales', '2 revisiones por pieza'] },
    { cat: 'filmmaking', name: 'Video de producto / servicio', desc: 'Video (90s) para presentar marca o producto.', hrs: 14, includes: ['Filmación 3h', 'Edición con gráficos de marca', '2 revisiones'] },
    { cat: 'filmmaking', name: 'Contenido mensual (8 videos)', desc: '8 videos grabados en 2 sesiones al mes.', hrs: 40, includes: ['Estrategia mensual', '2 sesiones filmación', '8 ediciones', 'Entrega escalonada'] },
    { cat: 'motion', name: 'Corrección de color (por minuto)', desc: 'Solo grading, sin edición.', hrs: 1.15, includes: ['Color grading profesional', 'Ajuste de niveles y contraste'] },
    { cat: 'motion', name: 'Subtítulos / captions (hasta 10 min)', desc: 'Sincronizados y exportados.', hrs: 2.7, includes: ['Sincronización de audio/texto', 'Estilo de fuente a elegir'] },

    // Fotografía
    { cat: 'fotografia', name: 'Sesión fotográfica (hasta 2 hrs)', desc: '30 fotos editadas entregadas.', hrs: 10, includes: ['Sesión presencial 2h', '30 fotos editadas', 'Galería digital'] },
    { cat: 'fotografia', name: 'Sesión extendida (hasta 4 hrs)', desc: '60 fotos editadas entregadas.', hrs: 17, includes: ['Sesión presencial 4h', '60 fotos editadas', 'Galería digital'] },
    { cat: 'fotografia', name: 'Sesión de producto (hasta 2 hrs)', desc: 'Flat lay o lifestyle.', hrs: 10.75, includes: ['Iluminación de estudio', '30 fotos de producto', '2 revisiones'] },
    { cat: 'fotografia', name: 'Retoque individual (por foto)', desc: 'Ajustes, piel, fondo. Precio por imagen.', hrs: 0.77 },
    { cat: 'fotografia', name: 'Retoque express (x10 fotos)', desc: 'Correcciones básicas de exposición y color.', hrs: 4.6 },
    { cat: 'fotografia', name: 'Cambio / eliminación de fondo (por foto)', desc: 'Recorte limpio y fondo nuevo o transparente.', hrs: 0.62 },
    { cat: 'fotografia', name: 'Galería digital organizada', desc: 'Álbum compartido, nombrado y ordenado.', hrs: 1.15 },

    // Streamer
    { cat: 'streamer', name: 'Emotes personalizados (set x5)', desc: 'Set de 5 emotes listos para Twitch o Discord.', hrs: 10, includes: ['5 diseños originales', 'Todos los tamaños requeridos', '2 revisiones'] },
    { cat: 'streamer', name: 'PNGtuber personalizado', desc: 'Avatar animable con 3 estados (idle, hablar, sorpresa).', hrs: 14, includes: ['Diseño de personaje', '3 estados', 'Listo para OBS', '2 revisiones'] },
  ],
  extras: [
    { name: 'Revisión adicional', price_range: '$20–40 USD', desc: 'Por ronda extra de cambios fuera del paquete.' },
    { name: 'Urgencia (entrega express)', multiplier: 0.5, desc: 'Prioridad de agenda para entrega inmediata.' },
    { name: 'Alta complejidad / personalización', multiplier: 0.3, desc: 'Proyectos con investigación extensa o alta dificultad técnica.' },
    { name: 'Archivos fuente editables', flat_fee: 30, desc: 'Entrega de archivos originales (.ai, .psd, .fig, etc.).' },
    { name: 'Licencia comercial extendida', multiplier: 0.3, desc: 'Para publicidad masiva o reventa de producto.' },
    { name: 'Licencia exclusiva (transferencia de derechos)', multiplier: 1.0, desc: 'Transferencia total de derechos patrimoniales.' },
  ],
  internal: {
    overlays: [
      { id: 'ov1', name: 'Intro / pantalla de inicio', desc: 'Animación de entrada al stream.', spec: 'WebM 1920×1080', hrs: 5, multiplier_anim: 1.25 },
      { id: 'ov2', name: 'Outro / End screen', desc: 'Cierre del stream o video.', spec: 'WebM 1920×1080', hrs: 5, multiplier_anim: 1.25 },
      { id: 'ov3', name: 'Just Chatting', desc: 'Escena para secciones de solo chat.', spec: 'PNG/WebM 1920×1080', hrs: 4, multiplier_anim: 1.25 },
      { id: 'ov4', name: 'Gameplay', desc: 'Overlay principal durante partidas.', spec: 'PNG/WebM 1920×1080', hrs: 6, multiplier_anim: 1.25 },
      { id: 'ov5', name: 'Be Right Back (BRB)', desc: 'Pantalla de pausa / regreso.', spec: 'WebM 1920×1080', hrs: 4, multiplier_anim: 1.25 },
      { id: 'ov6', name: 'Reacción / escena personalizada', desc: 'Reacts, podcast, karaoke, etc.', spec: 'WebM/PNG 1920×1080', hrs: 5, multiplier_anim: 1.25 },
      { id: 'ov7', name: 'Marco de webcam (facecam frame)', desc: 'Marco decorativo para la cámara.', spec: 'PNG transparente', hrs: 3, multiplier_anim: 1.33 },
      { id: 'ov8', name: 'Overlay a pedido (otro tipo)', desc: 'Cualquier escena fuera de los tipos anteriores.', spec: 'Según especificación', hrs: 6, multiplier_anim: 1.25 },
    ],
    alertas: [
      { id: 'al1', name: 'Pack alertas completo (x4)', desc: 'Follow, Sub, Bits y Donation animados.', spec: 'WebM ~600×200px', hrs: 10, plat: ['twitch', 'kick'], type: 'anim' },
      { id: 'al2', name: 'Alerta individual (animada)', desc: 'Una alerta con entrada y salida.', spec: 'WebM, tamaño variable', hrs: 3, plat: ['twitch', 'kick'], type: 'anim' },
      { id: 'al3', name: 'Alerta individual (estática)', desc: 'Solo imagen, sin movimiento.', spec: 'PNG, tamaño variable', hrs: 1, plat: ['all'], type: 'stat' },
      { id: 'al4', name: 'Stinger / transición escenas', desc: 'Transición animada con canal alfa.', spec: 'WebM 1920×1080', hrs: 5, plat: ['all'], type: 'anim' },
      { id: 'al5', name: 'Sound alert (gráfico aviso)', desc: 'Diseño visual para alertas de sonido.', spec: 'PNG', hrs: 1, plat: ['twitch'], type: 'stat' },
    ],
    canal: [
      { id: 'ca1', name: 'Logo / marca personal', desc: 'Logotipo simple para canal y redes.', spec: 'SVG + PNG', hrs: 8 },
      { id: 'ca2', name: 'Avatar / foto de perfil', desc: 'Imagen cuadrada de perfil.', spec: '800x800px PNG', hrs: 3 },
      { id: 'ca3', name: 'Banner de canal', desc: 'Portada principal del canal.', spec: '2560x1440px', hrs: 4 },
      { id: 'ca4', name: 'Offline screen', desc: 'Imagen fuera de aire.', spec: '1920x1080px', hrs: 3 },
      { id: 'ca5', name: 'Pack de paneles (x6)', desc: 'About, Rules, Social, Schedule, etc.', spec: '320x160px', hrs: 5 },
      { id: 'ca6', name: 'Panel individual', desc: 'Adicional con estilo existente.', spec: '320x160px', hrs: 1 },
      { id: 'ca7', name: 'Header / sección About', desc: 'Banner informativo superior.', spec: '1280x200px', hrs: 3 },
      { id: 'ca8', name: 'Emote individual', desc: 'Un emote listo para subir.', spec: '112px PNG', hrs: 2 },
      { id: 'ca9', name: 'Sub badges (3 niveles)', desc: 'Insignias por nivel de suscripción.', spec: '72px PNG', hrs: 3 },
      { id: 'ca10', name: 'Bits badges (por nivel)', desc: 'Insignia por nivel de donación.', spec: '72px PNG', hrs: 2 },
      { id: 'ca11', name: 'Thumbnail / miniatura', desc: 'Miniatura para VOD o video.', spec: '1280x720px', hrs: 1 },
      { id: 'ca12', name: 'Pack thumbnails (x5)', desc: '5 miniaturas con plantilla consistente.', spec: '1280x720px', hrs: 5 },
    ],
    packs: [
      { name: 'Pack starter', items: ['Logo', 'Avatar', 'Banner', 'Paneles x6', 'Offline screen'], hrs_total: 18, discount_perc: 15 },
      { name: 'Pack stream completo', items: ['Pack starter', 'Gameplay anim.', 'Alertas x4', 'Intro+BRB+Outro', 'Stinger'], hrs_total: 45, discount_perc: 20 },
      { name: 'Pack rebranding total', items: ['Logo', 'Avatar', 'Banner', 'Overlay+alertas', 'Paneles x6', 'Emotes x3', 'Stinger'], hrs_total: 55, discount_perc: 25 },
      { name: 'Pack alertas + overlay', items: ['Gameplay overlay anim.', 'Alertas x4', 'Intro + BRB'], hrs_total: 28, discount_perc: 15 },
      { name: 'Pack Just Chatting', items: ['Just Chatting anim.', 'BRB anim.', 'Alertas x4', 'Marco webcam'], hrs_total: 24, discount_perc: 15 }, 
      { name: 'Pack emotes + badges', items: ['5 emotes', 'Sub badges 3 niveles', 'Bits badges básico'], hrs_total: 15, discount_perc: 15 },
      { name: 'Pack YouTube', items: ['Banner de canal', 'Avatar', 'Offline screen', 'Thumbnails x5', 'Outro anim.'], hrs_total: 18, discount_perc: 15 },
    ],
    minor: {
      merch: [
        { cat: 'Ropa', name: 'Playera (frente solo)', desc: 'DTG, serigrafía o sublimación.', hrs: 3 },
        { cat: 'Ropa', name: 'Playera (frente + espalda)', desc: 'Dos caras, archivos separados.', hrs: 5 },
        { cat: 'Ropa', name: 'Sudadera / hoodie', desc: 'Guías para manga, bolsillo o capucha.', hrs: 5 },
        { cat: 'Accesorio', name: 'Tote bag', desc: 'Sublimación o impresión.', hrs: 2.5 },
        { cat: 'Impresión', name: 'Print / poster (hasta A3)', desc: 'Alta resolución.', hrs: 3 },
        { cat: 'Impresión', name: 'Díptico impreso (doble carta)', desc: 'Diseñado para doblar.', hrs: 4 },
        { cat: 'Sticker', name: 'Sticker individual', desc: 'Contorno de corte incluido.', hrs: 1 },
        { cat: 'Sticker', name: 'Sheet de stickers (x8)', desc: '8 diseños en una hoja.', hrs: 7 },
        { cat: 'Accesorio', name: 'Parche / patch', desc: 'Contorno bordable.', hrs: 2 },
        { cat: 'Taza', name: 'Wrap para taza (11oz)', desc: 'Diseño envolvente.', hrs: 1.5 },
        { cat: 'Coord.', name: 'Gestión con proveedor', desc: 'Coordinación de producción.', hrs: 3 },
      ],
      identidad: [
        { cat: 'Tarjeta', name: 'Tarjeta presentación (1 cara)', desc: 'Sangrado listo imprenta.', hrs: 2 },
        { cat: 'Tarjeta', name: 'Tarjeta presentación (2 caras)', desc: 'Frente y reverso.', hrs: 3 },
        { cat: 'Papelería', name: 'Hoja membretada', desc: 'Plantilla Word + PDF.', hrs: 2 },
        { cat: 'Papelería', name: 'Sobre membretado (C6 o DL)', desc: 'Logo + datos contacto.', hrs: 1.5 },
        { cat: 'Papelería', name: 'Kit papelería básica', desc: 'Tarjeta + hoja + sobre.', hrs: 6 },
        { cat: 'Papelería', name: 'Carpeta / folder corporativo', desc: 'Portada y solapa interior.', hrs: 3.5 },
      ],
      digital: [
        { cat: 'Icono', name: 'Favicon + icono app', desc: 'Multi-formato para web.', hrs: 1.5 },
        { cat: 'Firma', name: 'Firma de correo HTML', desc: 'Responsive multi-gestor.', hrs: 2 },
        { cat: 'Banner', name: 'Banner LinkedIn', desc: 'Perfil profesional.', hrs: 1.5 },
        { cat: 'Banner', name: 'Banner por red social', desc: 'X, FB, etc.', hrs: 1 },
        { cat: 'Banner', name: 'Kit banners x plataformas', desc: 'LinkedIn, X, FB, YouTube.', hrs: 4 },
        { cat: 'Redes', name: 'Kit de redes desde cero', desc: 'Avatar + banners + plantilla.', hrs: 7 },
      ],
      editorial: [
        { cat: 'Portada', name: 'Portada de libro / ebook', desc: 'Front cover profesional.', hrs: 5 },
        { cat: 'Portada', name: 'Portada de revista', desc: 'Diseño editorial alto impacto.', hrs: 4 },
        { cat: 'Portada', name: 'Portada de podcast', desc: 'Arte cuadrado optimizado.', hrs: 2.5 },
        { cat: 'Plantilla', name: 'Plantilla editorial (x2)', desc: 'Sistema páginas interiores.', hrs: 7 },
        { cat: 'Página', name: 'Página interior individual', desc: 'Diseño de una página suelta.', hrs: 1 },
        { cat: 'Folleto', name: 'Díptico (2 caras)', desc: 'A4 o carta listo imprenta.', hrs: 3 },
        { cat: 'Folleto', name: 'Tríptico (6 caras)', desc: '3 cuerpos con sangrado.', hrs: 5 },
      ],
      contenido: [
        { cat: 'Infografía', name: 'Infografía sencilla', desc: 'Datos o proceso visual.', hrs: 4 },
        { cat: 'Infografía', name: 'Infografía compleja', desc: 'Ilustraciones + editorial.', hrs: 7 },
        { cat: 'Infografía', name: 'Serie infografías (x3)', desc: 'Mismo sistema visual.', hrs: 15 },
        { cat: 'Presentación', name: 'Plantilla de slides (x10)', desc: 'PPT o Google Slides editable.', hrs: 5 },
        { cat: 'Presentación', name: 'Slide individual extra', desc: 'Diseño fuera de plantilla.', hrs: 0.5 },
        { cat: 'Social', name: 'Carrusel informativo (x8)', desc: 'IG, LinkedIn, TikTok.', hrs: 5 },
      ]
    },
    consultoria: [
      { name: 'Revisión de marca (1 hr)', desc: 'Diagnóstico rápido de identidad.', hrs: 1, highlight: false },
      { name: 'Sesión consultoría (2 hrs)', desc: 'Estrategia y feedback profundo.', hrs: 2, highlight: true },
      { name: 'Pack consultoría (4 hrs)', desc: 'Horas flexibles (vence 60 días).', hrs: 4, highlight: false },
      { name: 'Auditoría visual rápida', desc: 'Reporte escrito PDF sin sesión.', hrs: 4, highlight: false },
      { name: 'Retainer mensual (8 hrs)', desc: 'Prioridad de agenda + descuento.', hrs: 8, highlight: false },
    ]
  }
};
