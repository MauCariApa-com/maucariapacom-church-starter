# 🙏 Church Website Starter

A modern, responsive church website starter built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [Preact](https://preactjs.com). Designed for churches who want a fast, content-driven site that's easy to manage through Markdown files.

## ✨ Features

- **Static site generation** — fast, SEO-friendly pages
- **Tailwind CSS styling** — fully responsive, mobile-first design
- **Markdown-based content** — manage content via frontmatter files
- **Built-in content collections:**
  - Blog posts
  - Sermons (with audio/video support)
  - Events
  - Ministries
  - Staff / leadership team
  - Site information
- **Dynamic detail pages** with sticky TOC sidebars
- **Filtering / search** on blog and sermons listing pages
- **SEO-ready** `<Seo />` component plus JSON-LD schema
- **Sitemap** auto-generated via `@astrojs/sitemap`

## 🚀 Tech Stack

- [Astro](https://astro.build/) `7.2.0`
- [Tailwind CSS](https://tailwindcss.com/) `^3.4.1`
- [@astrojs/preact]([https://preactjs.com/](https://www.npmjs.com/package/@astrojs/preact)) `^6.0.2`
- [TypeScript](https://www.typescriptlang.org/) `7.0.2`
- [date-fns](https://date-fns.org/) for date formatting
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) for rendered Markdown styles

## 📦 Getting Started

### Prerequisites

- Node.js `18.x` or higher
- npm or another compatible package manager

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## 🗂️ Project Structure

```text
├── public/                   # Static assets (images, favicons, uploads)
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── global.css    # Tailwind entry + custom base styles
│   ├── components/
│   │   ├── Cards/            # Reusable card components
│   │   ├── Global/           # Header, Footer, Navigation
│   │   ├── Sections/         # Page section components
│   │   └── UI/               # Button, SEO, etc.
│   ├── content/
│   │   ├── blog/             # Blog posts (Markdown with frontmatter)
│   │   ├── events/           # Church events
│   │   ├── ministries/       # Church ministries
│   │   ├── sermons/          # Sermon entries
│   │   ├── siteInfo/         # Reusable site-wide info blocks
│   │   └── staff/            # Staff / leadership profiles
│   ├── layouts/
│   │   ├── BaseLayout.astro  # Global HTML shell
│   │   └── PostLayout.astro  # Layout for content pages
│   ├── pages/
│   │   ├── index.astro       # Homepage
│   │   ├── about-us.astro    # About page
│   │   ├── staff.astro       # Staff listing
│   │   ├── ministries/
│   │   │   ├── index.astro   # Ministries listing
│   │   │   └── [slug].astro  # Dynamic ministry detail
│   │   ├── sermons/
│   │   │   ├── index.astro   # Sermons listing with filters
│   │   │   └── [slug].astro  # Dynamic sermon detail
│   │   ├── events/
│   │   │   ├── index.astro   # Events listing
│   │   │   └── [slug].astro  # Dynamic event detail
│   │   ├── blog/
│   │   │   ├── index.astro   # Blog listing with filters
│   │   │   └── [slug].astro  # Dynamic blog detail
│   │   ├── im-new.astro      # Visitor guide
│   │   ├── contact.astro     # Contact page + form
│   │   └── giving.astro      # Giving page
│   ├── utils/
│   │   └── dateUtils.js      # Date helpers
│   ├── content.config.ts     # Astro content collection schemas
│   └── env.d.ts
├── astro.config.mjs
├── tailwind.config.cjs
├── postcss.config.cjs
└── package.json
```

## 📝 Content Collections

All dynamic content is managed through Markdown/MDX files inside `src/content/`. Each collection has a Zod schema defined in `src/content.config.ts`.

### Blog

Located at `src/content/blog/`.

```yaml
---
title: "Post Title"
slug: "post-slug"
pubDate: 2025-01-20
description: "A short description"
author: "Author Name"
image:
  url: "/uploads/blog/image.webp"
  alt: "Alt text"
tags: ["faith", "prayer"]
draft: false
---
```

### Sermons

Located at `src/content/sermons/`.

```yaml
---
title: "Sermon Title"
date: 2025-02-02
speaker: "Pastor Name"
series: "Series Name"
scripture: "Proverbs 3:5-6"
audioUrl: "https://example.com/sermon.mp3"
videoUrl: "https://www.youtube.com/embed/..."
image: "/uploads/sermons/image.webp"
summary: "Short summary"
tags: ["faith", "trust"]
draft: false
---
```

### Events

Located at `src/content/events/`.

```yaml
---
title: "Event Title"
date: 2025-04-20
endDate: 2025-04-20
time: "8:00 AM & 10:30 AM"
location: "Main Sanctuary"
image: "/uploads/events/image.webp"
summary: "Event summary"
tags: ["easter", "celebration"]
registrationRequired: true
registrationLink: "https://example.com/register"
draft: false
---
```

### Ministries

Located at `src/content/ministries/`.

```yaml
---
name: "Ministry Name"
slug: "ministry-slug"
logo: "/uploads/ministries/logo.webp"
summary: "Short summary"
coordinator: "Coordinator Name"
contact: "ministry@churchname.org"
schedule: "Sundays at 10:30 AM"
order: 1
draft: false
---
```

### Staff

Located at `src/content/staff/`.

```yaml
---
name: "Staff Name"
title: "Job Title"
image: "/uploads/staff/photo.webp"
email: "email@churchname.org"
phone: "+1-555-0101"
bio: "Short bio"
order: 1
draft: false
---
```

### Site Info

Located at `src/content/siteInfo/`. Useful for reusable blocks like office hours.

```yaml
---
title: "Church Office & Activity Hours"
---
```

## 🎨 Customization

### Site identity

1. Update the church name and contact details in:
   - `src/components/Global/Header.astro`
   - `src/components/Global/Footer.astro`
   - `src/components/UI/Seo.astro`
   - All page titles/descriptions

2. Replace placeholder images in `public/uploads/` with your own assets.

3. Update the timeline on `src/pages/about-us.astro` to match your church history.

### Colors

Edit `tailwind.config.cjs` to change the primary, secondary, and accent color palettes.

```js
colors: {
  primary: { /* your shades */ },
  secondary: { /* your shades */ },
  accent: { /* your shades */ },
}
```

## 🌐 Deployment

This is a static site, so it can be deployed to:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [GitHub Pages](https://pages.github.com/)
- Any static web host

Make sure to update the `site` URL in `astro.config.mjs` before deploying:

```js
export default defineConfig({
  site: 'https://yourchurch.org',
  // ...
});
```

Built files are placed in the `dist/` directory.

## 📄 License

This starter was created by [MauCariApa.com](https://maucariapa.com). Customize it freely for your church or organization.
