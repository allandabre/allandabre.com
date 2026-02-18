import { useScrollReveal, useCountUp } from '../hooks/useScrollReveal'

const impactMetrics = [
  { value: 5, prefix: '$', suffix: 'M+', label: 'Programs Directed' },
  { value: 15, prefix: '$', suffix: 'M', label: 'Efficiency Gains' },
  { value: 22, suffix: 'K+', label: 'Users Governed' },
  { value: 70, suffix: '%', label: 'Effort Reduced via AI' },
]

function ImpactCounter({ value, prefix = '', suffix = '', label }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.5 })
  const count = useCountUp(value, 1800, isVisible)

  return (
    <div ref={ref} className="text-center px-4 group">
      <div className="flex items-baseline justify-center group-hover:scale-110 transition-transform duration-300">
        {prefix && <span className="font-display text-2xl md:text-3xl font-bold text-primary">{prefix}</span>}
        <span className="font-display text-3xl md:text-5xl font-extrabold text-text">{count}</span>
        {suffix && <span className="font-display text-xl md:text-2xl font-bold text-primary">{suffix}</span>}
      </div>
      <span className="block text-xs text-text-muted mt-1.5 font-medium uppercase tracking-wider">{label}</span>
    </div>
  )
}

const jobs = [
  {
    date: 'June 2015 — Present',
    company: 'PwC Consulting',
    location: 'USA',
    role: 'Senior Manager — Risk & Compliance',
    duration: '10+ years',
    summary: 'Leading enterprise-wide risk and compliance programs end-to-end -- conducting risk assessments, designing and implementing ITGCs and business process controls, directing control testing programs, and building AI-powered tools that automate compliance workflows. Directing $5M+ engagements and reporting to executive leadership.',
    bullets: [
      { text: 'Conducted comprehensive risk assessments across financial reporting, technology, and operational domains -- evaluating inherent risk, control effectiveness, and residual risk to define scoping and prioritize audit focus areas for SOX engagements.', impact: 'Risk assessment leadership' },
      { text: 'Designed and implemented IT General Controls (ITGCs) covering access management, change management, IT operations, and system development lifecycle (SDLC) across Salesforce, SAP ERP, and 25+ ancillary financial systems.', impact: 'ITGC across 25+ systems' },
      { text: 'Architected business process controls across revenue, order-to-cash, procure-to-pay, and financial close cycles -- including segregation of duties, three-way matching, management review controls, and automated application controls embedded in ERP workflows.', impact: 'End-to-end process controls' },
      { text: 'Led control execution and testing programs defining test plans, sampling methodologies, and evidence standards. Coordinated walkthroughs and operating effectiveness testing with internal teams and external auditors, managing remediation of identified deficiencies.', impact: 'Full testing lifecycle' },
      { text: 'Engineered cross-system control linkages governing 22,000+ users, ensuring consistent access provisioning, periodic recertification, and automated deprovisioning across integrated ERP and CRM environments.', impact: '22K+ users governed' },
      { text: 'Built SOX controls over Information Produced by the Entity (IPE), standardizing validation procedures and data integrity checks across 25+ cross-system interfaces to ensure completeness and accuracy of reports used in control execution.', impact: '25+ interface validations' },
      { text: 'Designed and shipped AI-driven compliance tools integrating LLMs (OpenAI, Anthropic, Google) with ERP/CRM data -- automating control assessment, detecting configuration anomalies, generating risk narratives, and reducing manual review cycles by 70%.', impact: '70% effort reduction' },
      { text: 'Optimized enterprise risk governance through 30+ cross-functional workshops across revenue and order-to-cash processes, embedding automated control enhancements that delivered $15M in documented efficiency gains.', impact: '$15M efficiency gains' },
      { text: 'Built second line of defense frameworks for high-growth technology clients including telehealth and EV manufacturers -- designing risk assessment methodologies and control monitoring approaches that scale with hypergrowth.', impact: 'High-growth tech clients' },
      { text: 'Applied Agile delivery practices within compliance programs, embedding sprint-based checkpoints and iterative control design cycles that improved adaptability and reduced project delays by 15%.', impact: '15% fewer delays' },
    ],
    tags: ['Risk Assessment', 'ITGC', 'Business Process Controls', 'Control Testing', 'SOX', 'Salesforce', 'SAP ERP', 'AI/LLMs', 'Agile'],
    showLine: true,
  },
  {
    date: 'March 2010 — August 2013',
    company: 'Accenture',
    location: 'Mumbai, India',
    role: 'Technical Product Specialist',
    duration: '3+ years',
    summary: 'Building the technical foundations in fraud prevention, enterprise security architecture, control design, and systems implementation that became the bedrock of my career in risk and compliance.',
    bullets: [
      { text: 'Developed fraud prevention frameworks with both automated application controls and manual detective controls -- designing a pricing override governance model with approval workflows, exception reporting, and audit trails that delivered $5M in savings.', impact: '$5M in savings' },
      { text: 'Redesigned Salesforce security architecture by implementing role-based access controls (RBAC), optimizing permission sets and profiles, and embedding automated periodic access reviews and recertification processes that reduced access-related incidents by 40%.', impact: '40% fewer incidents' },
      { text: 'Built enterprise KRI tracking and continuous control monitoring frameworks, defining key risk indicators, control thresholds, and escalation procedures. Delivered real-time dashboards that improved control assessment precision by 30%.', impact: '30% precision gain' },
      { text: 'Created 10+ detailed technical specifications for control configurations within SAP EHS modules. Designed test scripts, conducted user acceptance testing, and led end-user training to ensure effective control adoption across business units.', impact: '10+ specifications' },
    ],
    tags: ['Salesforce', 'SAP EHS', 'Fraud Prevention', 'RBAC', 'KRI Monitoring', 'Access Controls', 'Control Testing'],
    showLine: false,
  },
]

