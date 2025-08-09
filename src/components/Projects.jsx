import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";

// Project cards mapped from an array instead of hardcoding
const PROJECTS = [
  {
    title: "AI‑Powered Blog Generator",
    description:
      "MERN app with Gemini API integration for automated blog creation, JWT auth, and mobile‑friendly UI.",
    image: project1,
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    live: "https://ai-blog-app-two.vercel.app/",
    repo: "https://github.com/mani901/Ai-Blog-App",
  },
  {
    title: "Multi‑Role Job Portal",
    description:
      "MERN job portal with role‑based dashboards, JWT secured logins, postings, filtering, and application tracking.",
    image: project2,
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    live: "#",
    repo: "https://github.com/mani901/Mern-JobPortal",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-slate-900/80"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          id="projects-title"
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Selected Projects
        </motion.h2>
        <motion.p
          className="mt-2 text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          A few things I’ve built recently.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 hover:border-teal-500/40 hover:shadow-glow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-mono text-xl text-white">{p.title}</h3>
                <p className="mt-2 text-slate-400 text-sm">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded border border-slate-700 px-2 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-3">
                  <motion.a
                    href={p.live}
                    className="inline-flex items-center gap-1 rounded-md border border-teal-400/40 bg-teal-400/10 px-3 py-1.5 text-sm text-teal-300"
                    aria-label="Live demo"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 3h7v7M10 14 21 3M5 21 19 7"
                      />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={p.repo}
                    className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-300"
                    aria-label="GitHub repo"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    GitHub
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.7-1.29-3.7-1.29-.5-1.29-1.22-1.64-1.22-1.64-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.43.11-2.98 0 0 .92-.29 3.02 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.89.12 2.77.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.55.22 2.7.11 2.98.7.77 1.13 1.75 1.13 2.95 0 4.23-2.56 5.15-5 5.43.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.19.64.76.53A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
