import { Cpu, Ruler, ArrowUpRight } from "lucide-react"
import { LinkedinIcon } from "@/components/linkedin-icon"
import { SectionHeading } from "@/components/section-heading"
import { software, equipment, profile } from "@/lib/data"

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-y border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading index="SEC-04" eyebrow="Instrumentation" title="Systems & Network" />

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Software + equipment */}
          <div className="rounded-sm border border-border bg-card p-6">
            <div className="flex items-center gap-2.5">
              <Cpu className="h-5 w-5 text-primary" aria-hidden="true" />
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Software
              </h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {software.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-border bg-background/50 px-3 py-1.5 font-mono text-xs tracking-wide text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2.5">
              <Ruler className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Equipment
              </h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {equipment.map((item) => (
                <span
                  key={item}
                  className="rounded-sm border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-xs tracking-wide text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Network / LinkedIn */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between overflow-hidden rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <div aria-hidden="true" className="absolute inset-0 bg-grid-fine opacity-30" />
            <div className="relative flex items-center gap-2.5">
              <LinkedinIcon className="h-5 w-5 text-primary" />
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Network Uplink
              </h3>
            </div>
            <div className="relative mt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Connect on
              </p>
              <p className="mt-2 flex items-center gap-2 text-2xl font-semibold text-foreground sm:text-3xl">
                LinkedIn
                <ArrowUpRight
                  className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </p>
              <p className="mt-4 break-all font-mono text-xs text-muted-foreground">
                {profile.linkedin.replace(/^https?:\/\//, "")}
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
