import Link from 'next/link'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'
import { ProjectCard } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { projects, competencies } from '@/lib/portfolio-data'
import { ArrowRight, User, FolderGit2, Briefcase } from 'lucide-react'

const quickLinks = [
  {
    href: '/about',
    icon: User,
    title: 'About Me',
    desc: 'My story, background, and what drives me as a developer.',
  },
  {
    href: '/projects',
    icon: FolderGit2,
    title: 'Projects',
    desc: 'A live collection of websites and apps I have shipped.',
  },
  {
    href: '/experience',
    icon: Briefcase,
    title: 'Experience',
    desc: 'My journey, timeline, and core competencies.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Featured projects teaser */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Things I Built"
              title="Featured"
              highlight="Work"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} />
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-md border border-aurora/30 px-6 py-3 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-aurora transition-all hover:-translate-y-0.5 hover:bg-aurora/8"
            >
              View All Projects
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Marquee of competencies */}
      <section className="overflow-hidden border-y border-border py-6">
        <div className="flex gap-10 whitespace-nowrap">
          <div className="flex animate-[marquee_30s_linear_infinite] gap-10">
            {[...competencies, ...competencies].map((c, i) => (
              <span
                key={i}
                className="font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground"
              >
                {c} <span className="text-aurora">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick navigation */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading center eyebrow="Explore" title="Get to" highlight="know me" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {quickLinks.map((link, i) => (
              <Reveal key={link.href} delay={i * 0.1}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col rounded-2xl glass p-8 transition-all hover:-translate-y-1 hover:border-aurora/30"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-aurora/20 bg-aurora/5 text-aurora">
                    <link.icon size={20} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground">{link.title}</h3>
                  <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {link.desc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-aurora">
                    Explore
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
