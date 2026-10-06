'use client'

import { useMemo } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ProjectCard } from '@/components/project-card'
import type { Project, ProjectCategory } from '@/lib/portfolio-data'

type Filter = 'all' | ProjectCategory

const tabs: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All Project' },
  { id: 'pure-code', label: 'Pure Code' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'system-admin', label: 'System & Admin' },
]

const emptyCopy: Record<Exclude<Filter, 'all'>, string> = {
  'pure-code': 'Hand-coded builds are on the way — check back soon.',
  wordpress: 'WordPress projects are coming soon.',
  'system-admin': 'Systems and admin tools are coming soon.',
}

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const trackParam = searchParams.get('track')
  const active: Filter = tabs.some((t) => t.id === trackParam)
    ? (trackParam as Filter)
    : 'all'

  function setActive(id: Filter) {
    const params = new URLSearchParams(searchParams.toString())
    if (id === 'all') params.delete('track')
    else params.set('track', id)
    const query = params.toString()
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false })
  }

  const counts = useMemo(() => {
    const base = { all: projects.length } as Record<Filter, number>
    for (const tab of tabs) {
      if (tab.id === 'all') continue
      base[tab.id] = projects.filter((p) => p.category === tab.id).length
    }
    return base
  }, [projects])

  const filtered = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  )

  return (
    <>
      {/* Sub-section tabs */}
      <div className="mb-10 flex flex-wrap gap-2.5">
        {tabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActive(tab.id)}
              aria-pressed={isActive}
              className={[
                'group inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] transition-all',
                isActive
                  ? 'border-aurora/60 bg-aurora/15 text-aurora glow-teal'
                  : 'border-border bg-white/[0.025] text-muted-foreground hover:border-aurora/40 hover:text-foreground',
              ].join(' ')}
            >
              {tab.label}
              <span
                className={[
                  'rounded-full px-1.5 py-0.5 text-[0.7rem] leading-none',
                  isActive ? 'bg-aurora/25 text-aurora' : 'bg-white/[0.05] text-muted-foreground',
                ].join(' ')}
              >
                {counts[tab.id]}
              </span>
            </button>
          )
        })}
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl glass px-6 py-16 text-center">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-aurora">
            {tabs.find((t) => t.id === active)?.label}
          </p>
          <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            {active !== 'all' ? emptyCopy[active] : ''}
          </p>
        </div>
      )}
    </>
  )
}
