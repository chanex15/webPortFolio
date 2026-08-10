/**
 * Server-side helper that fetches the latest GitHub Release for this repo so
 * the /download page can show real version / size / date / APK URL without
 * any redeploys.
 *
 * GitHub Pages / Vercel / etc will hit the public REST API; unauthenticated
 * requests are rate-limited to 60/h per IP which is plenty for a portfolio
 * site. We cache the response for 5 minutes on the Next.js server.
 */

export interface ReleaseAsset {
  name: string
  size: number // bytes
  url: string // browser_download_url
  contentType: string
}

export interface ReleaseInfo {
  tag: string
  name: string
  notes: string
  publishedAt: string // ISO date
  apk: ReleaseAsset | null
  htmlUrl: string
}

export const GITHUB_REPO = 'chanex15/webPortFolio'

/**
 * Used when there is no GitHub release yet (or the API is unreachable).
 * Update this and re-deploy if you want a placeholder for the very first
 * publish before you've cut your first real release.
 */
export const FALLBACK_RELEASE: ReleaseInfo = {
  tag: 'v0.0.0',
  name: 'Who is Zircon — Android (pre-release)',
  notes:
    'Native Android shell that loads the live portfolio site. ' +
    'A signed release will show here as soon as you publish one on GitHub.',
  publishedAt: new Date().toISOString(),
  apk: null,
  htmlUrl: `https://github.com/${GITHUB_REPO}/releases`,
}

/**
 * What we render if the fetch fails OR no APK asset is attached.
 * Mirrors the debug-build size so the page never looks "empty".
 */
export const DEBUG_FALLBACK_APK: ReleaseAsset = {
  name: 'who-is-zircon.apk',
  size: 8_736_517, // bytes, refresh after each build
  url: `https://github.com/${GITHUB_REPO}/raw/main/who-is-zircon.apk`,
  contentType: 'application/vnd.android.package-archive',
}

const REVALIDATE_SECONDS = 300 // 5 minutes

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': 'whoiszircon-download-page',
        },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    )

    if (!res.ok) {
      return FALLBACK_RELEASE
    }

    const data = await res.json()

    const apkAsset = (data.assets ?? []).find(
      (a: { name: string }) => a.name.toLowerCase().endsWith('.apk'),
    )

    const apk: ReleaseAsset | null = apkAsset
      ? {
          name: apkAsset.name,
          size: Number(apkAsset.size ?? 0),
          url: apkAsset.browser_download_url,
          contentType: apkAsset.content_type ?? 'application/vnd.android.package-archive',
        }
      : null

    return {
      tag: data.tag_name ?? FALLBACK_RELEASE.tag,
      name: data.name ?? FALLBACK_RELEASE.name,
      notes: data.body ?? FALLBACK_RELEASE.notes,
      publishedAt: data.published_at ?? FALLBACK_RELEASE.publishedAt,
      apk,
      htmlUrl: data.html_url ?? `https://github.com/${GITHUB_REPO}/releases`,
    }
  } catch {
    // Network down / DNS / etc — fall through to the placeholder.
    return FALLBACK_RELEASE
  }
}

/**
 * Pretty-print bytes — "8.3 MB", "1.4 GB", "812 KB".
 */
export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return '—'
  const units = ['B', 'KB', 'MB', 'GB']
  const exp = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)))
  const value = bytes / Math.pow(1024, exp)
  return `${value.toFixed(value >= 100 || exp === 0 ? 0 : 1)} ${units[exp]}`
}

/**
 * Pretty-print an ISO date — "10 Aug 2026".
 */
export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return iso
  }
}
