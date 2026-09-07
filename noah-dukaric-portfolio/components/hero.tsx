import { MapPin, Plane, Flag, Ruler } from "lucide-react"
import { profile } from "@/lib/data"
import { AnimatedName } from "@/components/animated-name"

const disciplines = [
  { icon: Ruler, label: "Geomatics" },
  { icon: Plane, label: "Aerospace" },
  { icon: Flag, label: "Motorsport" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Terrain backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(/hero-terrain.png)" }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background"
      />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6">
        {/* Telemetry strip */}
        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {profile.coords}
          </span>
          <span className="hidden sm:inline">CALLSIGN {profile.callsign}</span>
        </div>

        <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">
          {profile.title} · {profile.subtitle}
        </p>

        <AnimatedName name={profile.name} />

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-sm bg-primary px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Establish Contact
          </a>
        </div>

        {/* Discipline gauges */}
        <div className="mt-14 grid max-w-xl grid-cols-3 gap-3">
          {disciplines.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-sm border border-border bg-card/60 px-3 py-3 backdrop-blur-sm"
            >
              <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
