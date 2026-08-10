import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowDownToLine,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Package,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wifi,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { GithubIcon } from '@/components/icons/github-icon'
import {
  DEBUG_FALLBACK_APK,
  FALLBACK_RELEASE,
  formatBytes,
  formatDate,
  getLatestRelease,
  GITHUB_REPO,
} from '@/lib/release'

export const metadata: Metadata = {
  title: 'Download the Android app — Who is Zircon',
  description:
    'Get the official Android app for the Who is Zircon portfolio — a native shell that mirrors every edit you push to the live website.',
}

export default async function DownloadPage() {
  const release = await getLatestRelease()
  const hasRelease = Boolean(release.apk)
  const apk = release.apk ?? DEBUG_FALLBACK_APK

  return (
    <div className="relative px-6 pt-32 pb-24 md:px-12 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-5xl">
        {/* ── Hero / App card ───────────────────────────────────────── */}
        <Reveal>
          <SectionHeading
            center
            eyebrow="Get the app"
            title="Who is Zircon"
            highlight="— on Android"
          />
        </Reveal>

        <Reveal delay={0.05} className="mt-4 text-center">
          <p className="mx-auto max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            A native Android shell that mirrors every edit you push to the live
            portfolio. Pull-to-refresh, status-bar tinting, splash, and an
            offline page — all themed to match the site.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <article className="glass mt-14 overflow-hidden rounded-3xl border border-aurora/20 shadow-[0_0_60px_rgba(0,255,200,0.08)]">
            <div className="grid gap-0 md:grid-cols-[260px_1fr]">
              {/* Icon column */}
              <div className="relative flex items-center justify-center bg-gradient-to-br from-aurora/15 via-aurora-blue/10 to-aurora-purple/15 p-10 md:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,200,0.25),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(123,94,167,0.3),transparent_55%)]" />
                <div className="relative h-32 w-32 rounded-3xl bg-[#15082e] p-6 ring-1 ring-aurora/30 shadow-[0_0_40px_rgba(0,255,200,0.25)] md:h-36 md:w-36">
                  <Image
                    src="/zircon-logo.png"
                    alt="Who is Zircon app icon"
                    width={144}
                    height={144}
                    priority
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>

              {/* Info column */}
              <div className="flex flex-col gap-6 p-8 md:p-10">
                <div>
                  <div className="mb-2 flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-aurora">
                    <Smartphone size={12} />
                    Native Android · WebView
                  </div>
                  <h1 className="font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                    Who is Zircon
                  </h1>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Built with Capacitor. The app shell loads your live Vercel
                    site, so every website edit shows in the app on the next
                    reload — no App Store re-submission.
                  </p>
                </div>

                {/* Meta grid: version · size · date */}
                <dl className="grid grid-cols-3 gap-3 text-left">
                  <Meta
                    icon={<Package size={13} />}
                    label="Version"
                    value={release.tag}
                  />
                  <Meta
                    icon={<ArrowDownToLine size={13} />}
                    label="Size"
                    value={formatBytes(apk.size)}
                  />
                  <Meta
                    icon={<RefreshCw size={13} />}
                    label="Released"
                    value={formatDate(release.publishedAt)}
                  />
                </dl>

                {/* Action buttons */}
                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={apk.url}
                    className="group inline-flex flex-1 items-center justify-center gap-3 rounded-xl border border-aurora bg-aurora px-6 py-4 font-mono text-[0.7rem] uppercase tracking-[0.3em] text-primary-foreground shadow-[0_0_30px_rgba(0,255,200,0.3)] transition-all hover:-translate-y-0.5 hover:bg-aurora/85 hover:shadow-[0_8px_40px_rgba(0,255,200,0.45)] sm:flex-none sm:px-8"
                  >
                    <Download size={16} />
                    Download APK
                    <span className="hidden text-[0.55rem] opacity-70 transition-opacity group-hover:opacity-100 sm:inline">
                      direct link
                    </span>
                  </a>

                  <a
                    href={release.htmlUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-5 py-4 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted-foreground transition-all hover:border-aurora/40 hover:text-foreground sm:px-6"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    Release page
                    <ExternalLink size={11} className="opacity-60" />
                  </a>
                </div>

                {!hasRelease && (
                  <p className="flex items-start gap-2 rounded-lg border border-amber-400/30 bg-amber-400/5 px-4 py-3 text-xs leading-relaxed text-amber-200">
                    <ShieldCheck size={14} className="mt-0.5 shrink-0" />
                    <span>
                      No GitHub release attached yet — this page is showing a
                      placeholder URL. Publish a release with the{' '}
                      <code className="rounded bg-black/30 px-1 py-0.5 font-mono text-[0.7rem]">
                        who-is-zircon.apk
                      </code>{' '}
                      asset on{' '}
                      <Link
                        href={`https://github.com/${GITHUB_REPO}/releases`}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-dotted underline-offset-2 hover:text-amber-100"
                      >
                        GitHub Releases
                      </Link>{' '}
                      and this button will update automatically.
                    </span>
                  </p>
                )}
              </div>
            </div>
          </article>
        </Reveal>

        {/* ── Install steps ────────────────────────────────────────── */}
        <Reveal className="mt-24">
          <SectionHeading
            center
            eyebrow="Install"
            title="Four taps and you're in"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ol className="grid gap-4 md:grid-cols-2">
            <InstallStep
              n="01"
              title="Allow installs from this source"
              body="The first time your phone sees an APK outside the Play Store it'll ask. In Settings → Apps → Special access → Install unknown apps, allow your browser or file manager to install packages."
              icon={<ShieldCheck size={16} />} // smart-key fallback: any lucide icon works here
            />
            <InstallStep
              n="02"
              title="Open the downloaded APK"
              body="Tap the file in your Downloads folder, or just tap the “Download APK” button above from your phone's browser — it will offer to open the file directly."
              icon={<ArrowDownToLine size={16} />}
            />
            <InstallStep
              n="03"
              title="Confirm install"
              body="Android will show the permissions the app needs (network, splash). Tap Install. Once finished, tap Open."
              icon={<CheckCircle2 size={16} />}
            />
            <InstallStep
              n="04"
              title="Pin the app and chill"
              body="Long-press the icon on your home screen → Add to home screen. The app now opens your live portfolio in a native shell — pull down anywhere to refresh."
              icon={<Sparkles size={16} />}
            />
          </ol>
        </Reveal>

        {/* ── Feature grid ─────────────────────────────────────────── */}
        <Reveal className="mt-24">
          <SectionHeading
            center
            eyebrow="Why an app"
            title="Live"
            highlight="sync"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<RefreshCw size={18} />}
              title="Auto-syncing"
              body="The shell points at your live Vercel URL. Edit a paragraph on the site, pull-to-refresh in the app, done."
            />
            <FeatureCard
              icon={<Wifi size={18} />}
              title="Offline fallback"
              body="No signal? The app shows a branded “no signal” page with a retry button instead of a system error."
            />
            <FeatureCard
              icon={<Sparkles size={18} />}
              title="Native polish"
              body="Aurora-themed splash, status-bar tinting, hardware-native pull-to-refresh, and predictive back gesture."
            />
            <FeatureCard
              icon={<Code2 size={18} />}
              title="Open source"
              body="Built on Capacitor 8. The repo at github.com/chanex15/webPortFolio includes the full Android shell."
            />
          </div>
        </Reveal>

        {/* ── Footer line ──────────────────────────────────────────── */}
        <Reveal delay={0.15} className="mt-20 text-center">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground/60">
            Zircon · Christian Paul Amantiad · {formatDate(release.publishedAt)}
          </p>
        </Reveal>
      </div>
    </div>
  )
}

