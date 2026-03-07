import { useScrollReveal } from '../hooks/useScrollReveal'

const products = [
  {
    number: '01',
    status: 'Production',
    title: 'Compliance Intelligence Platform',
    tagline: 'AI that reads your control environment so you don\'t have to.',
    desc: 'Ingests enterprise system exports and runs them through a structured LLM evaluation pipeline — automatically surfacing control gaps, configuration issues, and access anomalies. What used to take teams weeks of manual review is distilled into structured, audit-ready output in hours.',
    results: [
      { metric: '70%', label: 'Manual effort eliminated' },
      { metric: 'Hours', label: 'Not weeks' },
      { metric: 'Live', label: 'In production' },
    ],
    features: ['Control Gap Detection', 'Access Anomaly Flagging', 'AI Narrative Generation', 'Multi-LLM Pipeline'],
  },
  {
    number: '02',
    status: 'Active',
    title: 'Risk & Controls Accelerator',
    tagline: 'From risk identification to full control framework, in hours.',
    desc: 'An intelligent workflow engine that runs structured risk assessments, generates control frameworks across ITGC and business process domains, maps regulatory obligations to control activities, and identifies coverage gaps — replacing weeks of manual matrix development with guided AI output.',
    results: [
      { metric: '10x', label: 'Faster generation' },
      { metric: 'End-to-end', label: 'Risk to control' },
      { metric: 'Scalable', label: 'Enterprise-ready' },
    ],
    features: ['Risk Assessment Automation', 'Framework Generation', 'Regulatory Mapping', 'Gap Analysis'],
  },
]

const techStack = [
  { name: 'OpenAI', desc: 'GPT-4o, o1, o3' },
  { name: 'Anthropic', desc: 'Claude Sonnet & Opus' },
  { name: 'Google', desc: 'Gemini Pro' },
  { name: 'Python', desc: 'Backend & pipelines' },
  { name: 'React', desc: 'Frontend' },
  { name: 'Cursor AI', desc: 'Agentic development' },
]

function AICard({ product, index }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border border-border-light hover:border-primary/30 hover-card transition-all duration-700 flex flex-col ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Top accent bar */}
      <div className={`h-0.5 rounded-t-2xl ${product.status === 'Production' ? 'bg-success' : 'bg-primary/40'}`} />

      <div className="p-6 md:p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-bold text-text-muted tracking-widest">{product.number}</span>
          <span className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full ${
            product.status === 'Production'
              ? 'bg-success/10 text-success'
              : 'bg-primary-light text-primary'
          }`}>
            {product.status}
          </span>
        </div>

        <h3 className="font-display text-lg font-bold mb-1.5 tracking-tight text-text leading-snug">
          {product.title}
        </h3>
        <p className="text-xs font-semibold text-primary mb-4 leading-relaxed">{product.tagline}</p>
        <p className="text-sm leading-[1.75] text-text-secondary mb-6 flex-1">{product.desc}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-5 p-3 bg-surface-alt rounded-xl">
          {product.results.map((r) => (
            <div key={r.label} className="text-center">
              <span className="block text-base font-extrabold text-primary leading-tight">{r.metric}</span>
              <span className="block text-[9px] text-text-muted uppercase tracking-wide font-medium mt-0.5 leading-tight">{r.label}</span>
            </div>
          ))}
        </div>

        {/* Feature tags */}
        <div className="flex flex-wrap gap-1.5">
          {product.features.map((f) => (
            <span
              key={f}
              className="px-2.5 py-1 border border-border-light rounded-full text-[11px] font-medium text-text-secondary hover:border-primary/30 hover:text-primary hover-pop"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AILeadership() {
  const [labelRef, labelVis] = useScrollReveal()
  const [titleRef, titleVis] = useScrollReveal()
  const [introRef, introVis] = useScrollReveal()
  const [stackRef, stackVis] = useScrollReveal()

  return (
    <section id="ai-leadership" className="py-20 md:py-32 bg-surface-cool">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        <span
          ref={labelRef}
          className={`block text-xs font-semibold uppercase tracking-widest text-primary mb-4 transition-all duration-700 ${
            labelVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          AI & Automation
        </span>
        <h2
          ref={titleRef}
          className={`font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-6 text-text transition-all duration-700 ${
            titleVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          AI I've embedded<br />
          into compliance work.
        </h2>

        <div
          ref={introRef}
          className={`transition-all duration-700 ${introVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-lg text-text-secondary max-w-[700px] leading-relaxed mb-4">
            These are production systems — not demos. Each one automates a compliance workflow
            that previously required weeks of manual effort: assessing controls, identifying gaps,
            generating narratives, monitoring risk posture. Built end-to-end and actively deployed.
          </p>
          <p className="text-lg text-text-secondary max-w-[700px] leading-relaxed mb-10">
            I also co-led a strategic AI initiative at PwC — driving business development,
            designing proofs of concept, and expanding our service model into AI-enhanced
            risk and compliance engagements.
          </p>
        </div>

        {/* Tech stack */}
        <div ref={stackRef} className="flex flex-wrap gap-3 mb-14">
          <span
            className={`text-xs font-semibold uppercase tracking-widest text-text-muted self-center mr-2 transition-all duration-500 ${
              stackVis ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Built with
          </span>
          {techStack.map((t, i) => (
            <div
              key={t.name}
              className={`flex items-center gap-2 px-4 py-2 bg-white border border-border-light rounded-full hover:border-primary/30 hover-pop transition-all duration-500 ${
                stackVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: stackVis ? `${i * 60}ms` : '0ms' }}
            >
              <span className="text-sm font-semibold text-text">{t.name}</span>
              <span className="text-xs text-text-muted hidden sm:inline">— {t.desc}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {products.map((p, i) => (
            <AICard key={p.number} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
