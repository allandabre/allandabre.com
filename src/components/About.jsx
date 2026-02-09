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
    desc: 'Conducting comprehensive enterprise risk assessments across financial, operational, and technology domains -- identifying control gaps, evaluating risk likelihood and impact, and developing targeted mitigation strategies aligned to frameworks like COSO, NIST, and ISO 27001.',
    metric: 'COSO · NIST · ISO 27001',
  },
  {
    title: 'ITGC Design & Implementation',
    desc: 'Designing and implementing IT General Controls spanning access management, change management, IT operations, and system development lifecycle (SDLC) -- across Salesforce, SAP ERP, and 25+ ancillary financial systems with full cross-system control linkages.',
    metric: '25+ systems integrated',
  },
  {
    title: 'Business Process Controls',
    desc: 'Architecting business process controls across revenue, order-to-cash, procure-to-pay, and financial close cycles. Designing control activities including segregation of duties, reconciliations, management review controls, and automated application controls embedded directly in ERP workflows.',
    metric: 'End-to-end process coverage',
  },
  {
    title: 'Control Execution & Testing',
    desc: 'Leading end-to-end control execution, testing, and remediation programs -- defining test plans, sampling methodologies, and evidence standards. Coordinating walkthroughs and operating effectiveness testing with internal audit teams and external auditors to ensure SOX readiness.',
    metric: '22K+ users governed',
  },
  {
    title: 'AI-Powered Compliance Automation',
    desc: 'Building AI-powered tools using LLMs from OpenAI, Anthropic, and Google that automate control assessment, detect configuration anomalies across ERP/CRM systems, generate risk narratives, and accelerate testing workflows -- reducing manual review cycles from weeks to hours.',
    metric: '70% effort reduction',
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
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
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

            {/* Highlight cards */}
            <div
              ref={hlRef}
              className={`flex flex-col gap-4 mb-10 transition-all duration-700 ${
                hlVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="p-5 bg-white rounded-xl border border-border-light hover:border-border hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h4 className="text-[15px] font-semibold text-text">{h.title}</h4>
                    <span className="text-xs font-semibold text-primary whitespace-nowrap hidden sm:block">
                      {h.metric}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{h.desc}</p>
                </div>
              ))}
            </div>

            {/* Skills grid */}
            <div
              ref={skillsRef}
              className={`transition-all duration-700 ${
                skillsVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="block text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">Core Competencies</span>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white border border-border-light rounded-full text-xs font-medium text-text-secondary hover:border-primary/30 hover:text-primary transition-all duration-200"
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
