"use client"

import { useEffect, useRef, useState } from "react"

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#%*<>".split("")
const STAGGER = 3 // frames before each successive letter starts resolving
const SCRAMBLE = 8 // frames a letter scrambles before locking

// Spells the name out left-to-right with a "decode" scramble: each glyph
// flickers through random characters, then locks into place.
export function AnimatedName({ name }: { name: string }) {
  const chars = name.split("")
  const [display, setDisplay] = useState<string[]>(() => chars.map((c) => (c === " " ? " " : "")))
  const frameRef = useRef(0)

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) {
      setDisplay(chars)
      return
    }

    const id = setInterval(() => {
      const frame = (frameRef.current += 1)
      const next = chars.map((c, i) => {
        if (c === " ") return " "
        const start = i * STAGGER
        if (frame < start) return ""
        if (frame >= start + SCRAMBLE) return c
        return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
      })
      setDisplay(next)
      if (frame > chars.length * STAGGER + SCRAMBLE) clearInterval(id)
    }, 45)

    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <h1
      className="text-glow font-mono text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl"
      aria-label={name}
    >
      {display.map((c, i) => {
        const locked = c === chars[i] && c !== ""
        return (
          <span
            key={i}
            aria-hidden="true"
            className={
              c === " "
                ? "inline-block w-[0.3em]"
                : locked
                  ? "text-foreground"
                  : "text-primary"
            }
          >
            {c}
          </span>
        )
      })}
    </h1>
  )
}
