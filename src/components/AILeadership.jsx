import { useScrollReveal } from '../hooks/useScrollReveal'

const products = [
  {
    number: '01',
    status: 'Production',
    title: 'Security & Compliance Analytics Suite',
    tagline: 'Automated control assessment across enterprise systems.',
    desc: 'An AI-powered suite of tools that takes ERP and CRM data as input, runs it through LLMs to evaluate ITGC configurations, detect access management anomalies, identify hard-coded dependencies, and flag control gaps -- then presents the results in structured, actionable formats. It automates the review work that typically takes teams weeks.',
    results: [
      { metric: '70%', label: 'Manual effort eliminated' },
      { metric: 'Real-time', label: 'Cross-system visibility' },
      { metric: 'Production', label: 'Deployed & active' },
    ],
    features: ['LLM Integration (GPT-4o, Claude, Gemini)', 'ITGC Configuration Analysis', 'Access Anomaly Detection', 'Automated Narrative Generation'],
  },
  {
    number: '02',
    status: 'Active',
    title: 'Risk Assessment & Controls Framework Engine',
    tagline: 'From risk identification to control design, accelerated by AI.',
    desc: 'An intelligent engine that conducts risk assessments, generates tailored control frameworks for both ITGCs and business process controls, and maps regulatory requirements to specific control activities. It identifies coverage gaps across access management, change management, revenue, and financial close cycles -- turning weeks of manual risk-control matrix development into hours.',
    results: [
      { metric: '10x', label: 'Faster framework generation' },
      { metric: 'AI-driven', label: 'Gap identification' },
      { metric: 'Enterprise', label: 'Scale ready' },
    ],
    features: ['Risk Assessment Automation', 'ITGC & Process Control Mapping', 'Gap Analysis', 'Risk-Control Matrix Generation'],
  },
  {
    number: '03',
    status: 'Active',
    title: 'Executive KRI Dashboard & Monitoring Suite',
    tagline: 'Continuous control monitoring and compliance posture reporting.',
    desc: 'A real-time dashboard that tracks key risk indicators across ITGC and business process control domains, monitors control execution status, and surfaces testing exceptions. Built for Audit Committees and executive leadership to maintain immediate visibility into control health, remediation progress, and overall compliance posture.',
    results: [
      { metric: '30%', label: 'Precision improvement' },
      { metric: 'Real-time', label: 'Risk indicator tracking' },
      { metric: 'Executive', label: 'Ready reporting' },
    ],
    features: ['Live KRI Dashboards', 'Control Execution Tracking', 'Testing Exception Monitoring', 'Audit Committee Reporting'],
  },
]

const techStack = [
  { name: 'Cursor AI', desc: 'Agentic development' },
  { name: 'OpenAI', desc: 'GPT-4o, o1, o3' },
  { name: 'Anthropic', desc: 'Claude Sonnet & Opus' },
  { name: 'Google', desc: 'Gemini Pro & Ultra' },
  { name: 'React', desc: 'Frontend' },
  { name: 'Python', desc: 'Backend & ML' },
]

function AICard({ product }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-6 md:p-8 border border-border-light hover:border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-bold text-text-muted tracking-widest">{product.number}</span>
        <span className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full ${
          product.status === 'Production'
            ? 'bg-success/10 text-success'
            : 'bg-primary-light text-primary'
        }`}>
          {product.status}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold mb-1 tracking-tight text-text">
        {product.title}
      </h3>
      <p className="text-sm font-medium text-primary mb-4">{product.tagline}</p>
      <p className="text-sm leading-[1.7] text-text-secondary mb-6">{product.desc}</p>

      {/* Results grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 bg-surface-alt rounded-xl">
        {product.results.map((r) => (
          <div key={r.label} className="text-center">
            <span className="block text-lg font-bold text-text">{r.metric}</span>
            <span className="block text-[11px] text-text-muted uppercase tracking-wider font-medium mt-0.5">{r.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {product.features.map((f) => (
          <span
            key={f}
            className="px-3 py-1 border border-border-light rounded-full text-xs font-medium text-text-secondary"
          >
            {f}
          </span>
        ))}
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
          AI products I've<br />
          built and shipped.
        </h2>
        <p
          ref={introRef}
          className={`text-lg text-text-secondary max-w-[700px] leading-relaxed mb-4 transition-all duration-700 ${
            introVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          I build production AI systems that automate real compliance workflows -- from
          control assessment and risk narrative generation to anomaly detection across
          enterprise ERP and CRM systems. These tools handle tasks like evaluating
          ITGC configurations, flagging access management exceptions, and accelerating
          testing cycles that traditionally require weeks of manual review.
        </p>
        <p
          className={`text-lg text-text-secondary max-w-[700px] leading-relaxed mb-10 transition-all duration-700 delay-100 ${
            introVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          At PwC, I co-led a strategic AI initiative driving business development,
          proof-of-concept design, and practice growth strategies that expanded our
          service offerings into AI-enhanced risk and compliance solutions.
        </p>

        {/* Tech stack */}
        <div
          ref={stackRef}
          className={`flex flex-wrap gap-3 mb-14 transition-all duration-700 ${
            stackVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-text-muted self-center mr-2">Built with</span>
          {techStack.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-border-light rounded-full hover:border-border transition-colors"
            >
              <span className="text-sm font-semibold text-text">{t.name}</span>
              <span className="text-xs text-text-muted hidden sm:inline">— {t.desc}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <AICard key={p.number} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
