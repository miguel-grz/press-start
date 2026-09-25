import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { Plugin, ResolvedConfig } from 'vite'

export interface RouteShell {
  /** Route path relative to the base, without leading slash, e.g. `console/nes`. */
  path: string
  title: string
  description: string
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export function withMeta(html: string, { title, description }: RouteShell): string {
  const t = escapeHtml(title)
  const d = escapeHtml(description)
  return html
    .replace(/<title>.*?<\/title>/s, `<title>${t}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*/, `$1${d}`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*/, `$1${t}`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*/, `$1${d}`)
}

/**
 * GitHub Pages serves static files only. Instead of HashRouter or the 404-redirect trick,
 * emit a real `index.html` per known route (HTTP 200, clean URLs, per-route meta) and a
 * `404.html` fallback so unknown paths still boot the SPA and render its not-found view.
 */
export function routeShells(routes: RouteShell[]): Plugin {
  let config: ResolvedConfig
  return {
    name: 'press-start:route-shells',
    apply: 'build',
    configResolved(resolved) {
      config = resolved
    },
    async closeBundle() {
      const outDir = config.build.outDir
      const html = await readFile(join(outDir, 'index.html'), 'utf8')
      await Promise.all(
        routes.map(async (route) => {
          const dir = join(outDir, route.path)
          await mkdir(dir, { recursive: true })
          await writeFile(join(dir, 'index.html'), withMeta(html, route))
        }),
      )
      await writeFile(join(outDir, '404.html'), html)
    },
  }
}
