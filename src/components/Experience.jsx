import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'


const jobs = [
  {
    date: 'June 2015 — Present',
    company: 'PwC Consulting',
    location: 'USA',
    role: 'Leader — Risk & Compliance',
    duration: '10+ years',
    summary:
      'Ten years at PwC directing the most complex end of enterprise risk and compliance: the programs other firms hand off and the technology environments most auditors avoid. Brought in where the stakes are highest: large-scale transformations, high-growth companies under regulatory pressure, and environments where the control frameworks did not yet exist.',
    bullets: [
      { text: 'Directed enterprise risk and compliance engagements exceeding $5M, scoping programs, leading multi-disciplinary teams, and reporting outcomes directly to C-suite and board-level stakeholders across technology, healthcare, and consumer industries.', impact: '$5M+ programs directed' },
      { text: 'Conducted enterprise risk assessments across financial reporting, technology, and operational domains, evaluating inherent risk, control effectiveness, and residual risk to define SOX scoping and prioritize audit focus for complex multi-system environments.', impact: 'Risk assessment leadership' },
      { text: 'Designed and implemented IT General Controls covering access management, change management, IT operations, and SDLC across more than 25 enterprise systems, ensuring controls were structured to operate effectively and withstand external audit scrutiny.', impact: 'ITGC across 25+ systems' },
      { text: 'Architected business process controls across revenue, order-to-cash, procure-to-pay, and financial close cycles, embedding segregation of duties, three-way matching, management review controls, and automated application controls directly into ERP workflows.', impact: 'End-to-end process controls' },
      { text: 'Engineered cross-system access governance covering more than 22,000 users, standardizing provisioning, periodic recertification, and automated deprovisioning across integrated enterprise environments to eliminate access risk at scale.', impact: '22K+ users governed' },
      { text: 'Delivered multi-million dollar efficiency gains through more than 30 cross-functional process workshops, embedding automated control enhancements that reduced manual effort and improved control reliability across revenue and financial close cycles.', impact: 'Multi-million efficiency gains' },
      { text: 'Built second-line-of-defense risk frameworks for high-growth technology companies including telehealth and EV manufacturers, designing control monitoring approaches and risk assessment methodologies that scale with rapid growth and regulatory change.', impact: 'High-growth tech clients' },
      { text: 'Led integration testing and data conversion validation for complex ERP and CRM transformation programs, defining test strategies, verifying completeness and accuracy of migrated data, and ensuring controls were operating effectively before and after system go-live.', impact: 'Integration testing leadership' },
      { text: 'Led a firm-wide strategic AI initiative, designing proofs of concept and expanding the compliance practice into AI-enhanced risk and controls engagements across new markets.', impact: 'AI initiative leadership' },
    ],
    tags: ['Risk Assessment', 'ITGC', 'Business Process Controls', 'AI/LLMs', 'SOX', 'Control Testing', 'Salesforce', 'SAP ERP', 'Agile'],
    showLine: true,
    /** 0 = summary only until expanded; then all bullets. */
    collapseAfter: 0,
  },
  {
    date: 'March 2010 — August 2013',
    company: 'Accenture',
    location: 'Mumbai, India',
    role: 'Technical Product Analyst',
    duration: '3+ years',
    summary: 'Technical product analyst responsible for SAP implementation: translating business requirements into detailed product specifications, configuring module functionality, and driving end-to-end user acceptance testing and adoption for enterprise clients.',
    bullets: [
      { text: 'Authored more than 10 detailed technical product specifications for SAP module configurations, covering functional requirements, system behavior, control logic, and acceptance criteria aligned to client business processes.', impact: '10+ specs delivered' },
      { text: 'Led requirements gathering workshops with business stakeholders to capture process flows, edge cases, and system constraints, translating outputs into structured functional specifications consumed by offshore development teams.', impact: 'Requirements leadership' },
      { text: 'Coordinated end-to-end user acceptance testing across multiple SAP modules, building test scripts, managing defect triage, and working with stakeholders to validate system behavior against documented requirements.', impact: 'UAT ownership' },
      { text: 'Delivered end-user training and change management support across business units, driving adoption of newly configured SAP modules and ensuring users operated within defined process and compliance boundaries.', impact: 'Training and adoption' },
    ],
    tags: ['SAP', 'Requirements Gathering', 'Product Specifications', 'UAT', 'Functional Design', 'Change Management'],
    showLine: false,
    collapseAfter: 0,
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
  const [expanded, setExpanded] = useState(false)
  const cap = job.collapseAfter
  const bullets = job.bullets
  /** collapseAfter 0 = hide all bullets until expand; N>0 = show first N until expand. */
  const hasCollapse =
    typeof cap === 'number' && bullets.length > 0 && (cap === 0 || bullets.length > cap)
  const shownBullets =
    hasCollapse && !expanded ? bullets.slice(0, cap) : bullets
  const hiddenCount = hasCollapse ? bullets.length - (expanded ? bullets.length : cap) : 0

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
          {shownBullets.map((b, i) => (
            <BulletItem key={i} text={b.text} impact={b.impact} />
          ))}
        </div>

        {hasCollapse && (
          <div className="mb-5">
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="text-sm font-semibold text-primary hover:text-primary-dark underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
            >
              {expanded
              ? 'Show fewer highlights'
              : cap === 0
                ? `Show ${bullets.length} highlights`
                : `Show ${hiddenCount} more highlights`}
            </button>
          </div>
        )}

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

  return (
    <section id="experience" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
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
          14+ years building<br />
          and automating compliance.
        </h2>

        {/* Impact metrics banner — enhanced hierarchy */}
        <div>
          {jobs.map((job, i) => (
            <TimelineItem key={job.company} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
