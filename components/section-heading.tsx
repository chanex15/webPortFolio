import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  center,
  className,
}: {
  eyebrow?: string
  title: string
  highlight?: string
  center?: boolean
  className?: string
}) {
  return (
    <div className={cn(center && 'text-center', className)}>
      {eyebrow && (
        <div
          className={cn(
            'mb-4 flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-aurora',
            center && 'justify-center',
          )}
        >
          <span className="h-px w-6 bg-aurora/60" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {title} {highlight && <em className="font-normal not-italic text-gradient">{highlight}</em>}
      </h2>
    </div>
  )
}
