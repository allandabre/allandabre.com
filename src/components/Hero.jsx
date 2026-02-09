import { useEffect, useState } from 'react'
import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal'

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
  const [ref, isVisible] = useScrollReveal({ threshold: 0.5 })
  const count = useCountUp(target, 2000, isVisible)

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center">
        {prefix && <span className="font-display text-3xl md:text-4xl font-bold text-primary">{prefix}</span>}
        <span className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
          {count}
        </span>
        {suffix && (
          <span className="font-display text-3xl md:text-4xl font-bold text-primary">{suffix}</span>
        )}
      </div>
      <span className="block text-sm text-white/50 mt-1">{label}</span>
    </div>
  )
}

export default function Hero() {
  const [ref1, vis1] = useScrollReveal()
  const [ref2, vis2] = useScrollReveal()
  const [ref3, vis3] = useScrollReveal()
  const [ref4, vis4] = useScrollReveal()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-dark pt-24 pb-16">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-[850px] px-6">
        {/* Badge */}
        <div
          ref={ref1}
          className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full text-xs font-medium text-primary mb-8 transition-all duration-700 ${
            vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Risk & Compliance Leader at PwC · 14+ Years in Risk & AI
        </div>

        {/* Title */}
        <h1 className="font-display font-extrabold leading-[0.95] tracking-tight mb-6">
          <span
            ref={ref2}
            className={`block text-[clamp(3.5rem,10vw,7rem)] text-white transition-all duration-700 delay-150 ${
              vis2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Allan Dabre
          </span>
          <span
            className={`block text-[clamp(1.1rem,2.5vw,1.5rem)] font-semibold mt-4 h-[1.4em] text-primary transition-all duration-700 delay-300 ${
              vis2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <RotatingText />
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={ref3}
          className={`text-lg md:text-xl leading-relaxed text-white/60 max-w-[700px] mx-auto mb-10 transition-all duration-700 delay-300 ${
            vis3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          I turn risk into resilience. From enterprise risk assessments to
          IT general controls and business process control design, I build the
          control frameworks that keep organizations compliant with SOX, GDPR,
          HIPAA, and PCI DSS. I also leverage AI — using large language models
          to automate control assessments, detect anomalies, and generate
          structured compliance insights that cut weeks of manual work down
          to hours. End-to-end control execution, testing, and intelligent
          automation across the most complex regulated environments in the world.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ref4}
          className={`flex gap-4 justify-center flex-wrap mb-20 transition-all duration-700 delay-[450ms] ${
            vis4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group px-8 py-3.5 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            See My Work
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3.5 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/allandabre/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 text-white border border-white/20 rounded-full font-semibold text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
          <StatItem prefix="$" target={15} suffix="M" label="Efficiency gains delivered" />
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <StatItem target={22} suffix="K+" label="Users governed" />
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          <StatItem target={70} suffix="%" label="Manual effort reduced" />
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
