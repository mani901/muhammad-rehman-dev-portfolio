import { GithubIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects" eyebrow="What I've Built" alt>
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <Card className="overflow-hidden hover:-translate-y-1 hover:shadow-md">
              <div className="grid md:grid-cols-[200px_1fr]">
                {/* Placeholder monogram header (swap for a screenshot later) */}
                <div className="relative hidden items-center justify-center bg-linear-to-br from-accent to-accent-strong p-6 md:flex">
                  <span className="text-5xl font-extrabold tracking-tight text-white/90">
                    {p.monogram}
                  </span>
                </div>

                <CardContent className="p-5 pt-5 sm:p-6 sm:pt-6">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                      <p className="text-sm font-medium text-accent">{p.tagline}</p>
                    </div>
                    <span className="shrink-0 text-sm text-muted-2">{p.period}</span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {p.description}
                  </p>

                  <ul className="mt-3 space-y-2">
                    {p.highlights.map((h, hi) => (
                      <li key={hi} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
                  >
                    <GithubIcon size={16} /> View on GitHub
                  </a>
                </CardContent>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
