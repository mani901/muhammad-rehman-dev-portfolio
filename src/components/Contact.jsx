import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-900/80"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2
          id="contact-title"
          className="font-mono text-2xl sm:text-3xl text-white"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let’s build something
        </motion.h2>
        <motion.p
          className="mt-2 text-slate-400"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Reach out via email or the form below. I’ll get back to you within
          24–48 hours.
        </motion.p>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          {/* Direct links */}
          <div className="space-y-4">
            <a
              href="mailto:abrehman8491@gmail.com"
              className="group flex items-center gap-3 text-slate-300 hover:text-white"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 border border-slate-800">
                <svg
                  className="h-5 w-5 text-teal-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16v12H4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4 7 8 6 8-6"
                  />
                </svg>
              </span>
              abrehman8491@gmail.com
            </a>
            <a
              href="tel:+923074570787"
              className="group flex items-center gap-3 text-slate-300 hover:text-white"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 border border-slate-800">
                <svg
                  className="h-5 w-5 text-teal-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5.5C3 4.67 3.67 4 4.5 4h2c.35 0 .68.18.88.47l1.6 2.4a1 1 0 0 1-.23 1.37l-1.05.79c-.24.18-.33.5-.22.78a10.5 10.5 0 0 0 5.01 5.01c.28.11.6.02.78-.22l.79-1.05a1 1 0 0 1 1.37-.23l2.4 1.6c.29.2.47.53.47.88v2c0 .83-.67 1.5-1.5 1.5H17C9.82 20 4 14.18 4 7v-.5z"
                  />
                </svg>
              </span>
              +92 307 457 0787
            </a>
            <a
              href="https://github.com/mani901"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-slate-300 hover:text-white"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 border border-slate-800">
                <svg
                  className="h-5 w-5 text-slate-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.7-1.29-3.7-1.29-.5-1.29-1.22-1.64-1.22-1.64-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.2.91.1-.71.38-1.19.69-1.46-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.43.11-2.98 0 0 .92-.29 3.02 1.13.88-.24 1.83-.36 2.77-.36.94 0 1.89.12 2.77.36 2.1-1.42 3.02-1.13 3.02-1.13.6 1.55.22 2.7.11 2.98.7.77 1.13 1.75 1.13 2.95 0 4.23-2.56 5.15-5 5.43.39.34.73 1.01.73 2.04 0 1.47-.01 2.66-.01 3.02 0 .29.19.64.76.53A10.52 10.52 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
                </svg>
              </span>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-rehman-022b42305"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-slate-300 hover:text-white"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 border border-slate-800">
                <svg
                  className="h-5 w-5 text-sky-400"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM3 9.75h3.96V21H3zM14.71 9.5c-2.06 0-2.99 1.13-3.51 1.92h-.07V9.75H7.29V21h3.97v-5.7c0-1.5.28-2.96 2.15-2.96 1.85 0 1.88 1.7 1.88 3.05V21h3.97v-6.3c0-3.02-.65-5.2-4.55-5.2z" />
                </svg>
              </span>
              LinkedIn
            </a>
          </div>

          {/* Form (static action placeholder preserved) */}
          <motion.form
            action="#"
            method="post"
            className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="message" className="block text-sm text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="mt-5">
              <motion.button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-400 to-cyan-400 px-5 py-2.5 text-slate-900 font-medium shadow-glow hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
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
                    d="m4 8 8 4-8 4V8zm8 4 8-4v8l-8-4z"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
