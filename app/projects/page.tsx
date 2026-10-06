import Link from 'next/link'
import { Suspense } from 'react'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/section-heading'
import { ProjectsExplorer } from '@/components/projects-explorer'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/portfolio-data'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Projects — Christian Paul Amantiad',
  description:
    'A portfolio of deployed websites, web applications, and WordPress builds — designed, developed, and shipped to production.',
}

export default function ProjectsPage() {
  return (
    <>
      <section className="px-4 pt-32 pb-16 sm:px-6 md:px-12 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects I've shipped to"
              highlight="production"
            />
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Browse the full collection or jump into a focused track — pure hand-coded builds,
              WordPress work, and the systems &amp; admin tools behind the scenes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Suspense fallback={<div className="h-10" />}>
            <ProjectsExplorer projects={projects} />
          </Suspense>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-28 sm:px-6 md:px-12">
        <Reveal className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl glass p-10 text-center md:p-16">
            <div
              className="absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-aurora/15 blur-3xl"
              aria-hidden
            />
            <h2 className="relative text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl">
              Have a project in <em className="not-italic text-gradient">mind?</em>
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              I&apos;m available for freelance work and collaborations. Let&apos;s turn your idea
              into a fast, polished, live website.
            </p>
            <Link
              href="/contact"
              className="group relative mt-8 inline-flex items-center gap-2 rounded-md bg-aurora px-7 py-3.5 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary-foreground transition-all hover:-translate-y-0.5 glow-teal"
            >
              Start a conversation
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  )
}
