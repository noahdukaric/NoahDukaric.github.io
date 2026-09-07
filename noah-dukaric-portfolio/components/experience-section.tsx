import { Plane, Flag, Ruler, Radio } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { experience, type Experience } from "@/lib/data"

const disciplineMeta: Record<
  Experience["discipline"],
  { icon: typeof Plane; label: string }
> = {
  aerospace: { icon: Plane, label: "AERO" },
  motorsport: { icon: Flag, label: "MOTOR" },
  geomatics: { icon: Ruler, label: "GEO" },
  field: { icon: Radio, label: "FIELD" },
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-y border-border bg-card/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading index="SEC-02" eyebrow="Mission Log" title="Experience" />

        <ol className="relative space-y-0">
          {experience.map((item, i) => {
            const meta = disciplineMeta[item.discipline]
            const Icon = meta.icon
            return (
              <li
                key={item.id}
                className="group relative grid gap-4 border-b border-border py-8 last:border-b-0 md:grid-cols-[220px_1fr]"
              >
                {/* Left: timestamp + discipline */}
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {item.span}
                  </span>
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-sm border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                    <Icon className="h-3 w-3" aria-hidden="true" />
                    {meta.label}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground/70">
                    {String(i + 1).padStart(2, "0")} / {String(experience.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Right: role + points */}
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-accent">
                    {item.org} · {item.location}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {item.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-px w-4 shrink-0 bg-primary/60"
                        />
                        <span className="text-pretty">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
