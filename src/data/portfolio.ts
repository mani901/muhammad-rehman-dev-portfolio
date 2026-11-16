/**
 * Single source of truth for all portfolio content.
 * Edit text here — components read from these typed objects.
 * Content mirrors the master resume (Muhammad_Rehman_Resume.pdf, Oct 2026).
 */

export const profile = {
  name: "Muhammad Rehman",
  title: "Full Stack Developer (MERN)",
  location: "Lahore, Pakistan",
  email: "abrehman8491@gmail.com",
  phone: "+92 307 457 0787",
  linkedin: "https://linkedin.com/in/muhammad-rehman-022b42305",
  github: "https://github.com/mani901",
  resume: "/resume.pdf",
  /** One-line pitch shown under the name in the hero. */
  tagline:
    "I build production-grade web applications end-to-end — from database schema design to CI/CD deployment — with the MERN stack and LLM integration.",
  summary:
    "Full-stack developer with 1+ years of experience designing and deploying scalable web applications using React, Next.js, Node.js, PostgreSQL, and MongoDB. Proven track record of delivering production-grade systems end-to-end, distinguished by practical expertise in integrating LLM workflows, vector search, and custom AI microservices. Skilled at streamlining release cycles through GitHub Actions CI/CD pipelines and engineering secure REST APIs with robust payment and authentication infrastructures.",
} as const;

export const stats = [
  { value: "1+ yrs", label: "Professional experience" },
  { value: "35%", label: "Fewer production errors" },
  { value: "50%", label: "Faster deployments" },
  { value: "3.92", label: "CGPA / 4.0" },
] as const;

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Node.js",
      "React.js",
      "Next.js",
      "Express.js",
      "Fastify",
      "Socket.IO",
      "React Native / Expo",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Databases & ORMs",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose", "Prisma", "Drizzle ORM"],
  },
  {
    category: "UI & Styling",
    items: ["Tailwind CSS", "Bootstrap", "ShadCN", "Styled Components"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Git",
      "GitHub Actions (CI/CD)",
      "Docker",
      "Vercel",
      "Render",
      "AWS EC2",
      "Postman",
      "Swagger",
      "Playwright (E2E)",
    ],
  },
  {
    category: "AI & LLM Integration",
    items: [
      "OpenAI API",
      "LLM Workflows",
      "Atlas Vector Search",
      "MCP / Agent Skills",
      "Python",
      "YOLOv8 (Ultralytics)",
      "OpenCV",
      "FastAPI",
      "Uvicorn",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Associate MERN Stack Developer",
    company: "PixelPK",
    location: "Lahore, Pakistan",
    period: "Jan 2026 – Present",
    bullets: [
      "Delivered production web platforms end-to-end with PostgreSQL/MongoDB schema design, REST APIs, and React front-ends as the primary developer on multiple client products.",
      "Integrated LLM workflows, Atlas Vector Search, and secure Stripe billing infrastructure across client production applications.",
      "Collaborated with cross-functional design and analytics teams to build REST APIs and data-driven dashboards powering personalized backend workflows.",
      "Designed and implemented end-to-end CI/CD pipelines using GitHub Actions, cutting manual deployment effort by 50% and standardizing release workflows.",
      "Refactored and modularized legacy frontend and backend codebases, reducing production errors by 35% and improving maintainability.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Stripe", "GitHub Actions", "Tailwind CSS"],
  },
  {
    role: "MERN Stack Intern",
    company: "PixelPK",
    location: "Lahore, Pakistan",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Translated Figma designs into pixel-perfect, fully responsive React and Next.js interfaces with lazy loading and reusable component libraries.",
      "Built full-stack features from MongoDB schema design to REST APIs and implemented JWT-based authentication with role-based access control.",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
  },
];

export type Project = {
  title: string;
  tagline: string;
  /** Omitted when the exact build period is not on record. */
  period?: string;
  /** GitHub repo or PR link. Omitted for private repos — use `live` instead. */
  github?: string;
  /** Live deployment URL. */
  live?: string;
  description: string;
  highlights: string[];
  tech: string[];
  /** Two-letter monogram shown in the placeholder card header. */
  monogram: string;
};

