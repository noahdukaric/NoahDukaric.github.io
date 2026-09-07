type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
}

export function SectionHeading({ index, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 border-b border-border pb-5">
      <div>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </div>
      <span className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground sm:block">
        {index}
      </span>
    </div>
  )
}
