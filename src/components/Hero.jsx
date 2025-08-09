import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Hero section with React typewriter replacing the inline <script>
export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const text = "Hi, I’m M.REHMAN";
    if (prefersReduced.current) {
      setTypedText(text);
      return;
    }
    let i = 0;
    const timeouts = [];

    const startTyping = () => {
      const type = () => {
        if (i <= text.length) {
          setTypedText(text.slice(0, i));
          const delay = i < 6 ? 180 : 60; // keep first few chars a bit slower
          timeouts.push(
            window.setTimeout(() => {
              i += 1;
              type();
            }, delay)
          );
        } else {
          // finished typing → small pause → clear → small pause → retype
          timeouts.push(
            window.setTimeout(() => {
              setTypedText("");
              i = 0;
              timeouts.push(window.setTimeout(type, 700));
            }, 1000)
          );
        }
      };
      type();
    };

    // small initial delay for a smoother entrance
    timeouts.push(window.setTimeout(startTyping, 300));

    return () => {
      timeouts.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  const onAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              className="text-sm text-teal-300/80 font-mono tracking-widest"
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Final-year SWE • MERN Stack Developer
            </motion.p>
            <motion.h1
              id="hero-title"
              className="mt-3 font-mono text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <span className="align-middle">{typedText}</span>
              {/* Framer Motion caret replacing CSS animate-caret */}
              <motion.span
                aria-hidden="true"
                className="align-middle ml-1 inline-block text-teal-400"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                |
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-5 max-w-2xl text-slate-300/90 leading-relaxed"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            >
              Final-year Software Engineering student passionate about
              full‑stack development and scalable web systems. Skilled in
              building responsive MERN applications with secure APIs and clean
              architecture. Strong command of React, Node.js, MongoDB, Git, and
              collaborative workflows.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            >
              <motion.a
                href="#projects"
                onClick={onAnchorClick}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-400 to-cyan-400 px-5 py-3 text-slate-900 font-medium shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See Projects
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7l7 7-7 7"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={onAnchorClick}
                className="inline-flex items-center gap-2 rounded-md border border-slate-700/70 bg-slate-900/60 px-5 py-3 text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8v13H3V3h13m5 0l-8 8"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            {/* Accent card / visual */}
            <motion.div
              className="relative mx-auto max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-transparent blur-2xl"></div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-400 to-cyan-400 text-slate-900 font-bold">
                  MR
                </div>
                <div>
                  <h2 className="font-mono text-xl text-white">
                    Final-year SWE • MERN Developer
                  </h2>
                  <p className="mt-1 text-sm text-slate-400">
                    Clean code, secure APIs, responsive UI.
                  </p>
                </div>
              </div>
              <dl className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                  { dt: "Graduation", dd: "Jan 2026" },
                  { dt: "Projects", dd: "2+" },
                  { dt: "Location", dd: "Lahore" },
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.dt}
                    className="rounded-lg border border-slate-800 bg-slate-950/40 p-3"
                    initial={{ y: 8, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.1 * idx,
                    }}
                  >
                    <dt className="text-xs text-slate-400">{stat.dt}</dt>
                    <dd className="mt-1 font-mono text-lg text-teal-300">
                      {stat.dd}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
