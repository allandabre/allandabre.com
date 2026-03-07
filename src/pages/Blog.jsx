import { useEffect, useState } from 'react'
import { useNavigation } from '../context/NavigationContext'

const topics = [
  'AI in Compliance', 'LLM Architecture', 'SOX Automation',
  'Enterprise Risk', 'ITGC & Controls', 'Agentic AI',
]

export default function Blog() {
  const { navigate } = useNavigation()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative bg-dark min-h-screen flex flex-col overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark to-transparent pointer-events-none" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1 max-w-[1200px] mx-auto px-6 lg:px-8 w-full pt-32 pb-20">

        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className={`group flex items-center gap-2 text-sm text-white/30 hover:text-primary transition-all duration-500 mb-20 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Portfolio
        </button>

        {/* Main content — vertically centred */}
        <div className="flex-1 flex flex-col justify-center max-w-[860px]">

          {/* Label */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 delay-100 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="w-8 h-px bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Insights
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-extrabold leading-[0.92] tracking-tight mb-10 transition-all duration-700 delay-[200ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block text-[clamp(3rem,8vw,6rem)] text-white">
              Where risk expertise
            </span>
            <span className="block text-[clamp(3rem,8vw,6rem)] text-primary">
              meets AI thinking.
            </span>
          </h1>

          {/* Decorative line */}
          <div
            className={`flex items-center gap-4 mb-10 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" style={{ boxShadow: '0 0 8px rgba(13,148,136,0.3)' }} />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" style={{ boxShadow: '0 0 8px rgba(13,148,136,0.6)' }} />
          </div>

          {/* Subtext */}
          <p
            className={`text-xl md:text-2xl text-white/45 leading-[1.6] font-light max-w-[680px] mb-14 transition-all duration-700 delay-[350ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Practical writing on AI in compliance, building LLM pipelines for
            enterprise risk, and what actually works when you sit at the
            intersection of SOX, ITGC, and generative AI.
          </p>

          {/* Topic pills */}
          <div
            className={`flex flex-wrap gap-2.5 mb-16 transition-all duration-700 delay-[450ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {topics.map((t, i) => (
              <span
                key={t}
                className="px-4 py-1.5 border border-white/10 rounded-full text-xs font-medium text-white/35 hover:border-primary/40 hover:text-primary transition-all duration-300"
                style={{ transitionDelay: `${500 + i * 50}ms` }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-all duration-700 delay-[600ms] ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-sm text-white/25 font-medium">Articles dropping soon —</span>
            <a
              href="https://www.linkedin.com/in/allandabre/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-5 py-2.5 border border-white/15 rounded-full text-sm font-semibold text-white/50 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Follow on LinkedIn
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
