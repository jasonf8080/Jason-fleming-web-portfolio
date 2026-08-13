# Jason Fleming — Portfolio

React + Vite + Tailwind + GSAP portfolio site with case studies for South Salem Winery and Gardenside Kitchen.

## Run locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

`dist/_redirects` must exist at the root of the build output (Vite copies it from `public/` automatically) so Netlify routes work on refresh.

## Known follow-ups

- **Raster favicons**: `public/favicon.svg` (JF monogram) is wired up and covers modern browsers. The PNG/ICO set referenced in `index.html` and `site.webmanifest` (`favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`) still needs generating from the SVG — e.g. via realfavicongenerator.net — and dropping into `public/`.
- **og-image.jpg**: `src/components/SEO/Seo.jsx` points at `/og-image.jpg` for social previews. Add a 1200×630 JPG to `public/` with that filename.
- **Case study visuals**: the browser/phone mockups in `src/components/Work/SiteMockup.jsx` are stylized, brand-colored placeholders (no real screenshots were available). Swap in real desktop/mobile screenshots of southsalemwinery.com and gardensidekitchen.com when available.
