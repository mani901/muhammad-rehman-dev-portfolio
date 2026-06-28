import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills" eyebrow="What I Use" alt>
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="h-full rounded-xl border border-border bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md sm:p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
