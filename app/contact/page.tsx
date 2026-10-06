import Link from 'next/link'
import { Footer } from '@/components/footer'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact-form'
import { profile } from '@/lib/portfolio-data'
import { Send, Mail, MapPin } from 'lucide-react'

function Github({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function Facebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  )
}

function LinkedIn({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
    </svg>
  )
}

function JobStreet({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 5.93 13.03 3.1a1.53 1.53 0 0 0-.96 0L3.5 5.93a.8.8 0 0 0-.55.77v8.52c0 1.52.72 2.96 1.92 3.87l4.06 3.07c.63.48 1.36.79 2.14.91a.8.8 0 0 0 .25 0 5.68 5.68 0 0 0 2.14-.91l4.06-3.07a4.84 4.84 0 0 0 1.92-3.87V6.7a.8.8 0 0 0-.54-.77Zm-4.55 11.35a.75.75 0 0 1-1.05-.15l-1.79-2.38a3.03 3.03 0 0 1-1.72.54h-.02a2.9 2.9 0 0 1-1.9-.72l-1.63 2.35a.75.75 0 1 1-1.23-.86l1.9-2.73a3.65 3.65 0 0 1-.5-1.84v-1.9a.75.75 0 0 1 1.5 0v1.9c0 1.2.95 2.19 2.1 2.19 1.17 0 2.12-.98 2.12-2.19v-1.9a.75.75 0 0 1 1.5 0v1.9c0 .98-.36 1.87-.96 2.55l1.72 2.29a.75.75 0 0 1-.04 1.2Z" />
    </svg>
  )
}

export const metadata = {
  title: 'Contact — Christian Paul Amantiad',
  description:
    'Get in touch about web development roles, freelance projects, and collaborations.',
}

const platforms = [
  {
    icon: Github,
    label: 'GitHub',
    value: profile.githubHandle,
    href: profile.github,
  },
  {
    icon: LinkedIn,
    label: 'LinkedIn',
    value: 'Christian Paul Amantiad',
    href: profile.linkedin,
  },
  {
    icon: JobStreet,
    label: 'JobStreet',
    value: 'ph.jobstreet.com/profiles',
    href: profile.jobstreet,
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: 'Christian Paul Amantiad',
    href: profile.facebook,
  },
  {
    icon: Send,
    label: 'Telegram',
    value: 'Message me directly',
    href: profile.telegram,
  },
]

export default function ContactPage() {
  const email = `${profile.emailUser}@${profile.emailDomain}`

  return (
    <>
      <section className="px-4 pt-32 pb-16 sm:px-6 md:px-12 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading eyebrow="Contact" title="Let's work" highlight="together" />
            <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Whether you have a project in mind, a question, or just want to connect — my inbox is
              always open. I&apos;ll get back to you as soon as I can.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-28 sm:px-6 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: contact details */}
          <Reveal className="space-y-5">
            <Link
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:border-aurora/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-aurora/20 bg-aurora/5 text-aurora">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Email
                </div>
                <div className="mt-1 truncate font-medium text-foreground group-hover:text-aurora">
                  {email}
                </div>
              </div>
            </Link>

            <div className="flex items-start gap-4 rounded-2xl glass p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-aurora/20 bg-aurora/5 text-aurora">
                <MapPin size={18} />
              </div>
              <div>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Location
                </div>
                <div className="mt-1 font-medium text-foreground">{profile.location}</div>
              </div>
            </div>

            <div className="rounded-2xl glass p-6">
              <div className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                Find me online
              </div>
              <div className="space-y-2">
                {platforms.map((p) => (
                  <Link
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-border hover:bg-white/[0.02]"
                  >
                    <span className="text-muted-foreground transition-colors group-hover:text-aurora">
                      <p.icon size={18} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium text-foreground">{p.label}</span>
                      <span className="block text-xs text-muted-foreground">{p.value}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
