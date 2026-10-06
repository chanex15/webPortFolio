/**
 * Pretty-print bytes — "8.3 MB", "1.4 GB", "812 KB".
 *
 * Note: the GitHub Releases fetcher (`getLatestRelease`) that used to live
 * here was removed — it powered a `/download` page that no longer exists.
 * See RELEASING.md if you want to bring release info back to the /install page.
 */

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return '—'
  const units = ['B', 'KB', 'MB', 'GB']
  const exp = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)))
  const value = bytes / Math.pow(1024, exp)
  return `${value.toFixed(value >= 100 || exp === 0 ? 0 : 1)} ${units[exp]}`
}
