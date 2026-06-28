import { Briefcase, MapPin } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" title="Professional Experience" eyebrow="Where I've Worked">
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical timeline rail */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-border sm:left-4" />

        <div className="space-y-10">
          {experience.map((job, i) => (
            <Reveal key={`${job.role}-${job.period}`} delay={i * 0.08}>
              <div className="relative pl-10 sm:pl-14">
                {/* Node */}
                <span className="absolute left-0 top-1 grid h-7 w-7 place-items-center rounded-full border border-accent/30 bg-accent-soft text-accent sm:h-9 sm:w-9">
                  <Briefcase size={15} />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-bold text-accent">{job.role}</h3>
                  <span className="text-sm font-medium text-muted-2">{job.period}</span>
                </div>

                <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-muted">
                  <span className="font-semibold text-foreground">{job.company}</span>
                  <span className="inline-flex items-center gap-1 text-muted-2">
                    <MapPin size={13} /> {job.location}
                  </span>
                </div>

                <ul className="mt-3 space-y-2">
                  {job.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
