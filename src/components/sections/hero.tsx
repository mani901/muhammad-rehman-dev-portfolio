"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/portfolio";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* Subtle decorative background: soft blue radial glow + faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(31,78,140,0.08), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 mask-[radial-gradient(60%_60%_at_50%_30%,black,transparent)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="order-2 lg:order-1"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 text-sm font-medium text-muted shadow-sm"
        >
          <MapPin size={14} className="text-accent" />
          {profile.location} · Available for opportunities
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-3 text-xl font-semibold text-accent sm:text-2xl"
        >
          {profile.title}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className={cn(buttonVariants())}>
            View My Work <ArrowRight />
          </a>
          <a
            href={profile.resume}
            download
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <FileDown /> Download Resume
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-5">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-muted transition-colors hover:text-accent"
          >
            <Mail size={22} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"
          >
            <GithubIcon size={22} />
          </a>
        </motion.div>
      </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative w-full max-w-60 sm:max-w-76 lg:max-w-88">
            {/* Soft glow behind the circular frame */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 rounded-full bg-accent/15 blur-2xl"
            />
            {/* Circular framed portrait */}
            <div className="relative aspect-square overflow-hidden rounded-full bg-linear-to-br from-accent-soft via-white to-accent/10 shadow-xl ring-1 ring-accent/15">
              <Image
                src="/portfolio.png"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 22rem"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
