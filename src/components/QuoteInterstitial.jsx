import { useScrollReveal } from '../hooks/useScrollReveal'
import { mediaQuotes } from '../data/recognition'

function QuoteCard({ item, index }) {
  const [ref, vis] = useScrollReveal({ threshold: 0.15 })
  return (
    <a
      ref={ref}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={"group flex flex-col justify-between p-8 md:p-10 border border-white/10 rounded-2xl hover:border-primary/40 transition-all duration-500 " + (vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
      style={{ transitionDelay: vis ? index * 120 + "ms" : "0ms" }}
    >
      <div>
        <div className="font-display text-5xl leading-none text-primary/20 font-bold mb-4 select-none" aria-hidden="true">&ldquo;</div>
        <blockquote className="font-display text-[clamp(1rem,2vw,1.2rem)] font-semibold leading-[1.6] text-white group-hover:text-white/90 transition-colors duration-300 mb-6">
          {item.quote}
        </blockquote>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="w-6 h-px bg-primary/60" />
          <span className="text-sm font-bold text-primary tracking-wide">{item.outlet}</span>
        </div>
        <p className="text-sm text-white/45 leading-relaxed pl-9">{item.context}</p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary/60 group-hover:text-primary transition-colors duration-200 mt-2 pl-9">
          Read article
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </span>
      </div>
    </a>
  )
}

export default function QuoteInterstitial() {
  const [ref, vis] = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="quote" className="bg-dark relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={"text-center mb-14 transition-all duration-700 " + (vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
        >
          <span className="block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
            Industry Recognition
          </span>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-tight text-white">
            Cited by industry media
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mediaQuotes.map((q, i) => (
            <QuoteCard key={q.outlet} item={q} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
