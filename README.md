# cengelsen.no

Personal website and blog for [Christian Kårbø Engelsen](https://cengelsen.no). The site includes a multilingual blog, an interactive CV with several professional profiles, RSS feeds, and static CV PDFs generated at build time.

Live site: [https://cengelsen.no](https://cengelsen.no)

## Tech stack

- [SvelteKit](https://kit.svelte.dev/) 2 with [Svelte](https://svelte.dev/) 4
- [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/) 5
- [@sveltejs/adapter-static](https://kit.svelte.dev/docs/adapter-static) — fully prerendered static output
- Blog posts as Markdown (`gray-matter`, `marked`) under `src/content/en` and `src/content/no`
- CV data in `src/data/`; PDF export via [Typst](https://typst.app/) (`scripts/generate-cv-pdfs.ts`)
- Deployed to [GitHub Pages](https://pages.github.com/) (see `.github/workflows/deploy.yml`)

## Project layout (high level)

| Path | Purpose |
|------|---------|
| `src/routes/` | Pages and routing (blog, CV, language variants) |
| `src/content/{en,no}/` | Blog post Markdown |
| `src/data/cv.ts`, `cv-profiles.ts` | CV content and profile definitions |
| `src/components/` | UI components |
| `static/` | Static assets (including generated CV PDFs after build) |
| `site.config.js` | Site URL and author name |

## Run locally

**Requirements:** [Node.js](https://nodejs.org/) 22 (recommended; matches CI) and [Yarn](https://yarnpkg.com/) 1.x.

```bash
git clone https://github.com/Cengelsen/cengelsen.no.git
cd cengelsen.no
yarn install
yarn dev
```

Open [http://localhost:5173](http://localhost:5173). The dev server supports hot reload.

### Other commands

```bash
yarn check      # Svelte/TypeScript checks
yarn lint       # ESLint
yarn build      # Production build (runs CV PDF generation first)
yarn preview    # Serve the production build locally
```

`yarn build` runs `prebuild`, which needs the [Typst CLI](https://github.com/typst/typst) on your `PATH` to generate CV PDFs. Development (`yarn dev`) does not require Typst unless you work on the PDF pipeline.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE) (GPL-3.0-or-later). Blog posts and other personal content may be subject to separate terms where noted in those files.
