export const site = {
  name: "Club Cultural Matienzo",
  shortName: "Matienzo",
  tagline: "Donde la cultura, la gastronomía y la fiesta se encuentran para crear comunidad.",
  description: "Centro Cultural en Villa Crespo · Música en vivo, fiestas, gastronomía y eventos.",
  url: "https://ccmatienzo.com.ar",
  yearFounded: 2008,
};

export const contact = {
  address: "Av. Juan B. Justo 2959",
  neighborhood: "Villa Crespo",
  city: "CABA",
  country: "Argentina",
  phone: "011 2837-2102",
  whatsapp: "+5491128372102",
  whatsappUrl: "https://wa.me/541128372102?text=Hola%20Matienzo%2C%20como%20estas%3F",
  whatsappReservas: "https://wa.me/541128372102?text=Hola%2C%20quisiera%20reservar%20la%20terraza",
  emails: {
    info: "info@matienzo.com.ar",
    shows: "shows@matienzo.com.ar",
    eventos: "eventos@matienzo.com.ar",
  },
  hours: {
    attention: "Martes a Sábados: 10:00 — 19:00",
    open: "Abierto desde las 20:00",
  },
  transport: {
    subway: "Línea B — Estación Dorrego (3 cuadras)",
    parking: "Estacionamiento disponible en zona",
  },
  social: {
    instagram: "https://instagram.com/ccmatienzo",
    facebook: "https://facebook.com/clubculturalmatienzo",
    twitter: "https://twitter.com/cc_matienzo",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.9!2d-58.4548!3d-34.5907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM1JzI2LjUiUyA1OMKwMjcnMTcuMyJX!5e0!3m2!1ses!2sar!4v1700000000000",
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
  image?: string;
};

export const history = {
  intro:
    "El Club Cultural Matienzo nació en 2008 como un sueño compartido: crear un espacio alternativo para la expresión artística en Buenos Aires. En un contexto post-Cromañón, donde escaseaban los sitios seguros y accesibles para jóvenes creadores, cinco amigos visionarios decidieron generar cultura de forma colectiva, experimental y sustentable.",
  milestones: [
    {
      year: "2008",
      title: "Los Inicios",
      description:
        "Cinco amigos emprendedores —fotógrafo, analista, socióloga, chef y abogado— abren las puertas en Matienzo 2424, Colegiales. Nace Radio Colmena. El espacio se vuelve epicentro cultural.",
      image: "/images/spaces/centro-cultural-matienzo.webp",
    },
    {
      year: "2011",
      title: "Crecimiento",
      description:
        "De 5 a 30+ personas trabajando. Recitales, cine, teatro, muestras y performances en terraza. La comunidad se expande.",
      image: "/images/spaces/evento-matienzo.webp",
    },
    {
      year: "2012",
      title: "Profesionalización",
      description:
        "Mudanza a Pringles 1249, Villa Crespo. 1000 m², capacidad 300 personas. Se crea un fondo de inversión con más de 20 socios vitalicios.",
      image: "/images/spaces/murales-interior.jpg",
    },
    {
      year: "2014",
      title: "Cambio Legislativo",
      description:
        "Rol protagonista en sancionar la Ley de Centros Culturales de la Ciudad. Se crea la ONG Abogados Culturales para acompañar al sector.",
    },
    {
      year: "2018",
      title: "Consolidación",
      description:
        "Festivales como Amor o Nada, Sub30, Divergencia. Co-organización de eventos internacionales. Matienzo es referencia.",
      image: "/images/spaces/espacio-interior.jpg",
    },
    {
      year: "2020",
      title: "Pandemia y resistencia",
      description:
        "Cierre temporal. Actividades virtuales. Reapertura con protocolos. La comunidad sostiene el espacio en el momento más difícil.",
    },
    {
      year: "2023",
      title: "Mudanza a Juan B. Justo",
      description:
        "Despedida de Villa Crespo tras 9 años. Reapertura en Av. Juan B. Justo 2959. 1500 m², capacidad 500 personas. 80+ integrantes activos.",
      image: "/images/spaces/terraza-desde-arriba.jpg",
    },
    {
      year: "2024",
      title: "Hoy",
      description:
        "Más de 15 años haciendo cultura. Plataforma de artistas consagrados y emergentes, motor de cambios legislativos y comunidad.",
      image: "/images/spaces/espacio-terraza.jpg",
    },
  ] satisfies Milestone[],
};

export const spaces = [
  {
    slug: "sala",
    name: "Sala Principal",
    description:
      "Capacidad para 500 personas. Escenario, sonido profesional, iluminación. Donde suena la noche.",
    images: [
      "/images/spaces/espacio-interior.jpg",
      "/images/spaces/murales-interior.jpg",
      "/images/spaces/evento-matienzo.webp",
    ],
  },
  {
    slug: "bar",
    name: "El Bar",
    description:
      "Tragos de autor, cerveza tirada, picadas y comidas. Carta actualizada disponible online. Reservá tu mesa.",
    images: [
      "/images/spaces/sirviendo-cerveza.jpg",
      "/images/spaces/sirviendo-tequila.jpg",
      "/images/spaces/sirviendo-tequila-con-limon.jpg",
    ],
  },
  {
    slug: "terraza",
    name: "Terraza",
    description:
      "Vista aérea, espacio al aire libre. Eventos privados, ferias, sesiones audiovisuales y noches de verano.",
    images: [
      "/images/spaces/terraza-desde-arriba.jpg",
      "/images/spaces/espacio-terraza.jpg",
    ],
  },
];

export const tuEvento = [
  {
    code: "01",
    icon: "🎉",
    title: "Festejos",
    short: "Celebraciones personalizadas para momentos especiales.",
    items: ["Cumpleaños", "Aniversarios", "Celebraciones familiares", "Fiestas temáticas"],
  },
  {
    code: "02",
    icon: "💼",
    title: "Eventos Corporativos",
    short: "Espacios profesionales para reuniones de negocio y presentaciones.",
    items: ["Presentaciones", "Team building", "Lanzamientos", "Conferencias"],
  },
  {
    code: "03",
    icon: "🎬",
    title: "Producciones",
    short: "Locaciones versátiles para rodajes y contenido audiovisual.",
    items: ["Rodajes publicitarios", "Sesiones fotográficas", "Videoclips", "Contenido digital"],
  },
  {
    code: "04",
    icon: "🏪",
    title: "Ferias y Exposiciones",
    short: "Espacios amplios y adaptables para exhibiciones y muestras.",
    items: ["Ferias comerciales", "Exposiciones artísticas", "Muestras gastronómicas", "Mercados"],
  },
];

export const faqs = [
  {
    q: "¿Cómo pido el reembolso de mi compra?",
    a: "El reembolso se puede efectuar SOLO dentro de los 10 días corridos una vez realizada la compra, siempre y cuando no haya comenzado el evento. El reembolso se hace ÚNICAMENTE enviándonos una solicitud por nuestro formulario y se procesa sobre el TOTAL de la compra. Puede demorar hasta 20 días hábiles.",
  },
  {
    q: "Reserva para el bar (terraza)",
    a: "Para reservas en la terraza podés comunicarte al WhatsApp +54 9 11 2837-2102.",
  },
];
