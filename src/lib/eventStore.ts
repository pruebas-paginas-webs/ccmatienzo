import type { MatienzoEvent } from "../data/events";

export const STORAGE_KEY = "matienzo-events-v1";
export const SESSION_KEY = "matienzo-admin-session";

export function loadEvents(defaults: MatienzoEvent[]): MatienzoEvent[] {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : defaults;
  } catch {
    return defaults;
  }
}

export function saveEvents(events: MatienzoEvent[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
}

export function clearEvents() {
  localStorage.removeItem(STORAGE_KEY);
}

export function hasOverride() {
  return typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) !== null;
}

export function isAdminLoggedIn() {
  return typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY) === "yes";
}

export function setAdminSession(yes: boolean) {
  if (yes) sessionStorage.setItem(SESSION_KEY, "yes");
  else sessionStorage.removeItem(SESSION_KEY);
}

export function escape(s: string) {
  const div = document.createElement("div");
  div.textContent = s;
  return div.innerHTML;
}

// Generate the same HTML as EventCard.astro for client-side rendering.
export function eventCardHTML(event: MatienzoEvent, size: "sm" | "md" | "lg" = "md") {
  const sizeClasses: Record<string, string> = {
    sm: "min-w-[260px] md:min-w-[300px]",
    md: "min-w-[340px] md:min-w-[400px]",
    lg: "w-full",
  };
  const e = {
    title: escape(event.title),
    description: escape(event.description),
    dateLabel: escape(event.dateLabel),
    time: escape(event.time),
    category: escape(event.category),
    banner: escape(event.banner),
    ticketUrl: escape(event.ticketUrl),
  };
  return `<article class="group relative bg-stone-100 border border-paper/10 hover:border-magenta transition-all duration-300 ${sizeClasses[size]}">
    <a href="${e.ticketUrl}" target="_blank" rel="noopener" class="block">
      <div class="relative aspect-[4/3] overflow-hidden">
        <img src="${e.banner}" alt="${e.title}" class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent"></div>
        <span class="absolute top-3 left-3 bg-magenta text-ink text-xs uppercase tracking-wider px-2.5 py-1 font-bold">${e.category}</span>
        <span class="absolute top-3 right-3 bg-ink/80 backdrop-blur text-paper text-xs uppercase tracking-wider px-2.5 py-1 font-mono">${e.time}HS</span>
      </div>
      <div class="p-5">
        <p class="text-magenta text-xs uppercase tracking-widest font-bold mb-2">${e.dateLabel}</p>
        <h3 class="font-display text-xl md:text-2xl uppercase leading-tight mb-3 line-clamp-2">${e.title}</h3>
        <p class="text-paper/60 text-sm leading-relaxed line-clamp-2 mb-4">${e.description}</p>
        <span class="inline-flex items-center gap-2 bg-magenta text-ink px-4 py-2 text-sm uppercase tracking-wider font-bold group-hover:bg-neon transition-colors">
          Comprar
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
        </span>
      </div>
    </a>
  </article>`;
}

export function groupByDate(events: MatienzoEvent[]) {
  const map = new Map<string, MatienzoEvent[]>();
  events.forEach((ev) => {
    if (!map.has(ev.dateLabel)) map.set(ev.dateLabel, []);
    map.get(ev.dateLabel)!.push(ev);
  });
  return map;
}

export function newEvent(): MatienzoEvent {
  return {
    id: "ev-" + Date.now(),
    title: "",
    category: "Recitales",
    date: new Date().toISOString().slice(0, 10),
    dateLabel: "",
    time: "21:00",
    banner: "/images/events/pez-vs-matienzo.jpg",
    description: "",
    ticketUrl: "https://www.passline.com/eventos/prueba-bauti",
    featured: false,
  };
}
