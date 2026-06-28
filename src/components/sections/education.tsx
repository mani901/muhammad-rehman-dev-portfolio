import { GraduationCap } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="education" title="Education" eyebrow="My Background">
      <Reveal className="mx-auto max-w-2xl">
        <div className="flex items-start gap-4 rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
            <GraduationCap size={24} />
          </span>
          <div className="flex-1">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-bold text-foreground">{education.degree}</h3>
              <span className="text-sm text-muted-2">{education.period}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-accent">
              {education.institution}
            </p>
            <p className="mt-2 text-sm text-muted">
              CGPA:{" "}
              <span className="font-semibold text-foreground">{education.cgpa}</span>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