/* ── Small helper components rendered above ─────────────────────────── */

function Meta({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-lg border border-border bg-background/40 px-3 py-2.5">
      <div className="mb-1 flex items-center gap-1.5 font-mono text-[0.55rem] uppercase tracking-[0.25em] text-muted-foreground/80">
        <span className="text-aurora">{icon}</span>
        {label}
      </div>
      <div className="truncate font-mono text-sm font-medium text-foreground">
        {value}
      </div>
    </div>
  )
}

function InstallStep({
  n,
  title,
  body,
  icon,
}: {
  n: string
  title: string
  body: string
  icon: React.ReactNode
}) {
  return (
    <li className="group relative rounded-2xl border border-border bg-card/40 p-6 transition-all hover:-translate-y-0.5 hover:border-aurora/30 hover:bg-card/70">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-aurora">
          step {n}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-aurora/20 bg-aurora/5 text-aurora transition-colors group-hover:border-aurora/40 group-hover:bg-aurora/15">
          {icon}
        </span>
      </div>
      <h3 className="font-serif text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {body}
      </p>
    </li>
  )
}

function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card/40 p-6 transition-all hover:-translate-y-0.5 hover:border-aurora/30">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-aurora/20 bg-aurora/5 text-aurora transition-colors group-hover:border-aurora/40 group-hover:bg-aurora/15">
        {icon}
      </div>
      <h3 className="font-serif text-base font-bold text-foreground">
        {title}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        {body}
      </p>
    </div>
  )
}

// FALLBACK_RELEASE is the placeholder seed values used if the GitHub
// API fetch ever fails entirely; keep the import so future fixes can
// still surface it cleanly.
void FALLBACK_RELEASE
