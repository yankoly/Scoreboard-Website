# The Scoreboard Website

Static multi-page website for The Scoreboard in Imperial Beach, built with HTML, CSS, and vanilla JS.

## Pages

- `/`
- `/menu/`
- `/events/`
- `/drinks/`
- `/gallery/`
- `/visit/`

## Run locally

Use any static server from the project root:

```powershell
C:\Users\HomePC\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe -m http.server 4173
```

Then open `http://localhost:4173`.

## Notes

- Menu, events, taps, gallery, and proof content live in [`data.js`](./data.js).
- Update image URLs in [`data.js`](./data.js) when real business photos are available.
- The site uses a sticky mobile CTA bar, scroll reveals, and filter/search interactions without a framework.
- If you want a Next.js migration later, the current structure maps cleanly to reusable sections and data files.
