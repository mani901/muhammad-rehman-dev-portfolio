import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const onBackToTop = (e) => {
    e.preventDefault();
    // Use window scroll for consistent behavior across browsers
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      className="border-t border-slate-900/80"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">
          © 2025 Muhammad Rehman. All rights reserved.
        </p>
        <motion.a
          href="#top"
          onClick={onBackToTop}
          className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/60 px-3 py-2 text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/70"
          aria-label="Back to top"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5 15 7-7 7 7"
            />
          </svg>
          Back to top
        </motion.a>
      </div>
    </motion.footer>
  );
}
