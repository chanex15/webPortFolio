import Link from 'next/link'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/section-heading'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { projects } from '@/lib/portfolio-data'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Projects — Christian Paul Amantiad',
  description:
    'A live collection of websites and web applications shipped from concept to deployment.',
}

export default function ProjectsPage() {
  return (
    <>
      <section className="px-6 pt-36 pb-16 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Selected Work"
              title="Projects I've shipped to"
              highlight="production"
            />
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Every project below is a real, live site. Click any card to open the deployed
              application in a new tab and explore it for yourself.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 md:px-12">
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
              className="group relative mt-8 inline-flex items-center gap-2 rounded-md bg-aurora px-7 py-3.5 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-primary-foreground transition-all hover:-translate-y-0.5 glow-teal"
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
