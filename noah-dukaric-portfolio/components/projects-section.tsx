import { Plane, Ruler, Waypoints, ImageIcon } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { projects, type Project } from "@/lib/data"

const disciplineIcon: Record<Project["discipline"], typeof Plane> = {
  aerospace: Plane,
  motorsport: Waypoints,
  geomatics: Ruler,
}

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading index="SEC-03" eyebrow="Payloads" title="Projects" />

      <div className="grid gap-4">
        {projects.map((project) => {
          const Icon = disciplineIcon[project.discipline]
          return (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div aria-hidden="true" className="absolute inset-0 bg-grid-fine opacity-30" />

              {/* Project image / placeholder */}
              <div className="relative aspect-[16/7] w-full overflow-hidden border-b border-border bg-background/40">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} — project photo`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-grid-fine text-muted-foreground">
                    <ImageIcon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
                      Photo slot — awaiting upload
                    </span>
                    <span className="font-mono text-[10px] tracking-wide text-muted-foreground/70">
                      /public/projects/{project.id}.jpg
                    </span>
                  </div>
                )}
                <span className="absolute left-3 top-3 rounded-sm border border-border bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
                  {project.index}
                </span>
              </div>

              <div className="relative grid gap-6 p-6 lg:grid-cols-[1fr_260px] lg:p-8">
                {/* Main */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-medium tracking-widest text-primary">
                      {project.index}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      <Icon className="h-3 w-3 text-accent" aria-hidden="true" />
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-balance text-foreground sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-muted-foreground">
                    {project.org} · {project.date}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {project.points.map((point, idx) => (
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

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-sm bg-secondary px-2.5 py-1 font-mono text-[11px] tracking-wide text-secondary-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Telemetry readout */}
                <div className="flex flex-col justify-center gap-px rounded-sm border border-border bg-background/40">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between border-b border-border px-4 py-3 last:border-b-0"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        {metric.label}
                      </span>
                      <span className="font-mono text-sm font-medium text-foreground">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
