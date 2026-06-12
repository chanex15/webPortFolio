import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { profile, aboutParagraphs, stats, roleTags, skillGroups } from '@/lib/portfolio-data'
import { ArrowRight, MapPin, GraduationCap, ShieldCheck, Download } from 'lucide-react'

export const metadata = {
  title: 'About — Christian Paul Amantiad',
  description:
    'Information Technology graduate based in Cagayan de Oro City, specializing in secure, user-centered web applications.',
}

const facts = [
  { icon: MapPin, label: 'Based in', value: profile.location },
  { icon: GraduationCap, label: 'Education', value: `${profile.school} · ${profile.gradYear}` },
  { icon: ShieldCheck, label: 'Pursuing', value: profile.goal },
]

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="px-6 pt-36 pb-20 md:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHeading eyebrow="About Me" title="The person behind the" highlight="pixels" />
            <div className="mt-8 space-y-5">
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {roleTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-aurora/25 bg-aurora/5 px-4 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-aurora"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-aurora px-6 py-3 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-primary-foreground transition-all hover:-translate-y-0.5 glow-teal"
              >
                Let&apos;s work together
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-aurora/30 px-6 py-3 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-aurora backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-aurora hover:bg-aurora/8"
              >
                <Download size={14} className="transition-transform group-hover:translate-y-0.5" />
                Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 rounded-3xl bg-aurora/10 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <Image
                  src={profile.aboutImage || '/placeholder.svg'}
                  alt={`Portrait of ${profile.name}`}
                  width={640}
                  height={780}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="rounded-2xl glass p-8 text-center">
                <div className="font-serif text-4xl font-bold text-gradient">{s.num}</div>
                <div className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Quick facts */}
      <section className="px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.1}>
              <div className="flex h-full items-start gap-4 rounded-2xl glass p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-aurora/20 bg-aurora/5 text-aurora">
                  <f.icon size={18} />
                </div>
                <div>
                  <div className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground">
                    {f.label}
                  </div>
                  <div className="mt-1 font-medium text-foreground">{f.value}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading center eyebrow="Toolbox" title="Skills &" highlight="competencies" />
          </Reveal>
          <div className="mt-14 space-y-10">
            {skillGroups.map((group, gi) => (
              <Reveal key={group.label} delay={gi * 0.08}>
                <div className="grid gap-4 md:grid-cols-[180px_1fr] md:items-start">
                  <div className="flex items-center gap-3 md:pt-1.5">
                    <span className="h-px w-6 bg-gradient-to-r from-aurora to-transparent" />
                    <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-aurora">
                      {group.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-xl border border-border bg-secondary px-4 py-2 text-sm text-foreground transition-colors hover:border-aurora/40 hover:text-aurora"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
