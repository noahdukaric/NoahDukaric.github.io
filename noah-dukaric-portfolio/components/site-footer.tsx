import { Mail, Phone, MapPin, Crosshair } from "lucide-react"
import { LinkedinIcon } from "@/components/linkedin-icon"
import { profile } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Establish Contact
        </span>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s put precision to work.
        </h2>
        <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Open to co-op and internship opportunities in geomatics, aerospace, and
          mechanical engineering. Reach out through any channel below.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-3 rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/60"
          >
            <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="truncate font-mono text-xs text-foreground group-hover:text-primary">
              {profile.email}
            </span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/60"
          >
            <LinkedinIcon className="h-4 w-4 shrink-0 text-primary" />
            <span className="truncate font-mono text-xs text-foreground group-hover:text-primary">
              {profile.linkedin.replace(/^https?:\/\//, "")}
            </span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
            className="group flex items-center gap-3 rounded-sm border border-border bg-card p-4 transition-colors hover:border-primary/60"
          >
            <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span className="font-mono text-xs text-foreground group-hover:text-primary">
              {profile.phone}
            </span>
          </a>
          <div className="flex items-center gap-3 rounded-sm border border-border bg-card p-4">
            <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span className="font-mono text-xs text-foreground">{profile.location}</span>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <Crosshair className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="font-mono text-xs tracking-widest text-muted-foreground">
              {profile.name.toUpperCase()} · {profile.callsign}
            </span>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground/70">
            {profile.coords} · EST 2024
          </span>
        </div>
      </div>
    </footer>
  )
}
