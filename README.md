## Muhammad Rehman — MERN Portfolio (React + Vite + Tailwind + Framer Motion)

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=06112a)](https://react.dev) [![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev) [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com) [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animation-111?logo=framer&logoColor=white)](https://www.framer.com/motion/)

Clean, blazing‑fast portfolio for a final‑year Software Engineering student and MERN stack developer. Optimized for recruiters, readable code, and quick customization.

### Live Demo

- Update this link after deployment: `https://your-portfolio.vercel.app`

### Why this repo deserves a ⭐

- Polished UI/UX with accessible motion and keyboard support
- Clear, recruiter‑friendly content aligned to real projects
- Production‑ready setup with Vite, Tailwind, and Framer Motion
- Copy‑paste friendly structure for quick personalization

## ✨ Highlights

- Responsive layout with Tailwind CSS
- Smooth, accessible animations via Framer Motion
- Looping typewriter intro with reduced‑motion fallback
- Data‑driven sections and reusable React components
- Mobile menu with stateful toggle and smooth anchor scroll

## 🧭 Sections

- Navbar: Anchored navigation, mobile dropdown, smooth scroll
- Hero: Typewriter intro, concise summary, quick CTAs
- Technical Skills: Backend/DB/Frontend/Tools per resume
- Projects: Cards with live/repo links
  - AI‑Powered Blog Generator — MERN + Gemini AI ([GitHub](https://github.com/mani901/Ai-Blog-App))
  - Multi‑Role Job Portal — MERN ([GitHub](https://github.com/mani901/Mern-JobPortal))
- Experience: Final‑year SWE and Projects/Open Source highlights
- Contact: Email, phone, GitHub, LinkedIn

## 📦 Tech Stack

- React 19 (Vite)
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Framer Motion

## 🚀 Quick Start

### Prerequisites

- Node.js 18+

### Install

```bash
npm install
```

### Run (dev)

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview build

```bash
npm run preview
```

## 🛠️ Customize (2–5 mins)

- Hero text and looped typewriter: `src/components/Hero.jsx`
- Skills copy: `src/components/TechStack.jsx`
- Projects data: `src/components/Projects.jsx`
- Contact details (email, phone, GitHub, LinkedIn): `src/components/Contact.jsx`

## 🔧 Implementation Notes

- Global smooth scroll on `<html>` in `index.html`.
- Only custom CSS utility is `shadow-glow`; all motion is via Framer Motion (`src/index.css`).
- Mobile menu is React state‑controlled and closes on link click (`src/components/Navbar.jsx`).

## 🗂️ Structure (key files)

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    TechStack.jsx
    Projects.jsx
    Experience.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
index.html
```

## 📸 Screenshots

- Add screenshots or a short GIF here to boost engagement (e.g., `public/preview.png`).

## 🔗 Profile & Links

- Email: abrehman8491@gmail.com
- Phone: +92 307 457 0787
- GitHub: https://github.com/mani901
- LinkedIn: https://www.linkedin.com/in/muhammad-rehman-022b42305

## 🙌 Support

If you find this template helpful, please consider giving it a ⭐. It helps others discover it and motivates further improvements.

## 📝 License

MIT — free to use, modify, and deploy. Attribution appreciated.
