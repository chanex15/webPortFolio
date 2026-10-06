'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

/*
 * Live GitHub contribution calendar.
 * Data: github-contributions-api.jogruber.de (same source as react-github-calendar).
 * Colors: GitHub's exact dark-mode contribution palette.
 */

const GITHUB_USER = profile.githubHandle.split('/').pop() || 'chanex15'
const API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}`

// GitHub dark default: level 0 (empty) → level 4 (peak)
const LEVEL_COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'] as const

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] as const
const DAY_LABELS = ['', 'Mon', '', 'Wed', '', 'Fri', ''] as const

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }
type Week = (Day | null)[]

const CURRENT_YEAR = new Date().getFullYear()

function buildWeeks(days: Day[]): Week[] {
  const weeks: Week[] = []
  let current: Week = []
  for (const day of days) {
    const dow = new Date(`${day.date}T00:00:00`).getDay()
    if (dow === 0 && current.length > 0) {
      weeks.push(current)
      current = []
    }
    // Align partial first week so cells sit on the correct weekday rows
    while (current.length < dow) current.push(null)
    current.push(day)
  }
  if (current.length > 0) weeks.push(current)
  return weeks
}

function monthLabels(weeks: Week[]) {
  const labels: { index: number; label: string }[] = []
  let lastMonth = -1
  let lastIndex = -3
  weeks.forEach((week, index) => {
    const first = week.find((day): day is Day => day !== null)
    if (!first) return
    const month = new Date(`${first.date}T00:00:00`).getMonth()
    if (month !== lastMonth && index - lastIndex >= 2) {
      labels.push({ index, label: MONTH_NAMES[month] })
      lastIndex = index
    }
    lastMonth = month
  })
  return labels
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function GitHubCalendar() {
  const [days, setDays] = useState<Day[] | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    setError(false)
    fetch(`${API}?y=last`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('Request failed'))))
      .then((data: { contributions: Day[] }) => {
        if (!cancelled) setDays(data.contributions ?? [])
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const weeks = useMemo(() => (days ? buildWeeks(days) : []), [days])
  const labels = useMemo(() => monthLabels(weeks), [weeks])
  const total = useMemo(() => (days ? days.reduce((sum, day) => sum + day.count, 0) : 0), [days])

  return (
    <div className="rounded-2xl glass p-4 md:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-aurora"
        >
          GitHub Activity
          <ArrowUpRight
            size={12}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>

      {error ? (
        <p className="py-10 text-center font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
          Couldn&apos;t load activity —{' '}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-aurora">
            view on GitHub
          </a>
        </p>
      ) : !days ? (
        <div className="h-[160px] animate-pulse rounded-xl bg-white/[0.03]" />
      ) : (
        <div className="scrollbar-slim overflow-x-auto pb-1">
          <div className="flex min-w-[980px] gap-[4px]">
            {/* Weekday labels */}
            <div className="mr-2 flex shrink-0 flex-col gap-[4px] pt-5">
              {DAY_LABELS.map((label, i) => (
                <div key={i} className="h-[14px] text-[11px] leading-[14px] text-muted-foreground">
                  {label}
                </div>
              ))}
            </div>
            <div>
              {/* Month labels */}
              <div className="relative mb-1.5 h-4">
                {labels.map((label) => (
                  <span
                    key={`${label.label}-${label.index}`}
                    className="absolute text-[11px] leading-4 text-muted-foreground"
                    style={{ left: `${label.index * 18}px` }}
                  >
                    {label.label}
                  </span>
                ))}
              </div>
              {/* Contribution grid */}
              <div className="flex gap-[4px]">
                {weeks.map((week, wi) => (
                  <div key={wi} className="flex flex-col gap-[4px]">
                    {week.map((day, di) =>
                      day ? (
                        <div
                          key={day.date}
                          className="h-[14px] w-[14px] rounded-[3px] transition-transform hover:scale-125"
                          style={{ backgroundColor: LEVEL_COLORS[day.level] }}
                          title={`${day.count} contribution${day.count === 1 ? '' : 's'} — ${formatDate(day.date)}`}
                        />
                      ) : (
                        <div key={`pad-${wi}-${di}`} className="h-[14px] w-[14px]" />
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {!error && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
            {days ? `${total.toLocaleString('en-US')} contributions · last 12 months` : '—'}
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-muted-foreground">Less</span>
            {LEVEL_COLORS.map((color) => (
              <span
                key={color}
                className="h-[12px] w-[12px] rounded-[3px]"
                style={{ backgroundColor: color }}
              />
            ))}
            <span className="text-[11px] text-muted-foreground">More</span>
          </div>
        </div>
      )}
    </div>
  )
}
