import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { profile, stats } from "@/data/portfolio";

export function About() {
  return (
    <Section id="about" title="About Me" eyebrow="Who I Am">
      <div className="grid items-center gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
              >
                <p className="text-3xl font-extrabold text-accent">{s.value}</p>
                <p className="mt-1 text-xs font-medium text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
