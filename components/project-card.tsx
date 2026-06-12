'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/portfolio-data'

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group glass overflow-hidden rounded-2xl"
    >
      {/* Browser frame */}
      <div className="border-b border-border">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b9d]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#c8a96e]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-aurora/70" />
          </div>
          <div className="flex-1 truncate rounded-md bg-white/[0.04] px-3 py-1 text-center font-mono text-[0.6rem] text-muted-foreground">
            {project.domain}
          </div>
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name}`}
            className="text-muted-foreground transition-colors hover:text-aurora"
          >
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      {/* Screenshot */}
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.name} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(4,6,26,0.6)] opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-aurora to-aurora-blue px-5 py-2.5 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-primary-foreground">
            <ArrowUpRight size={14} />
            Open Live Site
          </span>
        </div>
      </Link>

      {/* Meta */}
      <div className="flex gap-4 p-5">
        <div className="font-serif text-2xl font-bold text-gradient">{project.index}</div>
        <div className="flex-1">
          <h3 className="font-serif text-lg font-bold text-foreground">{project.name}</h3>
          <p className="mt-1.5 text-pretty text-xs leading-relaxed text-muted-foreground">
            {project.blurb}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white/[0.025] px-2.5 py-1 font-mono text-[0.5rem] uppercase tracking-[0.18em] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
