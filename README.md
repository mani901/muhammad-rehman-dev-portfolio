# Muhammad Rehman Portfolio

A clean, fast, recruiter-facing portfolio website built with **Next.js 16**, **TypeScript**,
**Tailwind CSS v4**, and **Framer Motion**. Light, minimal design with subtle scroll
animations and a links-only contact section.

## Tech Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** for styling
- **Framer Motion** for subtle entrance/scroll animations
- **lucide-react** + custom brand SVGs for icons
- shadcn-style UI primitives (`Button`, `Card`, `Badge`)

## Project Structure

```
src/
  app/
    layout.tsx        # fonts, SEO metadata, Navbar + Footer
    page.tsx          # composes all sections in order
    globals.css       # Tailwind import + theme tokens (blue accent)
  components/
    navbar.tsx        # sticky nav, smooth-scroll links, mobile menu
    footer.tsx        # social links
    section.tsx       # reusable section wrapper (heading + underline)
    reveal.tsx        # Framer Motion fade/slide-in-on-scroll wrapper
    icons.tsx         # GitHub + LinkedIn brand SVGs
    ui/               # Button, Card, Badge primitives
    sections/         # hero, about, skills, experience, projects, education, contact
  data/
    portfolio.ts      # SINGLE SOURCE OF TRUTH for all content: edit here
  lib/
    utils.ts          # cn() class merge helper
public/
  resume.pdf          # served by the "Download Resume" button; keep in sync
                      # with the master resume (Muhammad_Rehman_Resume.pdf)
```

## Editing Content

All text (summary, skills, experience, projects, education, contact) lives in
[`src/data/portfolio.ts`](src/data/portfolio.ts). Edit that one file: the components
read from it. No component changes needed for content updates.

Project entries support an optional `live` URL (rendered as "Visit Live Site")
and an optional `github` URL (rendered as "View on GitHub"). Use `live` alone
for projects whose repo is private (e.g. Live Cricket Scorer) and omit `period`
when the exact build period is not on record.

## Updating the Resume PDF

The downloadable resume is a generated 1-page PDF built from
`~/workspace/job-applications/make_tailored.py` (the same pipeline as the
job-application resumes), so it always carries the current role and dates.
To regenerate it after a role or profile change, run the portfolio-resume
build in that script's style and verify it, then copy the result into
`public/`:

```bash
python3 ~/workspace/job-applications/verify.py <new-resume>.pdf
cp <new-resume>.pdf public/resume.pdf
```

The current copy (Nov 2026) is the 1-page portfolio resume: Junior Software
Engineer at PixelPK (Nov 2026 - Present), Associate MERN Stack Developer
(Jan 2026 - Nov 2026), MERN Stack Intern (Oct 2025 - Dec 2025), Pakistan
LawBot and Cesto Shop. Verified: exactly 1 page, 94.0% fill, 6 working
links, no em/en dashes. The full 2-page master resume
(`Muhammad_Rehman_Resume.pdf`, Oct 2026) is a separate file and is NOT what
the site serves.

## Local Development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js.
3. No environment variables needed. Click **Deploy**.

The site is fully static, so it also works on any static host (Netlify, GitHub Pages
via `next export`, etc.).

## Customizing the Theme

The blue accent and all base colors are CSS variables in
[`src/app/globals.css`](src/app/globals.css) under `:root`. Change `--accent` to
re-skin the whole site.
