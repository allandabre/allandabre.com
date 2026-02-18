import { useScrollReveal } from '../hooks/useScrollReveal'

const coreSkills = [
  'Enterprise Risk Assessments',
  'ITGC Design & Implementation',
  'Business Process Control Design',
  'Control Execution & Testing',
  'SOX Compliance & Audit Coordination',
  'Access & Change Management Controls',
  'Revenue & Order-to-Cash Governance',
  'AI-Powered Compliance Automation',
  'Governance (NIST, COSO, ISO 27001)',
  'ERP & CRM Security Architecture',
  'Continuous Control Monitoring & KRIs',
  'Executive & Audit Committee Reporting',
]

const certifications = [
  'Salesforce Certified Administrator',
  'Salesforce Certified Business Analyst',
]

const highlights = [
  {
    title: 'Risk Assessment & Mitigation',
    desc: 'Enterprise risk assessments across financial, operational, and technology domains — aligned to COSO, NIST, and ISO 27001.',
    metric: 'COSO · NIST · ISO',
  },
  {
    title: 'ITGC Design & Implementation',
    desc: 'IT General Controls spanning access, change management, and SDLC across Salesforce, SAP ERP, and 25+ systems.',
    metric: '25+ systems',
  },
  {
    title: 'Business Process Controls',
    desc: 'Controls across revenue, order-to-cash, procure-to-pay, and financial close — including SOD, reconciliations, and automated application controls.',
    metric: 'End-to-end',
  },
  {
    title: 'Control Execution & Testing',
    desc: 'Test plans, sampling, evidence standards, and operating effectiveness testing coordinated with internal and external auditors.',
    metric: '22K+ users',
  },
  {
    title: 'AI-Powered Automation',
    desc: 'LLM-powered tools that automate control assessment, detect anomalies, and generate risk narratives — weeks to hours.',
    metric: '70% reduced',
  },
  {
    title: 'SOX Readiness & Audit Coordination',
    desc: 'Partnering with external auditors to resolve deficiencies, close findings, and ensure seamless SOX readiness across all three lines of defense.',
    metric: '3 lines of defense',
  },
]

export default function About() {
  const [labelRef, labelVis] = useScrollReveal()
  const [titleRef, titleVis] = useScrollReveal()
  const [text1Ref, text1Vis] = useScrollReveal()
  const [hlRef, hlVis] = useScrollReveal()
  const [skillsRef, skillsVis] = useScrollReveal()
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
              className={`font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-text transition-all duration-700 ${
                titleVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Controls expertise
              <br />
              meets AI innovation.
            </h2>

            {/* Certifications */}
            <div
              ref={certRef}
              className={`mt-8 space-y-3 transition-all duration-700 ${
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
            <p
              ref={text1Ref}
              className={`text-[17px] leading-[1.8] text-text-secondary mb-6 transition-all duration-700 ${
                text1Vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              With 14+ years across risk advisory and technology, my work spans the full
              controls lifecycle: conducting{' '}
              <strong className="text-text font-semibold">enterprise risk assessments</strong>,
              designing <strong className="text-text font-semibold">ITGCs and business process
              controls</strong>, leading{' '}
              <strong className="text-text font-semibold">control execution and testing programs</strong>,
              and coordinating with internal audit and external auditors to ensure SOX readiness
              across complex multi-system environments.
            </p>
            <p
              className={`text-[17px] leading-[1.8] text-text-secondary mb-4 transition-all duration-700 delay-100 ${
                text1Vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              At PwC, I operate across all three lines of defense — strengthening
              first-line control ownership, building second-line oversight and monitoring
              programs, and partnering directly with external auditors to resolve control
              deficiencies, close audit findings, and ensure seamless SOX readiness. I
              direct multi-million dollar programs and work with C-suite leaders to embed
              compliance into the fabric of their operations.
            </p>
            <p
              className={`text-[17px] leading-[1.8] text-text-secondary mb-10 transition-all duration-700 delay-200 ${
                text1Vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              I also build <strong className="text-text font-semibold">production AI
              tools</strong> that automate compliance workflows -- using LLMs to detect
              configuration anomalies, generate control narratives, assess risk postures,
              and accelerate testing cycles. This combination of deep risk expertise and
              hands-on AI development is central to how I approach every engagement.
            </p>

            {/* Highlight cards — 2-column grid, staggered */}
            <div
              ref={hlRef}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
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

            {/* Skills grid — staggered */}
            <div
              ref={skillsRef}
              className={`transition-all duration-700 ${
                skillsVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Core Competencies</span>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill, i) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 bg-white border border-border-light rounded-full text-xs font-medium text-text-secondary hover:border-primary/30 hover:text-primary hover-pop transition-all duration-500 ${
                      skillsVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: skillsVis ? `${i * 40}ms` : '0ms' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
