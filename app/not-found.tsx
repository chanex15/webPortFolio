import Link from 'next/link'
import { ArrowLeft, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center px-6 py-32 text-center">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aurora/10 blur-[100px]" />

      <div className="relative flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.4em] text-aurora">
        <span className="h-px w-6 bg-aurora/60" />
        404 — Lost in orbit
        <span className="h-px w-6 bg-aurora/60" />
      </div>

      <h1 className="relative mt-8 font-serif text-[6rem] font-black leading-none text-gradient sm:text-[9rem]">
        404
      </h1>

      <p className="relative mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
        This page drifted out of the starfield. Let&apos;s get you back to
        familiar orbit.
      </p>

      <div className="relative mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-md bg-aurora px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary-foreground transition-all hover:-translate-y-0.5 glow-teal"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-md border border-aurora/30 px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-aurora backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-aurora hover:bg-aurora/8"
        >
          <Compass size={14} />
          View Projects
        </Link>
      </div>
    </section>
  )
}
