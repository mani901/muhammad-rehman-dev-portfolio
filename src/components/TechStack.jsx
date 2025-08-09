import React from "react";
import { motion } from "framer-motion";

// Tech stack cards mapped from data array
const TECH = [
  {
    label: "MongoDB",
    svg: (
      <svg
        role="img"
        aria-label="MongoDB"
        className="h-8 w-8 text-green-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.6.3s.3 1.7 1.4 3c1.6 1.8 3.9 3.7 4.3 6.9.5 3.9-2.1 7.3-5.2 9.2-.2.1-.7.2-.9.4-.1.1 0 .4 0 .6-.1 1.3-.2 2.6-.2 2.6h-.5s-.1-1.2-.2-2.6c0-.2.1-.5 0-.6-.2-.1-.6-.3-.8-.4C6.4 17.9 3.8 14.5 4.3 10.6 4.7 7.4 6.9 5.5 8.6 3.7 9.7 2.4 10 0.3 10 0.3s.8 0 1.6 0z" />
      </svg>
    ),
  },
  {
    label: "Express",
    svg: (
      <svg
        role="img"
        aria-label="Express.js"
        className="h-8 w-8 text-slate-300"
        viewBox="0 0 128 128"
        fill="currentColor"
      >
        <path d="M9.8 88.7c7.4 0 12-3.7 14.5-9.8l7.5 4.5c-3.7 8.1-11.5 12.9-22 12.9C-1 96.3-9.2 86.7-9.2 72.8c0-13.8 8.2-23.5 19-23.5 11.7 0 19.2 9.5 19.2 24.2v2.6H.6c.6 8 4.9 12.6 9.2 12.6zM.5 66h19.1c-.6-7-4.2-11.6-9.4-11.6-5.3 0-8.9 4.6-9.7 11.6zM82.5 95.8 63.6 72.8 82.4 49.8h9.9L74.6 72.8l17.8 23zM106.7 95.8 87.8 72.8 106.6 49.8h9.9L98.8 72.8l17.8 23z" />
      </svg>
    ),
  },
  {
    label: "React",
    svg: (
      <svg
        role="img"
        aria-label="React"
        className="h-8 w-8 text-cyan-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <g>
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            transform="rotate(-60 12 12)"
          />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" />
        </g>
      </svg>
    ),
  },
  {
    label: "Node.js",
    svg: (
      <svg
        role="img"
        aria-label="Node.js"
        className="h-8 w-8 text-green-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M11.998.3 1.7 6.24v11.53l10.298 5.94 10.302-5.94V6.24zm0 2.31 8.095 4.66v9.32l-8.095 4.66-8.091-4.66V7.27z" />
        <path d="M12.01 17.63c2.67 0 4.352-1.176 4.352-3.153 0-1.493-1.056-2.4-3.352-2.916l-1.32-.3c-1.278-.288-1.8-.66-1.8-1.32 0-.78.732-1.26 1.968-1.26 1.2 0 1.968.48 2.088 1.44h2.172c-.132-2.016-1.62-3.132-4.2-3.132-2.52 0-4.212 1.14-4.212 3.036 0 1.56 1.188 2.46 3.468 2.964l1.404.312c1.2.264 1.8.66 1.8 1.368 0 .84-.816 1.356-2.136 1.356-1.32 0-2.208-.504-2.364-1.68H7.44c.192 2.16 1.824 3.288 4.572 3.288z" />
      </svg>
    ),
  },
  {
    label: "Tailwind",
    svg: (
      <svg
        role="img"
        aria-label="Tailwind CSS"
        className="h-8 w-8 text-cyan-400"
        viewBox="0 0 48 28"
        fill="currentColor"
      >
        <path d="M24 0C17.333 0 13.333 3.333 12 10c2.667-3.333 5.333-4.667 8-4 1.778.444 3.056 1.778 3.833 4 .889 2.667 3.111 4 6.667 4C36.167 14 40.167 10.667 41.5 4c-2.667 3.333-5.333 4.667-8 4-1.778-.444-3.056-1.778-3.833-4C28.777 1.333 26.555 0 23 0zM8 14C1.333 14-2.667 17.333-4 24c2.667-3.333 5.333-4.667 8-4 1.778.444 3.056 1.778 3.833 4C8.722 26.667 10.944 28 14.5 28 20.167 28 24.167 24.667 25.5 18c-2.667 3.333-5.333 4.667-8 4-1.778-.444-3.056-1.778-3.833-4C12.778 15.333 10.556 14 7 14z" />
      </svg>
    ),
  },
  {
    label: "Git",
    svg: (
      <svg
        role="img"
        aria-label="Git"
        className="h-8 w-8 text-orange-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="m23.546 10.94-10.485-10.48a1.555 1.555 0 0 0-2.2 0l-2.196 2.195 2.78 2.78c.425-.144.91-.047 1.248.29.34.34.435.83.287 1.253l2.677 2.676a1.26 1.26 0 0 1 1.255 2.08 1.26 1.26 0 0 1-2.08-1.255L12.243 8.02v4.186a1.26 1.26 0 0 1 .33 2.055 1.26 1.26 0 0 1-2.07-1.455 1.26 1.26 0 0 1 .26-.4V8.2a1.261 1.261 0 0 1-.69-1.11c0-.15.03-.297.084-.43L7.208 3.88.454 10.635a1.555 1.555 0 0 0 0 2.198l10.486 10.486a1.555 1.555 0 0 0 2.2 0l10.406-10.405a1.556 1.556 0 0 0 0-2.198z" />
      </svg>
    ),
  },
  {
    label: "Docker",
    svg: (
      <svg
        role="img"
        aria-label="Docker"
        className="h-8 w-8 text-sky-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13.983 11.258h2.258V8.99h-2.258zm0-3.258h2.258V5.732h-2.258zM11.097 11.258h2.258V8.99h-2.258zm0-3.258h2.258V5.732h-2.258zM8.21 11.258h2.258V8.99H8.21zm0-3.258h2.258V5.732H8.21zM5.323 11.258h2.258V8.99H5.323zM5.323 8h2.258V5.742H5.323zM2.437 11.258h2.258V8.99H2.437zm17.456-1.5c-.58 0-1.089.191-1.489.523-.49-.34-1.192-.523-2.039-.523H.75c-.41 1.62.198 3.725 1.281 5.045C3.045 16.95 4.82 18 7.61 18c5.88 0 9.85-2.577 11.96-6.35 1.139.042 2.268-.5 2.83-1.5-.63-.58-1.69-.392-2.507-.392z" />
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 border-t border-slate-900/80"
      aria-labelledby="stack-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          id="stack-title"
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Technical Skills
        </motion.h2>
        <motion.p
          className="mt-2 text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Backend: Node.js, Express.js, REST APIs, JWT • Database: MongoDB, SQL
          (basic), Mongoose • Frontend: React, Redux Toolkit, Tailwind,
          Bootstrap • Tools: Git/GitHub, Postman, Cloudinary, Vercel
        </motion.p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {TECH.map((t, idx) => (
            <motion.div
              key={t.label}
              className="group rounded-xl border border-slate-800 bg-slate-900/60 p-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
              whileHover={{
                scale: 1.02,
                boxShadow:
                  "0 0 0 2px rgb(45 212 191 / 20%), 0 0 30px -10px rgb(34 211 238 / 40%)",
              }}
            >
              <div className="flex items-center gap-3">
                {t.svg}
                <span className="font-mono text-sm text-slate-200">
                  {t.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
