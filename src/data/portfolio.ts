/**
 * Single source of truth for all portfolio content.
 * Edit text here — components read from these typed objects.
 * Content mirrors resume_v3.py.
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
    "I build production-grade web applications end-to-end — from MongoDB schema design to CI/CD deployment — with the MERN stack.",
  summary:
    "Full-stack developer with 1 year of professional experience building production-grade web applications using the MERN stack. Strong expertise in React.js, Next.js, Node.js, MongoDB, and CI/CD automation using GitHub Actions. Proven ability to reduce production errors by 35%, cut deployment time by 50%, and deliver secure, scalable applications from schema design to deployment.",
} as const;

export const stats = [
  { value: "1 yr", label: "Professional experience" },
  { value: "35%", label: "Fewer production errors" },
  { value: "50%", label: "Faster deployments" },
  { value: "3.93", label: "CGPA / 4.0" },
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
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Databases & ORMs",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose", "Prisma"],
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
      "Vercel",
      "Render",
      "AWS EC2",
      "Postman",
      "Swagger",
    ],
  },
  {
    category: "AI & Computer Vision",
    items: [
      "Python",
      "YOLOv8 (Ultralytics)",
      "OpenCV",
      "FastAPI",
      "Uvicorn",
      "OpenAI API",
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
      "Refactored and modularized legacy frontend and backend codebases, reducing production errors by 35% and improving maintainability.",
      "Implemented end-to-end CI/CD pipelines using GitHub Actions, cutting manual deployment effort by 50%.",
      "Built data-driven dashboards and personalized backend workflows in collaboration with design and analytics teams.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "GitHub Actions", "Tailwind CSS"],
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
  period: string;
  github: string;
  description: string;
  highlights: string[];
  tech: string[];
  /** Two-letter monogram shown in the placeholder card header. */
  monogram: string;
};

export const projects: Project[] = [
  {
    title: "Zewar House",
    tagline: "AI-Powered Full-Stack E-Commerce Platform",
    period: "Oct 2025 – May 2026",
    github: "https://github.com/mani901/virtual-jewelry-tryon-ecommerce",
    description:
      "Production-grade Pakistani jewellery e-commerce platform with 3 React/Node apps, 29 REST endpoints, and an AI Virtual Try-On microservice covering the complete retail lifecycle from catalogue to payment to delivery.",
    highlights: [
      "Built an AI Virtual Try-On system: a Python/FastAPI microservice uses MediaPipe FaceMesh (468 landmarks) and a trained RandomForest classifier to detect 6 face shapes and generate real-time jewellery overlays via OpenCV alpha blending — personalised recommendations delivered per face shape.",
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
      "Trained two YOLOv8 models on 11,000+ real-world meter images — one for meter ROI cropping, one for digit recognition — and engineered a 7-variant OpenCV preprocessing pipeline (CLAHE, bilateral filtering, gamma correction, unsharp masking, morphological ops) with automatic confidence-score selection for reliable extraction across varied lighting.",
      "Built a confidence-based hybrid AI + human review workflow: low-confidence predictions are automatically flagged for administrator approval before billing, balancing automation with accuracy in a zero-error-tolerance domain.",
      "Delivered a production-grade 3-tier architecture (React + Vite frontend, Express REST API with 12+ route groups, FastAPI AI inference server) with JWT auth, RBAC, an automated monthly billing engine, cron-scheduled jobs, dispute management, audit logging, and PDF/CSV export — deployed on Vercel with Cloudinary CDN.",
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
];

export const education = {
  degree: "Bachelor of Science in Software Engineering",
  institution: "University of Lahore",
  period: "Expected Jun 2026",
  cgpa: "3.93 / 4.0",
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
