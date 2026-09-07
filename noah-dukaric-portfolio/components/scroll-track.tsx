"use client"

import { useEffect, useRef, useState } from "react"

// A fixed, full-viewport race circuit that "draws in" as the visitor scrolls,
// with a glowing car marker travelling along the racing line. Purely ambient:
// it sits behind all content and never intercepts pointer events.
const TRACK_D =
  "M 150 -40 C 60 60, 260 150, 150 250 C 40 350, 250 430, 150 540 C 60 630, 250 720, 150 830 C 70 930, 210 1000, 150 1080"

export function ScrollTrack() {
  const pathRef = useRef<SVGPathElement>(null)
  const [len, setLen] = useState(0)
  const [progress, setProgress] = useState(0)
  const [car, setCar] = useState({ x: 150, y: -40, angle: 0 })

  useEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength())
  }, [])

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
        setProgress(p)
        const path = pathRef.current
        if (path && len > 0) {
          const pt = path.getPointAtLength(p * len)
          const ahead = path.getPointAtLength(Math.min(len, p * len + 1))
          const angle = (Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180) / Math.PI
          setCar({ x: pt.x, y: pt.y, angle })
        }
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [len])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 300 1040"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Full circuit, faint */}
        <path
          d={TRACK_D}
          stroke="var(--muted-foreground)"
          strokeOpacity="0.12"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Revealed racing line, brightens as you scroll */}
        {len > 0 && (
          <path
            ref={pathRef}
            d={TRACK_D}
            stroke="var(--primary)"
            strokeOpacity="0.55"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={len}
            strokeDashoffset={len * (1 - progress)}
            style={{ filter: "drop-shadow(0 0 6px var(--primary))" }}
          />
        )}
        {/* Hidden measuring path when length not yet known */}
        {len === 0 && <path ref={pathRef} d={TRACK_D} strokeWidth="2.5" />}

        {/* Car marker */}
        <g transform={`translate(${car.x} ${car.y}) rotate(${car.angle})`}>
          <circle r="12" fill="var(--primary)" opacity="0.18" />
          <rect
            x="-6"
            y="-3.5"
            width="12"
            height="7"
            rx="2"
            fill="var(--primary)"
            style={{ filter: "drop-shadow(0 0 8px var(--primary))" }}
          />
          <rect x="1" y="-2" width="3.5" height="4" rx="1" fill="var(--accent)" />
        </g>
      </svg>
    </div>
  )
}
