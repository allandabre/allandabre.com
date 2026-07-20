import { useScrollReveal } from '../hooks/useScrollReveal'
import { featuredOutlets, publications, mediaQuotes, judgingRoles } from '../data/recognition'

function OutletBar() {
  const [ref, vis] = useScrollReveal()
  return (
    <div ref={ref} className={`flex flex-wrap justify-center gap-x-8 gap-y-3 mb-16 transition-all duration-700 ${vis ? 'opacity-100' : 'opacity-0'}`}>
      {featuredOutlets.map((o) => (
        <div key={o.name} className="flex flex-col items-center gap-1">
          <span className="font-display text-base font-bold text-text tracking-tight">{o.name}</span>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-primary">{o.role}</span>
        </div>
      ))}
    </div>
  )
}

function PublicationCard({ pub, index }) {
  const [ref, vis] = useScrollReveal()
  return (
    <a
      ref={ref}
      href={pub.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col bg-white rounded-2xl border border-border-light hover:border-primary/30 hover-card p-6 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-0.5 w-8 bg-primary rounded-full mb-4 group-hover:w-full transition-all duration-500" />
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-bold uppercase tracking-widest text-primary">{pub.outlet}</span>
        <span className="text-[11px] text-text-muted">{pub.date}</span>
      </div>
      <h3 className="font-display text-base font-bold text-text leading-snug mb-3 group-hover:text-primary transition-colors duration-200">{pub.title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed flex-1">{pub.summary}</p>
      <div className="flex items-center gap-1.5 mt-4 text-primary text-xs font-semibold">
        Read article
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
      </div>
    </a>
  )
}

function QuoteCard({ quote, index }) {
  const [ref, vis] = useScrollReveal()
  return (
    <a
      ref={ref}
      href={quote.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col bg-surface-warm rounded-2xl border border-border-light hover:border-primary/30 hover-card p-6 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span className="font-display text-4xl text-primary/20 font-bold leading-none mb-3 select-none">&ldquo;</span>
      <p className="font-display text-base font-semibold text-text leading-snug mb-4 flex-1 italic">{quote.quote}</p>
      <div>
        <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-light rounded-full mb-2">{quote.outlet}</span>
        <p className="text-sm text-text-secondary leading-relaxed mt-2">{quote.context}</p>
      </div>
    </a>
  )
}

function JudgingCard({ role }) {
  const [ref, vis] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`bg-dark rounded-2xl p-6 md:p-8 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary block mb-1">{role.org}</span>
          <h3 className="font-display text-xl font-bold text-white">{role.role}</h3>
          <p className="text-sm text-white/50 mt-1">{role.scope}</p>
        </div>
        <span className="shrink-0 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 rounded-full">{role.badge}</span>
      </div>
      <p className="text-sm text-white/60 leading-relaxed">{role.detail}</p>
    </div>
  )
}

export default function Recognition() {
  const [labelRef, labelVis] = useScrollReveal()
  const [titleRef, titleVis] = useScrollReveal()

  return (
    <section id="recognition" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span ref={labelRef} className={`block text-xs font-semibold uppercase tracking-widest text-primary mb-4 transition-all duration-700 ${labelVis ? 'opacity-100' : 'opacity-0'}`}>
            Industry Recognition
          </span>
          <h2 ref={titleRef} className={`font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-text transition-all duration-700 ${titleVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Published, quoted &amp; peer-reviewed
          </h2>
        </div>

        <OutletBar />

        {/* Published Work */}
        <div className="mb-16">
          <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6">Published Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {publications.map((p, i) => <PublicationCard key={p.url} pub={p} index={i} />)}
          </div>
        </div>

        {/* Media Quotes */}
        <div className="mb-16">
          <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6">Expert Commentary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mediaQuotes.map((q, i) => <QuoteCard key={q.url} quote={q} index={i} />)}
          </div>
        </div>

        {/* Judging */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6">Judging &amp; Peer Review</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {judgingRoles.map((r) => <JudgingCard key={r.scope} role={r} />)}
          </div>
        </div>

      </div>
    </section>
  )
}
