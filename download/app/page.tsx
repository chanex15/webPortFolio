import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Image from 'next/image'
import {
  AlertTriangle,
  ArrowDownToLine,
  Check,
  ExternalLink,
  Github,
  Package,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Who is Zircon — Android',
  description:
    'Native Android shell that mirrors every edit you push to your live portfolio. Sideload-friendly, no Play Store needed.',
  openGraph: {
    title: 'Who is Zircon — Android app',
    description:
      'A native Android shell for the Who is Zircon portfolio. Updated the moment you push to Vercel.',
    type: 'website',
  },
}

const APK_URL = '/who-is-zircon.apk'
const APK_BYTES = 8_736_517

function formatBytes(b: number): string {
  if (!(b > 0)) return '—'
  const units = ['B', 'KB', 'MB', 'GB']
  const exp = Math.min(units.length - 1, Math.floor(Math.log(b) / Math.log(1024)))
  const v = b / Math.pow(1024, exp)
  return `${v.toFixed(v >= 100 || exp === 0 ? 0 : 1)} ${units[exp]}`
}

/**
 * On Android we render a tiny auto-download shell so the user doesn't
 * have to think — they tap once (or don't even tap) and the install
 * prompt pops. On every other platform we render the marketing page
 * with a big green download button.
 */
export default async function Page() {
  const ua = (await headers()).get('user-agent') ?? ''
  const isAndroid = /android/i.test(ua) && !/windows phone/i.test(ua)
  const version = 'v1.0.0'
  const pageUrl = `https://zcourier.vercel.app` // placeholder, Vercel injects the actual host

  return (
    <main className="relative isolate mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-stretch px-6 pt-16 pb-20 sm:pt-20 sm:pb-24">
      {/* Aurora background blobs */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[60vmax] w-[60vmax] rounded-full bg-[radial-gradient(circle,#00ffc8_0%,transparent_60%)] opacity-40 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,#00b4ff_0%,transparent_60%)] opacity-35 blur-3xl" />
        <div className="absolute top-1/3 left-0 h-[40vmax] w-[40vmax] rounded-full bg-[radial-gradient(circle,#7b5ea7_0%,transparent_60%)] opacity-25 blur-3xl" />
      </div>

      {/* Tiny film-grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          backgroundSize: '200px',
        }}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <header className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <div className="relative mb-7">
          <div className="absolute inset-0 -m-4 rounded-[2rem] bg-[radial-gradient(circle,#00ffc8_0%,transparent_70%)] opacity-50 blur-xl" />
          <div className="relative h-24 w-24 rounded-[1.5rem] bg-[#15082e] p-4 ring-1 ring-aurora/30 shadow-[0_0_50px_rgba(0,255,200,0.25)]">
            <Image
              src="/zircon-logo.png"
              alt="Who is Zircon"
              width={96}
              height={96}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-aurora/30 bg-aurora/5 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-aurora">
          <span className="h-1.5 w-1.5 rounded-full bg-aurora shadow-[0_0_8px_var(--color-aurora)]" />
          {isAndroid ? 'Installing on Android…' : 'Android'}
        </span>

        <h1 className="font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
          Who is{' '}
          <span className="italic text-gradient">Zircon,</span>
          <br className="sm:hidden" /> on your pocket.
        </h1>

        <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
          A native Android shell that mirrors every edit you push to{' '}
          <a
            href="https://whoiszircon.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="text-aurora underline decoration-dotted underline-offset-2 hover:decoration-solid"
          >
            whoiszircon.vercel.app
          </a>
          . Pull-to-refresh, status-bar tinting, splash, offline page — all
          themed to match the site.
        </p>

        {/* Meta row */}
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          <li className="flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1">
            <Package size={11} className="text-aurora" />
            {version}
          </li>
          <li className="flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1">
            <ArrowDownToLine size={11} className="text-aurora" />
            {formatBytes(APK_BYTES)}
          </li>
          <li className="flex items-center gap-1.5 rounded-full border border-border bg-background/50 px-3 py-1">
            <Sparkles size={11} className="text-aurora" />
            auto-syncing
          </li>
        </ul>

        {/* Big CTA */}
        <div className="mt-9 flex w-full flex-col items-center gap-3">
          <a
            href={APK_URL}
            download="who-is-zircon.apk"
            className="group relative inline-flex w-full max-w-md items-center justify-center gap-3 overflow-hidden rounded-2xl border border-aurora bg-aurora px-6 py-5 text-base font-semibold text-[#000005] shadow-[0_0_40px_rgba(0,255,200,0.25)] transition-all hover:-translate-y-0.5 hover:bg-aurora/90 hover:shadow-[0_10px_60px_rgba(0,255,200,0.45)] sm:text-lg"
          >
            <ArrowDownToLine size={18} />
            Download for Android
          </a>

          <a
            href="https://whoiszircon.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground hover:text-aurora"
          >
            View portfolio on web
            <ExternalLink size={10} className="opacity-60" />
          </a>
        </div>

        {/* Android auto-download nudge */}
        {isAndroid && (
          <p className="mt-5 flex items-start gap-2 rounded-xl border border-aurora/30 bg-aurora/5 px-4 py-3 text-left text-xs leading-relaxed text-aurora">
            <Check size={14} className="mt-0.5 shrink-0" />
            <span>
              The download should start automatically. If not, tap{' '}
              <strong className="font-semibold">Download for Android</strong>{' '}
              above.
            </span>
          </p>
        )}

        {/* Heads-up about debug-signed */}
        <p className="mt-6 flex max-w-md items-start gap-2 rounded-xl border border-amber-400/30 bg-amber-400/5 px-4 py-3 text-left text-xs leading-relaxed text-amber-200">
          <AlertTriangle size={14} className="mt-0.5 shrink-0" />
          <span>
            This release is signed with a debug key. After the first install
            you'll need to <strong className="font-semibold">uninstall the
            old version</strong> before installing this one. Future signed
            releases will install seamlessly over the top.
          </span>
        </p>
      </header>

      {/* ── Install steps ─────────────────────────────────────────── */}
      <section className="mt-16 sm:mt-20">
        <h2 className="mb-2 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.4em] text-aurora">
          <span className="h-px w-6 bg-aurora/60" />
          How to install
        </h2>
        <p className="mb-8 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          Sideload-friendly so you don't need a Play Store, Google account,
          or anything else.
        </p>

        <ol className="grid gap-3 sm:grid-cols-2">
          <Step
            n={1}
            body="Tap the green button above. Your browser saves the file to your Downloads folder."
          />
          <Step
            n={2}
            body="Pull down the notification shade (or open Files) and tap the .apk you just downloaded."
          />
          <Step
            n={3}
            body='If Android asks, enable "Install from unknown sources" for your browser — Android revokes this after each install so it stays safe.'
          />
          <Step
            n={4}
            body='Tap Install. Once it finishes, "Who is Zircon" lands on your home screen — open it to use.'
          />
        </ol>
      </section>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="mt-auto pt-16 text-center">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground/55">
          Source on{' '}
          <a
            href="https://github.com/chanex15/webPortFolio"
            target="_blank"
            rel="noreferrer"
            className="text-aurora underline decoration-dotted underline-offset-2 hover:decoration-solid"
          >
            GitHub
          </a>
        </p>
      </footer>
    </main>
  )
}

function Step({ n, body }: { n: number; body: string }) {
  return (
    <li className="group relative rounded-2xl border border-border bg-card/40 p-5 transition-all hover:-translate-y-0.5 hover:border-aurora/30 hover:bg-card/70">
      <span className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.4em] text-aurora">
        step {String(n).padStart(2, '0')}
      </span>
      <p className="text-sm leading-relaxed text-foreground/90">{body}</p>
    </li>
  )
}
