export type EventCategory =
  | "Recitales"
  | "Fiestas"
  | "Noche de Juegos"
  | "Feria"
  | "Audiovisual";

export interface MatienzoEvent {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  dateLabel: string;
  time: string;
  banner: string;
  description: string;
  ticketUrl: string;
  featured?: boolean;
}

const PASSLINE = "https://www.passline.com/eventos/prueba-bauti";

export const events: MatienzoEvent[] = [
  {
    id: "pastoral-30-abril",
    title: "Homenaje a PASTORAL — Último Concierto en Obras (1983)",
    category: "Recitales",
    date: "2026-04-30",
    dateLabel: "Jueves 30 Abril",
    time: "21:00",
    banner: "/images/events/pastoral-homenaje.jpg",
    description:
      "Una noche para volver a sentir la emoción de una de las bandas más sensibles del rock argentino. Banda en vivo recreando los clásicos que marcaron una generación.",
    ticketUrl: PASSLINE,
    featured: true,
  },
  {
    id: "la-kaliente-30-abril",
    title: "La Kaliente — 30/04",
    category: "Fiestas",
    date: "2026-04-30",
    dateLabel: "Jueves 30 Abril",
    time: "23:30",
    banner: "/images/events/la-kaliente.jpg",
    description:
      "Espacio de libre expresión y exploración nocturna en la escena local. DJs en vivo. Sonidos intensos, pista cargada.",
    ticketUrl: PASSLINE,
  },
  {
    id: "bingo-musical-01-mayo",
    title: "El Bingo Musical de Veto y Fer — 01/05",
    category: "Noche de Juegos",
    date: "2026-05-01",
    dateLabel: "Viernes 01 Mayo",
    time: "21:00",
    banner: "/images/events/bingo-musical.jpg",
    description:
      "Una propuesta lúdica y divertida para compartir con familia y/o amigos. Reviví los temas más icónicos de la década del 2000.",
    ticketUrl: PASSLINE,
  },
  {
    id: "pez-vs-matienzo-01-mayo",
    title: "PEZ vs MATIENZO Vol. 3",
    category: "Fiestas",
    date: "2026-05-01",
    dateLabel: "Viernes 01 Mayo",
    time: "23:45",
    banner: "/images/events/pez-vs-matienzo.jpg",
    description:
      "Vuelve el superclásico PEZ vs. MATIENZO. Porque bailar es cultura, y cultura también es trabajo. Yuber + Guarachis Cattan.",
    ticketUrl: PASSLINE,
    featured: true,
  },
  {
    id: "fiesta-salsera-02-mayo",
    title: "Fiesta Salsera — La Malanga en Vivo",
    category: "Fiestas",
    date: "2026-05-02",
    dateLabel: "Sábado 02 Mayo",
    time: "23:00",
    banner: "/images/events/fiesta-salsera.jpg",
    description:
      "Salsa en vivo con La Malanga + DJ. La pista se enciende. Llevá tus pasos.",
    ticketUrl: PASSLINE,
  },
  {
    id: "delta-feria-03-mayo",
    title: "Delta Feria — 03/05",
    category: "Feria",
    date: "2026-05-03",
    dateLabel: "Domingo 03 Mayo",
    time: "14:00",
    banner: "/images/events/delta-feria.jpg",
    description:
      "Feria de diseño, gastronomía y propuestas independientes. Entrada libre, vení a recorrer.",
    ticketUrl: PASSLINE,
  },
  {
    id: "reybruja-04-mayo",
    title: "reybruja en Matienzo",
    category: "Recitales",
    date: "2026-05-04",
    dateLabel: "Lunes 04 Mayo",
    time: "21:00",
    banner: "/images/events/reybruja.jpg",
    description:
      "reybruja se presenta en vivo con su nuevo material. Show íntimo en sala principal.",
    ticketUrl: PASSLINE,
  },
  {
    id: "evento-08-08-mayo",
    title: "Sesión Audiovisual — Cine al Aire Libre",
    category: "Audiovisual",
    date: "2026-05-08",
    dateLabel: "Viernes 08 Mayo",
    time: "20:30",
    banner: "/images/events/evento-08.jpg",
    description:
      "Proyección de cine independiente en la terraza del club. Conversatorio post-función.",
    ticketUrl: PASSLINE,
  },
  {
    id: "evento-09-09-mayo",
    title: "Showcase Emergentes — Bandas Nuevas BA",
    category: "Recitales",
    date: "2026-05-09",
    dateLabel: "Sábado 09 Mayo",
    time: "21:00",
    banner: "/images/events/evento-09.jpg",
    description:
      "Cuatro bandas emergentes de la escena porteña en una sola noche. Plataforma para nuevos artistas.",
    ticketUrl: PASSLINE,
  },
  {
    id: "evento-10-10-mayo",
    title: "Trasnoche Disco — Vinilos & Pista",
    category: "Fiestas",
    date: "2026-05-10",
    dateLabel: "Domingo 10 Mayo",
    time: "23:30",
    banner: "/images/events/evento-10.jpg",
    description:
      "Solo vinilos. Solo disco. Solo pista. La trasnoche más bailable del mes.",
    ticketUrl: PASSLINE,
  },
];

export const eventCategories: { name: EventCategory; count: number }[] = [
  { name: "Recitales", count: 17 },
  { name: "Fiestas", count: 7 },
  { name: "Noche de Juegos", count: 1 },
  { name: "Feria", count: 1 },
  { name: "Audiovisual", count: 1 },
];

export function getFeatured() {
  return events.filter((e) => e.featured);
}

export function getTonight() {
  return events[0];
}
