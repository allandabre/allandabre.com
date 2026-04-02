/**
 * prerender.mjs — Post-build meta tag injection
 *
 * Reads dist/index.html and writes per-route HTML files with correct OG/Twitter
 * meta tags for each blog post. Vercel serves static files before applying
 * rewrites, so crawlers (LinkedIn, Twitter, etc.) get the right tags without
 * the React app needing to execute.
 *
 * Run via: node scripts/prerender.mjs
 * Called automatically from: npm run build
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const BASE_URL = 'https://allandabre.com'

const ROUTES = [
  {
    path: '/blog',
    title: 'Blog — Allan Dabre',
    description: 'Insights on enterprise risk, AI, and security from Allan Dabre.',
    ogImage: `${BASE_URL}/api/og`,
    ogUrl: `${BASE_URL}/blog`,
  },
  {
    path: '/blog/shiny-hunters-salesforce-security',
    title: 'The Simplest Attack. The Biggest Blind Spot. — Allan Dabre',
    description: 'Why the breach is usually identity, access, and configuration — not the platform. What recent Salesforce attacks reveal and what to do about it.',
    ogImage: `${BASE_URL}/api/og?slug=shiny-hunters-salesforce-security&v=2`,
    ogUrl: `${BASE_URL}/blog/shiny-hunters-salesforce-security`,
  },
]

const template = readFileSync(join(DIST, 'index.html'), 'utf-8')

function injectMeta(html, { title, description, ogImage, ogUrl }) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${title}" />`
    )
    .replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${description}" />`
    )
    .replace(
      /<meta property="og:url"[^>]*>/,
      `<meta property="og:url" content="${ogUrl}" />`
    )
    .replace(
      /<meta property="og:image"[^>]*>/,
      `<meta property="og:image" content="${ogImage}" />`
    )
    .replace(
      /<meta name="twitter:title"[^>]*>/,
      `<meta name="twitter:title" content="${title}" />`
    )
    .replace(
      /<meta name="twitter:description"[^>]*>/,
      `<meta name="twitter:description" content="${description}" />`
    )
    .replace(
      /<meta name="twitter:image"[^>]*>/,
      `<meta name="twitter:image" content="${ogImage}" />`
    )
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${description}" />`
    )
}

for (const route of ROUTES) {
  const outDir = join(DIST, route.path)
  mkdirSync(outDir, { recursive: true })
  const html = injectMeta(template, route)
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8')
  console.log(`prerendered: ${route.path}`)
}

console.log(`\n✓ prerender complete — ${ROUTES.length} routes`)
