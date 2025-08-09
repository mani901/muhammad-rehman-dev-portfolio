import React from "react";
import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Final-year Software Engineering Student",
    period: "2022 — Present",
    location: "University of Lahore, PK",
    bullets: [
      "Focused on Web Development, Database Systems, and Software Engineering.",
      "Built MERN projects with secure JWT auth and clean, modular code.",
      "Collaborated using Git/GitHub and documented APIs with Postman.",
    ],
  },
  {
    role: "Projects & Open Source",
    period: "Ongoing",
    location: "Lahore, PK",
    bullets: [
      "AI Blog Generator: Integrated Gemini API, JWT auth, and responsive UI.",
      "Job Portal: Role-based dashboards, listings, filtering, and tracking.",
      "Practiced clean code, OOP, and reusable components in React.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-slate-900/80"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          id="experience-title"
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Experience
        </motion.h2>
        <ol className="mt-8 relative ms-4 border-s border-slate-800/80">
          {EXPERIENCE.map((exp, idx) => (
            <motion.li
              key={exp.role}
              className="relative pb-10 ps-6 last:pb-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
            >
              <span className="absolute -left-2 top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 ring-2 ring-slate-950"></span>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-mono text-lg text-white">{exp.role}</h3>
                  <span className="text-xs rounded-full border border-slate-700 bg-slate-900/60 px-2 py-0.5 text-slate-300">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-slate-400 text-sm">{exp.location}</p>
                <ul className="mt-3 list-disc ps-5 text-slate-300/90 text-sm leading-relaxed">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
