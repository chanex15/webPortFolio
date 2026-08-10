# Publishing a new APK release

The `/download` page reads the **latest GitHub Release** of this repo via the
GitHub REST API (`lib/release.ts`). All you have to do is publish a new
release with the APK attached and the page picks it up — no code changes,
no Vercel redeploy.

## One-shot (manual)

1. Build a release-signed APK (see the `mobile/` folder for the Capacitor
   Android project — it produces `who-is-zircon.apk`):

   ```bash
   cd mobile
   npx cap sync android
   cd android
   ./gradlew assembleRelease
   cp app/build/outputs/apk/release/app-release.apk ../who-is-zircon.apk
   ```

2. Tag the website repo and push:

   ```bash
   cd ../ # back to webPortFolio
   git tag v1.0.1
   git push origin main --tags
   ```

3. Open <https://github.com/chanex15/webPortFolio/releases/new>

4. Choose tag `v1.0.1`, fill the title & body, then:

   - Drag-drop the `who-is-zircon.apk` file (NOT into `assets/`, just to
     the release dropzone) — keep the filename ending in `.apk`.
   - Click **Publish release**.

5. Within 5 minutes the `/download` page on Vercel revalidates and shows:

   - The new tag (e.g. `v1.0.1`)
   - The new file size
   - The publish date
   - A working "Download APK" button pointing at
     `https://github.com/chanex15/webPortFolio/releases/latest/download/who-is-zircon.apk`

6. Optional — if you set up a [GitHub Action](.github/workflows/release.yml)
   (see below) the APK build + release happens automatically when you push a
   tag matching `v*.*.*`.

## Rolling back

`/download` always points at the **latest** release. If a release is bad:

- Delete it on GitHub (Settings → Danger Zone → Delete this release)
- Publish a fixed one with the same tag (or bump the version)

The page re-checks every 5 minutes on the server (`lib/release.ts → revalidate`).

## Tips

- **Filename must end in `.apk`**. The fetcher filters by that suffix so
  you can attach extra files (changelog, etc.) without confusion.
- **Tag must follow semver** (`v1.2.3` or `v1.2.3-rc.1`) — Vercel caches
  GET requests and `latest` is a redirect at GitHub's edge so the tag name
  appears on the page directly.
- **Pre-release?** flag it on GitHub — `lib/release.ts` will still pick it
  up as the "latest", so use a tag like `v1.2.0-beta.1` if you want to
  keep a stable `v1.1.x` reachable through `https://github.com/chanex15/webPortFolio/releases`.
