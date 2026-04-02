import { useEffect, useState } from 'react'
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal'
import { smoothScrollTo } from '../utils/smoothScroll'

const roles = [
  'Risk Assessment & Controls Design',
  'ITGC & Business Process Controls',
  'Control Execution & Testing',
  'AI-Powered Compliance Automation',
]

function RotatingText() {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    let timeoutId
    const interval = setInterval(() => {
      setShow(false)
      timeoutId = setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length)
        setShow(true)
      }, 400)
    }, 3000)
    return () => {
      clearInterval(interval)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <span
      className={`inline-block transition-all duration-400 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      }`}
    >
      {roles[index]}
    </span>
  )
}

function StatItem({ target, suffix = '', label, prefix = '' }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.5, once: false })
  const count = useCountUp(target, 2000, isVisible)

  return (
    <div ref={ref} className="text-center group cursor-default">
      <div className="flex items-baseline justify-center group-hover:scale-110 transition-transform duration-300">
        {prefix && <span className="font-display text-2xl md:text-3xl font-bold text-primary">{prefix}</span>}
        <span className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
          {count}
        </span>
        {suffix && (
          <span className="font-display text-2xl md:text-3xl font-bold text-primary">{suffix}</span>
        )}
      </div>
      <span className="block text-xs text-white/50 mt-1">{label}</span>
    </div>
  )
}

export default function Hero() {
  const [ref1, vis1] = useScrollReveal()
  const [ref2, vis2] = useScrollReveal()
  const [ref3, vis3] = useScrollReveal()
  const [ref4, vis4] = useScrollReveal()
  const [photoRef, photoVis] = useScrollReveal()
  return (
    <section id="hero" className="relative bg-dark pt-28 md:pt-36 pb-16 min-h-screen flex flex-col justify-center">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
        {/* Two-column layout: Text left, Video right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center mb-16">

          {/* Left — Intro text */}
          <div>
            {/* Badge */}
            <div
              ref={ref1}
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full text-xs font-medium text-primary mb-6 transition-all duration-700 ${
                vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Risk & Compliance Leader · 14+ Years in Risk & AI
            </div>

            {/* Title */}
            <h1 className="font-display font-extrabold leading-[0.95] tracking-tight mb-5">
              <span
                ref={ref2}
                className={`block text-[clamp(2.8rem,7vw,5rem)] text-white transition-all duration-700 delay-150 ${
                  vis2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Allan Dabre
              </span>
              <span
                className={`block text-[clamp(1rem,2vw,1.3rem)] font-semibold mt-3 h-[1.4em] text-primary transition-all duration-700 delay-300 ${
                  vis2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <RotatingText />
              </span>
            </h1>

            {/* Hook + closing line — full story lives in About */}
            <div
              ref={ref3}
              className={`max-w-[580px] mb-8 transition-all duration-700 delay-300 ${
                vis3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-base md:text-[17px] leading-relaxed text-white/60 mb-5">
                I own enterprise compliance and risk programs end-to-end: design control frameworks,
                build the automation that enforces them, and deploy AI that continuously monitors
                cloud environments — turning SoD violations, configuration drift, and code-level
                findings into quantified risk that leadership can act on.
              </p>
              <p className="text-lg md:text-xl leading-snug text-white/80">
                <span className="font-display font-semibold text-white">
                  Compliance is being reinvented.
                </span>{' '}
                <span className="text-primary font-semibold">I am one of the people doing it.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              ref={ref4}
              className={`flex gap-3 flex-wrap transition-all duration-700 delay-[450ms] ${
                vis4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <a
                href="#experience"
                onClick={(e) => { e.preventDefault(); smoothScrollTo('#experience') }}
                className="group px-7 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                See My Work
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); smoothScrollTo('#contact') }}
                className="px-7 py-3 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/allandabre/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — Photo */}
          <div
            ref={photoRef}
            className={`flex justify-center lg:justify-end transition-all duration-700 delay-300 ${
              photoVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20 ring-4 ring-white/5 hover-card">
              <img
                src="/allan%20dabre.jpg"
                alt="Allan Dabre"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Stats — full width below */}
        <div className="flex items-center justify-center gap-8 md:gap-14 flex-wrap pt-8 border-t border-white/5">
          <StatItem target={22} suffix="K+" label="Users governed" />
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <StatItem target={25} suffix="+" label="Enterprise systems assessed" />
          <div className="hidden sm:block w-px h-10 bg-white/10" />
          <StatItem target={70} suffix="%" label="Assessment effort reduced" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/30 text-xs uppercase tracking-widest hidden md:flex">
        <div className="relative w-px h-10 bg-white/10 overflow-hidden">
          <div className="absolute left-0 w-full h-full bg-primary animate-scroll-line" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