export const projects: Project[] = [
  {
    title: "Pakistan LawBot",
    tagline: "AI legal-research platform",
    live: "https://pakistanlawbot.com/",
    description:
      "AI legal-research platform serving lawyers, firms, and students across web, admin, and CRM applications on a shared Node/TypeScript API, with semantic case-law search, multi-model AI chat, and Stripe billing.",
    highlights: [
      "Implemented semantic case-law search across 143,000+ judgments using Atlas Vector Search and local ONNX embeddings in English and Urdu at zero per-query cost.",
      "Streamed AI responses over SSE with multi-model orchestration across Claude, GPT, and Gemini for chat, legal drafting, and document analysis.",
      "Integrated Stripe billing with signature-verified webhooks and an idempotency ledger to prevent duplicate subscription grants.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "React.js",
      "Atlas Vector Search",
      "ONNX",
      "Stripe",
    ],
    monogram: "PL",
  },
  {
    title: "Cesto Shop",
    tagline: "Bilingual multi-vendor grocery marketplace",
    live: "https://www.cestoshop.com/",
    description:
      "Bilingual multi-vendor grocery marketplace with vendors, storefront, admin dashboard, vendor dashboard, Expo app, and a 322-endpoint API, including a wholesale/retail pricing system for approved business accounts.",
    highlights: [
      "Built a bilingual multi-vendor grocery marketplace with vendors, storefront, admin dashboard, vendor dashboard, Expo app, and a 322-endpoint API.",
      "Shipped a wholesale/retail pricing system for approved business accounts, with prices and order totals resolved server-side from the buyer's entitlement.",
      "Reduced product-listing latency from ~1.9s by implementing count query caching and viewer-scoped HTTP caching.",
    ],
    tech: [
      "React 19",
      "React Native",
      "Expo",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma",
    ],
    monogram: "CS",
  },
  {
    title: "Live Cricket Scorer",
    tagline: "Real-time cricket scoring platform",
    period: "Oct 2026 – Present",
    live: "https://cricket-scorer-by-rehman.online/",
    description:
      "Live, production cricket scoring app with real-time ball-by-ball updates, deployed on AWS EC2 behind a custom domain with HTTPS and a pull-model auto-deploy on every push to main.",
    highlights: [
      "Built a real-time scoring engine with Fastify, Socket.IO, and Drizzle ORM on PostgreSQL, serving live match state to connected clients.",
      "Deployed on AWS EC2 (Sydney) with Nginx, PostgreSQL 16, and a systemd service; auto-deploys on push to main with a 2-minute deploy timer.",
      "Ships a custom domain with Let's Encrypt HTTPS and a live health endpoint backed by a database check.",
    ],
    tech: [
      "Fastify",
      "Socket.IO",
      "Drizzle ORM",
      "PostgreSQL",
      "Node.js",
      "AWS EC2",
      "Nginx",
    ],
    monogram: "LC",
  },
  {
    title: "next-fastify-audit-skill",
    tagline: "Agent skill that audits Next.js + Fastify codebases",
    period: "Nov 2026",
    github: "https://github.com/mani901/next-fastify-audit-skill",
    description:
      "Open-source agent skill (Claude Code / Codex / Cursor) that audits a Next.js App Router + Fastify codebase for security, performance, and API-design issues — including LLM-integration risks — and only reports findings it can prove from the code.",
    highlights: [
      "Ships a zero-dependency Node scanner with 16 rules (security, LLM, performance, API design) that emits JSON findings with file:line evidence.",
      "Verified on an intentionally vulnerable fixture app: 23 findings (8 high, 12 medium, 3 low), all 16 rules firing, with zero false positives on the clean file.",
      "Includes a 5-step audit workflow with a mandatory verification step, checklists, and a Markdown report generator.",
    ],
    tech: ["Node.js", "Next.js", "Fastify", "Agent Skills", "MCP"],
    monogram: "AS",
  },
  {
    title: "Zewar House",
    tagline: "AI-Powered Full-Stack E-Commerce Platform",
    period: "Oct 2025 – May 2026",
    github: "https://github.com/mani901/virtual-jewelry-tryon-ecommerce",
    description:
      "Production-grade Pakistani jewellery e-commerce platform with 3 React/Node apps, 29 REST endpoints, and an AI Virtual Try-On microservice covering the complete retail lifecycle from catalogue to payment to delivery.",
    highlights: [
      "Built an AI Virtual Try-On system: a Python/FastAPI microservice uses MediaPipe FaceMesh (468 landmarks) and a trained RandomForest classifier to detect 6 face shapes and generate real-time jewellery overlays via OpenCV alpha blending, with personalised recommendations delivered per face shape.",
      "Architected a 3-app MERN platform (customer storefront, admin dashboard, AI server) with JWT multi-role auth, OTP email verification (Nodemailer + MongoDB 10-min TTL), and Cloudinary CDN for multi-image product management with automatic file cleanup.",
      "Implemented an end-to-end e-commerce flow: Stripe payments (PKR), cash on delivery, 5-stage order tracking, wishlist, star-rating reviews, and search/filter across 4 jewellery categories × 5 materials.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "FastAPI",
      "MediaPipe",
      "scikit-learn",
      "Stripe",
      "Cloudinary",
      "Tailwind CSS",
      "JWT",
      "Nodemailer",
    ],
    monogram: "ZH",
  },
  {
    title: "AI-Powered Smart Meter Reading System",
    tagline: "Computer-vision utility management platform",
    period: "Sep 2025 – May 2026",
    github: "https://github.com/mani901/AI-Powered-Meter-Reading-management.git",
    description:
      "End-to-end utility management platform that auto-extracts electricity meter readings from photographs using two fine-tuned YOLOv8 object detection models, served by a full TypeScript + React + PostgreSQL stack with dedicated dashboards for Admin, Field Staff, and Consumer roles.",
    highlights: [
      "Trained two YOLOv8 models on 11,000+ real-world meter images one for meter ROI cropping, one for digit recognition and engineered a 7-variant OpenCV preprocessing pipeline (CLAHE, bilateral filtering, gamma correction, unsharp masking, morphological ops) with automatic confidence-score selection for reliable extraction across varied lighting.",
      "Built a confidence-based hybrid AI + human review workflow: low-confidence predictions are automatically flagged for administrator approval before billing, balancing automation with accuracy in a zero-error-tolerance domain.",
      "Delivered a production-grade 3-tier architecture (React + Vite frontend, Express REST API with 12+ route groups, FastAPI AI inference server) with JWT auth, RBAC, an automated monthly billing engine, cron-scheduled jobs, dispute management, audit logging, and PDF/CSV export deployed on Vercel with Cloudinary CDN.",
    ],
    tech: [
      "TypeScript",
      "React.js",
      "Vite",
      "Express.js",
      "PostgreSQL",
      "Python",
      "FastAPI",
      "YOLOv8",
      "OpenCV",
      "JWT",
      "Cloudinary",
    ],
    monogram: "SM",
  },
  {
    title: "Multi-Role Job Portal",
    tagline: "Role-based job board for employers & candidates",
    period: "Aug 2025 – Sep 2025",
    github: "https://github.com/mani901/Mern-JobPortal.git",
    description:
      "Full-featured job portal with role-based JWT authentication, job posting, filtering, and application tracking for employers and candidates.",
    highlights: [
      "Designed MongoDB schemas and centralised error handling with a Winston logger; deployed the backend on AWS EC2.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Winston", "AWS EC2"],
    monogram: "JP",
  },
  {
    title: "fastify-compress — Open-Source Contribution",
    tagline: "Upstream fix in the Fastify ecosystem",
    period: "Nov 2026",
    github: "https://github.com/fastify/fastify-compress/pull/443",
    description:
      "Real upstream contribution to fastify-compress: per-route compression options now fall back to the global options instead of silently ignoring them (fixes #340). Reviewed as “Ready to merge”.",
    highlights: [
      "Fixed per-route options fallback to global options in fastify-compress (fixes #340), with 8 new regression tests.",
      "Full test suite green: 294 tests passing, lint clean; CI passed on the pull request.",
    ],
    tech: ["Node.js", "Fastify", "JavaScript", "Open Source"],
    monogram: "FC",
  },
];

export const education = {
  degree: "Bachelor of Science in Software Engineering",
  institution: "University of Lahore",
  period: "Jan 2022 – Jun 2026",
  cgpa: "3.92 / 4.0",
} as const;

/** Anchor links rendered in the navbar (in order). */
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
