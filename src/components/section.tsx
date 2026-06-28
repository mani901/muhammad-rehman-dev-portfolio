import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/**
 * Consistent section wrapper: anchor id, padded container, and a centered
 * heading with a short blue underline rule (echoes the resume's HR lines).
 */
export function Section({
  id,
  title,
  eyebrow,
  children,
  className,
  alt = false,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  /** Use the tinted surface background for visual alternation. */
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-16 sm:py-20",
        alt && "bg-surface",
        className
      )}
    >
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-6">
        <Reveal className="mb-10 text-center">
          {eyebrow && (
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-accent" />
        </Reveal>
        {children}
      </div>
    </section>
  );
}
