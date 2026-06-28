"use client";

import { useEffect, useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { navLinks, profile } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initials for the brand mark
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-bold tracking-tight text-foreground"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-sm font-bold text-white">
            {initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className={cn(buttonVariants({ size: "sm" }), "ml-2")}
          >
            <FileDown /> Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground hover:bg-accent-soft md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-muted hover:bg-accent-soft hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: "sm" }), "mt-2")}
            >
              <FileDown /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
