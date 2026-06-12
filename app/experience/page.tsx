import Image from 'next/image'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { experience, galleryItems } from '@/lib/portfolio-data'

export const metadata = {
  title: 'Experience — Christian Paul Amantiad',
  description: 'My journey as a developer — timeline, roles, and a gallery of milestone projects.',
}

export default function ExperiencePage() {
  return (
    <>
      {/* Timeline */}
      <section className="px-6 pt-36 pb-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionHeading
              eyebrow="My Journey"
              title="Experience &"
              highlight="timeline"
            />
          </Reveal>

          <div className="relative mt-16">
            {/* vertical line */}
            <span
              className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-aurora/60 via-border to-transparent md:left-1/2"
              aria-hidden
            />
            <div className="space-y-12">
              {experience.map((job, i) => (
                <Reveal key={job.role} delay={i * 0.05}>
                  <div
                    className={`relative pl-12 md:w-1/2 ${
                      i % 2 === 0 ? 'md:pr-12 md:pl-0 md:text-right' : 'md:ml-auto md:pl-12'
                    }`}
                  >
                    {/* dot */}
                    <span
                      className={`absolute left-[6px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-aurora bg-background md:left-auto ${
                        i % 2 === 0 ? 'md:-right-[7px]' : 'md:-left-[7px]'
                      }`}
                      aria-hidden
                    />
                    <div className="rounded-2xl glass p-6 text-left">
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-aurora">
                        {job.period}
                      </span>
                      <h3 className="mt-2 font-serif text-xl font-bold text-foreground">
                        {job.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                        {job.company}
                      </p>
                      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                        {job.desc}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.skills.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-border bg-white/[0.025] px-2.5 py-1 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Milestones"
              title="Moments from the"
              highlight="journey"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, i) => (
              <Reveal key={item.num} delay={(i % 3) * 0.1}>
                <figure className="group h-full overflow-hidden rounded-2xl glass">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[rgba(4,6,26,0.85)] to-transparent"
                      aria-hidden
                    />
                    <span className="absolute bottom-3 left-4 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-aurora">
                      {item.num}
                    </span>
                  </div>
                  <figcaption className="p-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
