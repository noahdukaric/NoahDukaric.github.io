import { GraduationCap, Radio, MapPin, Compass } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { education, profile } from "@/lib/data"

const readouts = [
  { label: "Location", value: profile.location, icon: MapPin },
  { label: "Coordinates", value: profile.coords, icon: Compass },
  { label: "Status", value: profile.status, icon: Radio },
]

export function ProfileSection() {
  return (
    <section id="profile" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading index="SEC-01" eyebrow="Flight Record" title="Profile & Education" />

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Education card */}
        <div className="relative overflow-hidden rounded-sm border border-border bg-card p-6 lg:col-span-2">
          <div aria-hidden="true" className="absolute inset-0 bg-grid-fine opacity-40" />
          <div className="relative">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Active Program
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-foreground">{education.school}</h3>
            <p className="mt-1 font-mono text-sm text-accent">{education.faculty}</p>

            <div className="mt-6 space-y-3 border-t border-border pt-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-foreground">{education.degree}</span>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-muted-foreground">{education.minor}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {education.span}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Status readouts */}
        <div className="flex flex-col gap-4">
          {readouts.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-1 flex-col justify-center rounded-sm border border-border bg-card p-5"
            >
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                {label}
              </div>
              <p className="mt-2 font-mono text-sm text-foreground">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