function BulletItem({ text, impact }) {
  return (
    <div className="flex items-start gap-2.5">
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-primary shrink-0 mt-0.5">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <div className="flex-1">
        <span className="text-sm text-text-secondary leading-relaxed">{text}</span>
        {impact && (
          <span className="inline-block ml-2 px-2 py-0.5 text-[10px] font-semibold text-primary bg-primary-light rounded-full">
            {impact}
          </span>
        )}
      </div>
    </div>
  )
}

function TimelineItem({ job, index }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`flex gap-4 md:gap-8 mb-8 last:mb-0 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Marker — enhanced with ring */}
      <div className="hidden sm:flex flex-col items-center shrink-0 pt-2">
        <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20 z-10" />
        {job.showLine && <div className="w-px flex-1 bg-border mt-2" />}
      </div>

      {/* Content card */}
      <div className="flex-1 bg-white p-6 md:p-8 rounded-2xl border border-border-light hover:border-primary/30 hover-card">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
          <div>
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              {job.date}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mt-1 text-text">
              {job.company}
            </h3>
            <span className="text-[15px] text-text-secondary font-medium">{job.role}</span>
            <span className="text-sm text-text-muted ml-2">· {job.location}</span>
          </div>
          <span className="text-xs font-semibold text-primary bg-primary-light px-4 py-1.5 rounded-full whitespace-nowrap">
            {job.duration}
          </span>
        </div>

        <p className="text-[15px] leading-[1.7] text-text-secondary mb-5 font-medium">{job.summary}</p>

        <div className="mb-5 space-y-3">
          {job.bullets.map((b) => (
            <BulletItem key={b.impact} text={b.text} impact={b.impact} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface-alt text-text-secondary text-xs font-medium rounded-full border border-border-light hover:border-primary/30 hover:text-primary hover-pop"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [labelRef, labelVis] = useScrollReveal()
  const [titleRef, titleVis] = useScrollReveal()
  const [metricsRef, metricsVis] = useScrollReveal()

  return (
    <section id="experience" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <span
          ref={labelRef}
          className={`block text-xs font-semibold uppercase tracking-widest text-primary mb-4 transition-all duration-700 ${
            labelVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Experience
        </span>
        <h2
          ref={titleRef}
          className={`font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-6 text-text transition-all duration-700 ${
            titleVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          14+ years of impact<br />
          across regulated industries.
        </h2>

        {/* Impact metrics banner — enhanced hierarchy */}
        <div
          ref={metricsRef}
          className={`flex items-center justify-between gap-4 flex-wrap p-8 md:p-10 bg-surface-alt rounded-2xl border border-border-light mb-12 transition-all duration-700 ${
            metricsVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-4 md:gap-10 flex-wrap flex-1">
            {impactMetrics.map((m, i) => (
              <div key={m.label} className="flex items-center gap-4 md:gap-10">
                <ImpactCounter {...m} />
                {i < impactMetrics.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          {jobs.map((job, i) => (
            <TimelineItem key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
