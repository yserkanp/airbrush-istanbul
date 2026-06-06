# Airbrush Istanbul Portfolio

Premium bilingual portfolio website for Airbrush Istanbul, built with Next.js 15, TypeScript, Tailwind CSS and Framer Motion.

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000/tr` for Turkish or `http://localhost:3000/en` for English.

## Production Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Structure

- `app/[lang]` contains bilingual pages.
- `lib/content.ts` holds portfolio projects, services, process steps and blog entries.
- `components` contains shared UI, animation and portfolio gallery components.
- `app/sitemap.ts` and `app/robots.ts` provide SEO crawler support.
- `public/images/placeholder.svg` is the project-image placeholder for replacing sample imagery with real studio photography.

## Launch Notes

- Replace sample Unsplash project images in `lib/content.ts` with final Airbrush Istanbul photography.
- Connect `app/api/contact/route.ts` to the chosen production email provider.
- Update the Google Maps embed query if a precise public map URL is preferred.
