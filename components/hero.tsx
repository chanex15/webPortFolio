'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { profile, roleTags } from '@/lib/portfolio-data'
import { ArrowRight, Mail } from 'lucide-react'

function TiltCard() {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTransform(
      `perspective(900px) rotateY(${px * 16}deg) rotateX(${-py * 16}deg) scale(1.04)`,
    )
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTransform('')}
      className="relative flex flex-col items-center"
      style={{ transform, transition: 'transform 0.25s ease-out' }}
    >
      {/* spinning conic ring */}
      <div className="relative h-56 w-56 sm:h-64 sm:w-64">
        <div
          className="absolute -inset-2 rounded-full opacity-70"
          style={{
            background:
              'conic-gradient(#00ffc8 0%, #00b4ff 30%, #7b5ea7 60%, #ff6b9d 80%, #00ffc8 100%)',
            animation: 'spinRing 8s linear infinite',
          }}
        />
        <div className="absolute -inset-1 rounded-full bg-background" />
        <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-aurora/20 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_80px_rgba(0,255,200,0.12)]">
          <Image
            src={profile.heroImage || '/placeholder.svg'}
            alt={profile.name}
            fill
            priority
            sizes="256px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      {/* Welcome zone */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 pb-8 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center gap-4 font-mono text-[0.6rem] uppercase tracking-[0.5em] text-aurora sm:text-[0.68rem]"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-aurora" />
          Welcome to my Portfolio
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-aurora" />
        </motion.div>

         <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.4 }}
  className="max-w-3xl text-balance font-serif text-3xl font-normal leading-tight text-[rgba(220,235,255,0.78)] sm:text-5xl lg:text-6xl"
>
  Tell me your idea.{' '}
  <span className="text-gradient-animate font-bold">I'll turn it into something</span>{' '}
  you can actually show people.
</motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground"
        >
          If you&apos;re looking for someone to build your website, you&apos;re
          looking at the{' '}
          <strong className="font-medium text-[rgba(220,235,255,0.9)]">
            right person.
          </strong>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-aurora/20 bg-aurora/5 px-5 py-2 font-mono text-[0.58rem] uppercase tracking-[0.3em] text-aurora backdrop-blur-md"
        >
          <span
            className="h-1.5 w-1.5 rounded-full bg-aurora shadow-[0_0_8px_#00ffc8]"
            style={{ animation: 'pulseDot 2s ease-in-out infinite' }}
          />
          A collection of websites &amp; projects I built
        </motion.div>
      </div>

      {/* Bottom strip */}
      <div className="relative px-6 pb-12 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-end md:justify-between">
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="order-2 flex-1 text-center md:order-1 md:text-left"
            >
              <div className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.4em] text-muted-foreground">
                {profile.role}
              </div>
              <div className="font-serif text-2xl font-bold leading-none text-foreground sm:text-3xl">
                Christian <em className="font-normal not-italic text-gradient">Paul</em>
                <br />
                Amantiad
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                {roleTags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-white/[0.025] px-3 py-1.5 font-mono text-[0.52rem] uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-aurora/35 hover:text-aurora"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 flex-shrink-0 md:order-2"
            >
              <TiltCard />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="order-3 flex flex-1 flex-col items-center gap-3 md:items-end"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-aurora to-aurora-blue px-6 py-3 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-primary-foreground glow-teal transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_50px_rgba(0,255,200,0.4)]"
              >
                View My Work
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-aurora/30 px-6 py-3 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-aurora backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-aurora hover:bg-aurora/8"
              >
                <Mail size={14} />
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
