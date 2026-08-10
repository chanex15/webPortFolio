import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Image from 'next/image'
import {
  AlertTriangle,
  ArrowDownToLine,
  CheckCircle2,
  ScanLine,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { formatBytes } from '@/lib/release'

export const metadata: Metadata = {
  title: 'Install Who is Zircon',
  description:
    'Tap below to download and install the Who is Zircon Android app directly to your phone.',
  robots: { index: false, follow: false },
}

const APK_URL = '/who-is-zircon.apk'
const APK_BYTES = 8_736_517

function isAndroidUA(ua: string): boolean {
  // Match "Android" but exclude Windows Phone etc.
  return /android/i.test(ua) && !/windows phone/i.test(ua)
}

/**
 * Server component. For Android User-Agents we do a *server-side* HTTP
 * redirect straight at the APK file — the browser hits our 307, follows
 * it to /who-is-zircon.apk, the Android system picks up the
 * application/vnd.android.package-archive mime type and immediately
 * offers the install prompt (no page UI is ever rendered).
 */
export default async function InstallPage() {
  // Touching the request headers forces Next.js to render dynamically —
  // we never want this page to be statically cached.
  const requestHeaders = await headers()
  const ua = requestHeaders.get('user-agent') ?? ''
  if (isAndroidUA(ua)) {
    const { redirect } = await import('next/navigation')
    redirect(APK_URL)
  }

  // Non-Android: render a friendly UI with a manual link & QR code.
  // (We intentionally do not show a "Tap to install" UI that "wastes"
  // half a second — desktop / iOS users won't benefit from the page
  // triggering an .apk download.)
  const pageUrl = `https://whoiszircon.vercel.app/install`
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(pageUrl)}&margin=10`

  return (
    <div className="relative px-6 pt-32 pb-24 md:px-12 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            center
            eyebrow="Install"
            title="Who is Zircon"
            highlight="— on Android"
          />
        </Reveal>

        <Reveal delay={0.05} className="mt-4 text-center">
          <p className="mx-auto max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            On an Android phone? Tap below — we'll start the install
            immediately. On a desktop / iPhone? Scan the QR with your
            Android phone.
          </p>
        </Reveal>

        {/* ── Fail-fast card ─────────────────────────────────────── */}
        <Reveal delay={0.12}>
          <article className="glass mt-12 overflow-hidden rounded-3xl border border-aurora/20 shadow-[0_0_60px_rgba(0,255,200,0.08)]">
            <div className="grid gap-0 md:grid-cols-[1fr_240px]">
              <div className="flex flex-col gap-6 p-8 md:p-10">
                <div>
                  <div className="mb-2 flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-aurora">
                    <Smartphone size={12} />
                    Android only — sideload install
                  </div>
                  <h1 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                    You need to be on an Android device
                  </h1>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Open <code className="rounded bg-card/60 px-1.5 py-0.5 font-mono text-aurora">whoiszircon.vercel.app/install</code>
                    {' '}directly in Chrome / Firefox / Edge / Brave on your Android
                    phone and the download will start within milliseconds.
                  </p>
                </div>

                <a
                  href={APK_URL}
                  download="who-is-zircon.apk"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl border border-border bg-background px-5 py-3 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground transition-all hover:border-aurora/40 hover:text-foreground"
                >
                  <ArrowDownToLine size={14} />
                  Or just download the .apk ({formatBytes(APK_BYTES)})
                </a>

                <ol className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="mt-1 shrink-0 text-aurora" />
                    <span>Open this URL on your Android phone.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="mt-1 shrink-0 text-aurora" />
                    <span>Download starts; tap the notification when it lands.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="mt-1 shrink-0 text-aurora" />
                    <span>
                      Allow installs from your browser (one-time, in{' '}
                      <em className="not-italic">Settings → Apps → Special access</em>).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} className="mt-1 shrink-0 text-aurora" />
                    <span>Tap <strong className="font-semibold text-foreground">Install</strong> — open the app, enjoy.</span>
                  </li>
                </ol>
              </div>

              {/* QR column */}
              <div className="flex flex-col items-center justify-center gap-3 border-t border-border bg-card/40 p-8 md:border-l md:border-t-0">
                <div className="relative rounded-2xl bg-white p-3 ring-1 ring-aurora/30 shadow-[0_0_30px_rgba(0,255,200,0.15)]">
                  <Image
                    src={qrSrc}
                    alt="QR code linking to whoiszircon.vercel.app/install"
                    width={200}
                    height={200}
                    unoptimized
                    priority
                  />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-aurora">
                  <ScanLine size={11} />
                  scan to install
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* ── Tiny note ──────────────────────────────────────────── */}
        <Reveal delay={0.18} className="mt-8 flex justify-center">
          <p className="flex max-w-md items-start gap-2 rounded-lg border border-amber-400/30 bg-amber-400/5 px-4 py-3 text-xs leading-relaxed text-amber-200">
            <AlertTriangle size={14} className="mt-0.5 shrink-0" />
            <span>
              Browser shows <em className="not-italic">"this file may harm your device"</em>?
              Tap <strong className="font-semibold">Download anyway</strong> — it's your own unsigned debug build, signed with Vercel's debug key, never uploaded to Play Store. This warning is just Android being Android.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.22} className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-muted-foreground/70 transition-colors hover:text-aurora"
          >
            <ShieldCheck size={11} />
            back to portfolio →
          </a>
        </Reveal>
      </div>
    </div>
  )
}
