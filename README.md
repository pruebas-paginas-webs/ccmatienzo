# Club Cultural Matienzo · Sitio web (demo)

Propuesta de sitio web nuevo para el [Club Cultural Matienzo](https://ccmatienzo.com.ar/) (Villa Crespo, Buenos Aires). Reemplaza la versión actual hosteada en Fanz por una experiencia propia, con agenda destacada, integración de venta de tickets vía **Passline** y un panel admin demo para cargar/editar eventos en vivo.

## Stack

- **[Astro 6](https://astro.build/)** — framework multi-page estático
- **[Tailwind CSS 4](https://tailwindcss.com/)** — utility-first styling
- **TypeScript** — strict mode
- **Vanilla JS** — animaciones scroll-driven (parallax + reveal-on-scroll), sin librerías pesadas
- **Google Fonts** — Archivo Black (display) + Inter (body)

## Estructura

```
matienzo-web/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── spaces/        # fotos del lugar (sala, bar, terraza, murales)
│   │   └── events/        # banners de eventos
│   └── favicon.png
├── src/
│   ├── data/
│   │   ├── events.ts      # Eventos por defecto (10 eventos reales del CCM)
│   │   └── content.ts     # Textos: contacto, historia, FAQ, espacios
│   ├── lib/
│   │   └── eventStore.ts  # Helpers localStorage para el admin demo
│   ├── layouts/
│   │   └── Layout.astro   # Wrapper común: header, footer, banner edit-mode
│   ├── components/
│   │   ├── Header.astro   # Nav sticky con blur al scroll
│   │   ├── Footer.astro   # Marquee + datos + redes
│   │   ├── Marquee.astro  # Ticker reutilizable (3 variantes)
│   │   └── EventCard.astro
│   ├── pages/
│   │   ├── index.astro       # Home: hero, agenda horizontal, espacios
│   │   ├── programacion.astro
│   │   ├── el-espacio.astro
│   │   ├── tu-evento.astro
│   │   ├── nosotros.astro
│   │   ├── contacto.astro
│   │   └── admin.astro       # Panel demo (auth localStorage, CRUD eventos)
│   └── styles/
│       └── global.css     # Tailwind + theme custom (paleta, fuentes)
└── astro.config.mjs
```

## Comandos

```bash
npm install     # Instalar dependencias (~150MB)
npm run dev     # Dev server en http://localhost:4321
npm run build   # Build estático a ./dist/
npm run preview # Servir el build local
```

## Panel admin (demo)

URL: `/admin` — código de acceso: `matienzo`

Permite agregar / editar / borrar eventos en vivo. **Importante:** los datos se guardan en `localStorage` (solo en el navegador del usuario), no en una base de datos. Está pensado como prueba de concepto visual del flujo. Para producción habría que conectar a un backend real (CMS headless, API REST, o la propia API de Passline).

Cuando el admin tiene cambios pendientes, aparece un banner amarillo "Modo edición" con opción de restaurar a los eventos originales.

## Diseño y branding

- **Paleta**: negro `#000`, magenta `#ec1e79` (acento principal extraído del logo), neon `#fff200` (hovers/CTAs alternativos), off-white `#f5f5f5`.
- **Fuentes**: Archivo Black (display, condensed bold) y Bebas Neue como fallback. Inter para texto. Las originales del sitio actual son **Modius** y **Kautiva** (propietarias) — si Matienzo tiene licencia, se intercambian editando `src/styles/global.css`.
- **Tono**: brutalist meets club nocturno. Tipografías display gigantes, grilla asimétrica, marquees, scroll-driven reveals.

## Tickets (Passline)

Todos los botones "Comprar" apuntan a `passline.com/eventos/prueba-bauti` (placeholder). Cuando estén los IDs reales por evento, reemplazar el campo `ticketUrl` en `src/data/events.ts` (eventos por defecto) y/o cargarlos desde el panel admin.

## Deploy

Compatible con cualquier hosting estático: **Vercel** (recomendado, integración GitHub directa), **Netlify**, **Cloudflare Pages**. `npm run build` genera la carpeta `./dist/` lista para subir.

---

Demo construida como propuesta visual. Reemplaza el sitio actual de Matienzo (hosteado sobre la plantilla white-label de Fanz) por algo con identidad propia.
