export const SITE_CONFIG = {
  name: "Grupo Minero GAPC",
  shortName: "GAPC",
  description:
    "Empresa dedicada a la refinación y gestión de metales preciosos para clientes industriales y comerciales.",
  url: "https://grupominerogapc.com",
  email: "contacto@grupominerogapc.com",
  phone: "+52 614 433-1123",
  address: "Privada de San Ventura, carr. Aldama S/N, colonia Valles de Chihuahua, c.p 31376, 31376 Chih.",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/about" },
  { label: "Servicios", href: "/services" },
  { label: "Galería", href: "/gallery" },
  { label: "Contacto", href: "/contact" },
] as const;

export const GALLERY_ITEMS = [
  {
    id: "planta-refinacion",
    title: "Planta de Refinación",
    description: "Instalaciones de última generación para el procesamiento de metales preciosos.",
    category: "Instalaciones",
    gradient: "from-navy-800 to-navy-900",
    icon: "Factory",
  },
  {
    id: "proceso-fundicion",
    title: "Proceso de Fundición",
    description: "Hornos industriales de alta capacidad para la fundición y aleación de metales.",
    category: "Procesos",
    gradient: "from-steel-700 to-steel-900",
    icon: "Flame",
  },
  {
    id: "laboratorio-analisis",
    title: "Laboratorio de Análisis",
    description: "Laboratorio certificado con equipos de espectrometría y ensayo de precisión.",
    category: "Laboratorio",
    gradient: "from-navy-700 to-navy-900",
    icon: "FlaskConical",
  },
  {
    id: "lingotes-oro",
    title: "Lingotes de Oro",
    description: "Producción de lingotes de alta pureza bajo estándares internacionales.",
    category: "Productos",
    gradient: "from-steel-800 to-navy-900",
    icon: "Gem",
  },
  {
    id: "equipo-trabajo",
    title: "Equipo de Trabajo",
    description: "Profesionales altamente capacitados en metalurgia y procesos industriales.",
    category: "Equipo",
    gradient: "from-navy-900 to-steel-800",
    icon: "Users",
  },
  {
    id: "control-calidad",
    title: "Control de Calidad",
    description: "Rigurosos procesos de control en cada etapa de la cadena productiva.",
    category: "Calidad",
    gradient: "from-steel-700 to-navy-800",
    icon: "ShieldCheck",
  },
  {
    id: "almacen-seguro",
    title: "Almacén de Alta Seguridad",
    description: "Bóvedas y almacenes con protocolos de seguridad de nivel bancario.",
    category: "Seguridad",
    gradient: "from-navy-800 to-steel-900",
    icon: "Lock",
  },
  {
    id: "transporte-blindado",
    title: "Transporte Especializado",
    description: "Logística segura y rastreable para el traslado de metales preciosos.",
    category: "Logística",
    gradient: "from-steel-800 to-steel-900",
    icon: "Truck",
  },
] as const;

export const SERVICES = [
  {
    id: "refining",
    title: "Refinación de Metales Preciosos",
    description:
      "Procesos de alta pureza para oro, plata, platino y paladio con tecnología de última generación y estándares internacionales de calidad.",
    icon: "Flame",
  },
  {
    id: "processing",
    title: "Procesamiento Industrial de Metales",
    description:
      "Soluciones integrales de procesamiento para la industria minera, incluyendo fundición, aleación y conformado de metales preciosos.",
    icon: "Factory",
  },
  {
    id: "recovery",
    title: "Recuperación de Metales Preciosos",
    description:
      "Recuperación eficiente de metales preciosos a partir de residuos industriales, electrónicos y catalizadores agotados.",
    icon: "Recycle",
  },
  {
    id: "consulting",
    title: "Consultoría Técnica",
    description:
      "Asesoría especializada en procesos metalúrgicos, evaluación de proyectos mineros y optimización de operaciones de refinación.",
    icon: "BookOpen",
  },
] as const;

export const VALUES = [
  {
    title: "Excelencia",
    description:
      "Buscamos los más altos estándares de calidad en cada proceso y servicio que ofrecemos.",
  },
  {
    title: "Integridad",
    description:
      "Operamos con transparencia, honestidad y responsabilidad en todas nuestras relaciones comerciales.",
  },
  {
    title: "Innovación",
    description:
      "Adoptamos tecnología de vanguardia para optimizar procesos y ofrecer soluciones superiores.",
  },
  {
    title: "Sustentabilidad",
    description:
      "Nos comprometemos con prácticas responsables que minimizan el impacto ambiental de nuestras operaciones.",
  },
] as const;
