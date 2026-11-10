# Dan Christopher Saldariega — Portfolio

A responsive personal portfolio built with Next.js, React, TypeScript, and CSS. It is configured for static export and GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The static website is generated in the `out/` directory.

## GitHub Pages

The site is configured for:

[https://dsaldariega.github.io/my-portfolio/](https://dsaldariega.github.io/my-portfolio/)

Next.js uses static export, a `/my-portfolio` base path, and trailing slashes for GitHub Pages compatibility.

The workflow in `.github/workflows/deploy.yml` deploys changes pushed to `main`. In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Updating content

Edit experience, skills, education, and contact details in `src/app/page.tsx`. Global styles are in `src/app/globals.css`.
