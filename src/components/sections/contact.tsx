import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/portfolio";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
    external: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/mani901",
    href: profile.github,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    external: false,
  },
];

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch" eyebrow="Let's Connect" alt>
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-base leading-relaxed text-muted">
          I&apos;m open to full-stack roles and freelance projects. The fastest way to
          reach me is by email — I&apos;ll get back to you promptly.
        </p>
      </Reveal>

      <div className="mx-auto mt-8 grid max-w-2xl gap-4 sm:grid-cols-2">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.06}>
            <a
              href={c.href}
              {...(c.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-center gap-4 rounded-xl border border-border bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-md"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                <c.icon size={20} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-wide text-muted-2">
                  {c.label}
                </span>
                <span className="block truncate text-sm font-semibold text-foreground">
                  {c.value}
                </span>
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
