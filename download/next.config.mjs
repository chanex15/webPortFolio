import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
// Tell Next.js our workspace root is the parent directory so it doesn't
// get confused by pnpm-lock.yaml living next to our /download package.json.
const workspaceRoot = resolve(here, '..')

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: workspaceRoot,
}

export default nextConfig
