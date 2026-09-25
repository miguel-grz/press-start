import { describe, expect, it } from 'vitest'
import { withMeta } from './routeShells.ts'

const shell = { path: 'console/nes', title: 'NES & friends', description: 'The "NES" <1983>' }

describe('withMeta', () => {
  it('replaces title, description and Open Graph tags, escaping HTML', () => {
    const html = `<title>Old</title>
    <meta
      name="description"
      content="old"
    />
    <meta property="og:title" content="old" />
    <meta property="og:description" content="old" />`
    const out = withMeta(html, shell)
    expect(out).toContain('<title>NES &amp; friends</title>')
    expect(out).toMatch(/name="description"\s+content="The &quot;NES&quot; &lt;1983&gt;"/)
    expect(out).toContain('og:title" content="NES &amp; friends"')
    expect(out).toContain('og:description" content="The &quot;NES&quot; &lt;1983&gt;"')
    expect(out).not.toContain('"old"')
  })
})
