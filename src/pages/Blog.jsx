/**
 * =============================================================================
 * Blog.jsx — Blog index and article routes
 * =============================================================================
 *
 * PURPOSE:
 * Renders /blog listing (compact title + latest post) and /blog/:slug articles.
 *
 * RESPONSIBILITIES:
 * - Map pathname to slug; render Shiny Hunters post or 404-style empty state
 * - Blog index: navigation back to portfolio, title, latest article card, LinkedIn CTA
 *
 * DEPENDENCIES:
 * - Used by: App routing
 * - Depends on: useNavigation, ShinyHuntersSalesforce, shinyHuntersPostMeta
 *
 * =============================================================================
 */
import { useEffect, useState } from 'react'
import { useNavigation } from '../context/useNavigation'
import ShinyHuntersSalesforce from './blog/ShinyHuntersSalesforce'
import { shinyHuntersPostMeta, SHINY_HUNTERS_POST_SLUG } from './blog/shinyHuntersPostMeta'

function getSlugFromPathname(pathname) {
  const p = pathname.replace(/\/$/, '') || '/'
  if (p === '/blog') return null
  if (p.startsWith('/blog/')) return p.slice('/blog/'.length)
  return null
}

function BlogLanding({ loaded, navigate }) {
  return (
    <div className="flex-1 flex flex-col max-w-[860px]">
      <header
        className={`mb-8 transition-all duration-500 delay-75 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Insights</span>
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
          Blog
        </h1>
      </header>

      <div className="border-t border-white/10 pt-8 mt-8">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Latest</h2>
        <button
          type="button"
          onClick={() => navigate(`/blog/${SHINY_HUNTERS_POST_SLUG}`)}
          className="group text-left w-full p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
        >
          <span className="block text-sm text-white/35 mb-2">{shinyHuntersPostMeta.date}</span>
          <span className="block font-display text-xl text-white font-semibold group-hover:text-primary transition-colors">
            {shinyHuntersPostMeta.title}
          </span>
          <span className="block text-sm text-white/45 mt-2 leading-relaxed">{shinyHuntersPostMeta.subtitle}</span>
          <span className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-primary">
            Read article
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>

      <div
        className={`flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-12 transition-all duration-500 delay-200 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <span className="text-sm text-white/35 font-medium max-w-[320px] leading-relaxed">
          More commentary on LinkedIn — follow for updates between posts.
        </span>
        <a
          href="https://www.linkedin.com/in/allandabre/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-5 py-2.5 border border-white/15 rounded-full text-sm font-semibold text-white/50 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Follow on LinkedIn
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

function BlogContent({ navigate, slug }) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  if (slug === SHINY_HUNTERS_POST_SLUG) {
    return (
      <section className="relative bg-dark min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col flex-1 max-w-[1200px] mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
          <div
            className={`transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <ShinyHuntersSalesforce onBack={() => navigate('/blog')} />
          </div>
        </div>
      </section>
    )
  }

  if (slug && slug !== SHINY_HUNTERS_POST_SLUG) {
    return (
      <section className="relative bg-dark min-h-screen flex flex-col items-center justify-center px-6">
        <p className="text-white/60 mb-6">No article found.</p>
        <button
          type="button"
          onClick={() => navigate('/blog')}
          className="text-primary font-semibold hover:underline"
        >
          Back to insights
        </button>
      </section>
    )
  }

  return (
    <section className="relative bg-dark min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1 max-w-[1200px] mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <button
          type="button"
          onClick={() => navigate('/')}
          className={`group flex items-center gap-2 text-sm text-white/30 hover:text-primary transition-all duration-500 mb-10 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Portfolio
        </button>

        <BlogLanding loaded={loaded} navigate={navigate} />
      </div>
    </section>
  )
}

export default function Blog() {
  const { navigate, pathname } = useNavigation()
  const slug = getSlugFromPathname(pathname)
  return <BlogContent key={pathname} navigate={navigate} slug={slug} />
}
