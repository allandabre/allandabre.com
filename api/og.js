import { ImageResponse } from '@vercel/og'

const POSTS = {
  'shiny-hunters-salesforce-security': {
    label: 'INSIGHTS',
    title: 'The Simplest Attack.\nThe Biggest Blind Spot.',
    subtitle: 'Why the breach is usually identity, access, and configuration — not the platform.',
    meta: 'March 2026  ·  8 min read',
  },
}

const HOME = {
  label: 'PORTFOLIO',
  title: 'Allan Dabre',
  subtitle: 'Risk, Compliance & AI Leader',
  meta: '14+ years in enterprise risk & AI',
}

export default async function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const slug = url.searchParams.get('slug')
  const post = POSTS[slug] ?? HOME
  const isPost = Boolean(POSTS[slug])

  let fontData = null
  try {
    const css = await fetch(
      'https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap',
      { headers: { 'User-Agent': 'Mozilla/5.0 (compatible)' } }
    ).then((r) => r.text())
    const fontUrl = css.match(/src: url\(([^)]+)\) format\('woff2'\)/)?.[1]
    if (fontUrl) fontData = await fetch(fontUrl).then((r) => r.arrayBuffer())
  } catch { /* falls back to default font */ }

  // Satori rules: every div with >1 child needs display:flex; no inset shorthand
  const tree = {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        width: '1200px',
        height: '630px',
        backgroundColor: '#18181b',
        position: 'relative',
        overflow: 'hidden',
      },
      children: [
        // Subtle grid overlay
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              position: 'absolute',
              top: 0, right: 0, bottom: 0, left: 0,
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            },
          },
        },
        // Teal left accent bar
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              position: 'absolute',
              left: '80px',
              top: '160px',
              width: '4px',
              height: isPost ? '220px' : '160px',
              backgroundColor: '#0d9488',
              borderRadius: '2px',
            },
          },
        },
        // Main content column
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              paddingTop: '80px',
              paddingRight: '80px',
              paddingBottom: '72px',
              paddingLeft: '108px',
              flex: 1,
              position: 'relative',
            },
            children: [
              // Label
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontSize: '13px',
                    fontWeight: '700',
                    letterSpacing: '0.18em',
                    color: '#0d9488',
                    textTransform: 'uppercase',
                    marginBottom: '40px',
                  },
                  children: post.label,
                },
              },
              // Title
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontSize: isPost ? '58px' : '72px',
                    fontWeight: '700',
                    color: 'white',
                    lineHeight: '1.1',
                    marginBottom: '28px',
                    maxWidth: '960px',
                    whiteSpace: 'pre-wrap',
                  },
                  children: post.title,
                },
              },
              // Subtitle
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    fontSize: '22px',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: '1.5',
                    maxWidth: '820px',
                    flex: 1,
                  },
                  children: post.subtitle,
                },
              },
              // Footer row
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: { display: 'flex', fontSize: '17px', color: 'rgba(255,255,255,0.3)' },
                        children: post.meta,
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: { display: 'flex', fontSize: '17px', color: 'rgba(255,255,255,0.3)' },
                        children: 'allandabre.com',
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  }

  const imageResponse = new ImageResponse(tree, {
    width: 1200,
    height: 630,
    ...(fontData ? { fonts: [{ name: 'Inter', data: fontData, weight: 700, style: 'normal' }] } : {}),
  })

  const buffer = Buffer.from(await imageResponse.arrayBuffer())
  res.setHeader('Content-Type', 'image/png')
  res.setHeader('Cache-Control', 'public, max-age=86400, immutable')
  res.status(200).end(buffer)
}
