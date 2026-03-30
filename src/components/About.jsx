import { useScrollReveal } from '../hooks/useScrollReveal'

const certifications = [
  'Salesforce Certified Administrator',
  'Salesforce Certified Business Analyst',
]

const highlights = [
  {
    title: 'AI-Powered Compliance Automation',
    desc: 'End-to-end controls delivery platform: risk assessments, BPC frameworks, RCMs and narratives, completeness-and-accuracy testing over reports and key controls, anomaly detection — live in production on engagements.',
    metric: 'Production',
  },
  {
    title: 'SOX IT & System Risk',
    desc: 'Scoping, inherent/residual risk, and prioritization for SOX IT — across financial reporting, technology, and operational domains. Frameworks: COSO, NIST, ISO 27001.',
    metric: 'COSO · NIST · ISO',
  },
  {
    title: 'ITGC & ITAC Design',
    desc: 'IT General Controls and IT automated controls (ITACs) across access, change, operations, and SDLC — Salesforce, SAP ERP, and 25+ enterprise systems.',
    metric: 'Enterprise scale',
  },
  {
    title: 'Business Process Controls (BPC)',
    desc: 'End-to-end business process controls across revenue, order-to-cash, procure-to-pay, and financial close — plus application controls in ERP: SOD, reconciliations, management review, and automated application controls.',
    metric: 'BPC + ITAC',
  },
  {
    title: 'Testing & Audit Evidence',
    desc: 'Test design, sampling, operating effectiveness, and audit-ready evidence — coordinated with internal audit and external auditors.',
    metric: 'Audit-ready',
  },
  {
    title: 'SOX Program & Remediation',
    desc: 'Partnering with external auditors on IT SOX matters: deficiencies, remediation, reporting, and readiness — aligned with first- and second-line ownership and third-line assurance.',
    metric: '1st · 2nd · 3rd LoD',
  },
]

export default function About() {
  const [labelRef, labelVis] = useScrollReveal()
  const [titleRef, titleVis] = useScrollReveal()
  const [text1Ref, text1Vis] = useScrollReveal()
  const [hlRef, hlVis] = useScrollReveal()
  const [certRef, certVis] = useScrollReveal()

  return (
    <section id="about" className="py-20 md:py-32 bg-surface-warm">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16">
          {/* Left */}
          <div>
            <span
              ref={labelRef}
              className={`block text-xs font-semibold uppercase tracking-widest text-primary mb-4 transition-all duration-700 ${
                labelVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              About
            </span>
            <h2
              ref={titleRef}
              className={`font-display text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-text transition-all duration-700 mb-8 ${
                titleVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Risk, compliance & AI
              <br />
              <span className="text-primary">Built for real operations.</span>
            </h2>

            {/* Certifications */}
            <div
              ref={certRef}
              className={`space-y-3 transition-all duration-700 ${
                certVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">Certifications</span>
              {certifications.map((cert, i) => (
                <div
                  key={cert}
                  className="flex items-center gap-3"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-sm text-text-secondary font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <div
              ref={text1Ref}
              className={`transition-all duration-700 ${
                text1Vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-[17px] leading-[1.8] text-text-secondary mb-5">
                <strong className="text-text font-semibold text-[17px]">
                  14+ years across risk advisory, compliance, and technology — building programs
                  that manage enterprise-level risk.
                </strong>
              </p>
              <p className="text-[17px] leading-[1.8] text-text-secondary mb-8">
                My work sits at the intersection of compliance, enterprise risk, and technology. I
                design control frameworks that address risk holistically — SOX programs grounded in
                enterprise risk management, structured to reflect how the business actually
                operates, and built to give leadership clear visibility into exposure. End-to-end:
                control framework design, ITGC and application controls, business process controls
                across revenue and financial cycles, remediation, and auditor alignment — in
                complex, multi-system environments across high-growth tech and regulated industries.
              </p>

              <p className="text-[17px] leading-[1.8] text-text-secondary mb-4">
                <strong className="text-text font-semibold text-[17px]">
                  At PwC, I work across all three lines of defense — with emphasis on control
                  design, program design and delivery, and risk oversight.
                </strong>
              </p>
              <p className="text-[17px] leading-[1.8] text-text-secondary mb-8">
                I design business process controls with process owners, build second-line compliance
                and risk infrastructure — monitoring, SOX scoping, ITGC and BPC coverage — and
                partner with external auditors on deficiency assessment, remediation, and readiness.
                I collaborate cross-functionally with technology, security, finance, and legal
                leaders; lead multi-million-dollar programs; and report to C-suite and board-level
                stakeholders.
              </p>

              <p className="text-[17px] leading-[1.8] text-text-secondary mb-4">
                <strong className="text-text font-semibold text-[17px]">
                  I build AI-powered compliance solutions.
                </strong>
              </p>
              <p className="text-[17px] leading-[1.8] text-text-secondary mb-10">
                I designed and deployed an end-to-end controls delivery platform that performs risk
                assessments, builds business process control frameworks, generates RCMs and control
                narratives, runs completeness-and-accuracy testing over system-generated reports and
                key controls, and flags configuration anomalies — the same scope of work that
                traditionally takes weeks, delivered in hours with broader coverage, tighter
                consistency, and audit-ready evidence. It runs in production on live engagements.
              </p>
            </div>

            {/* Highlight cards — 2-column grid, staggered */}
            <div
              ref={hlRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className={`p-4 bg-white rounded-xl border border-border-light hover:border-primary/30 hover-card transition-all duration-700 ${
                    hlVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: hlVis ? `${i * 80}ms` : '0ms' }}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-semibold text-text">{h.title}</h4>
                    <span className="text-[10px] font-bold text-primary whitespace-nowrap bg-primary-light px-2 py-0.5 rounded-full">
                      {h.metric}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
