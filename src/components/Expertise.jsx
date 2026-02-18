import { useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const proficiencyLabel = (width) => {
  if (width >= 95) return 'Expert'
  if (width >= 90) return 'Advanced'
  if (width >= 85) return 'Proficient'
  return 'Skilled'
}

const skillCategories = [
  {
    heading: 'Risk & Compliance',
    skills: [
      { name: 'SOX & ITGC Control Design', width: 97 },
      { name: 'Risk Assessment & Mitigation', width: 95 },
      { name: 'Governance (NIST, COSO, ISO 27001)', width: 92 },
      { name: 'Audit Committee & Executive Reporting', width: 94 },
    ],
  },
  {
    heading: 'Platforms & Systems',
    skills: [
      { name: 'Salesforce (Admin + BA Certified)', width: 95 },
      { name: 'SAP ERP / EHS', width: 90 },
      { name: 'Enterprise Security Architecture', width: 88 },
      { name: 'Cross-System Control Linkages', width: 92 },
    ],
  },
  {
    heading: 'AI & Development',
    skills: [
      { name: 'LLMs (OpenAI, Anthropic, Google)', width: 90 },
      { name: 'Cursor AI / Agentic Development', width: 88 },
      { name: 'AI-Driven Compliance Automation', width: 92 },
      { name: 'Full-Stack Product Development', width: 85 },
    ],
  },
]

const industries = [
  { name: 'Technology', sub: 'Telehealth, EV, SaaS', icon: '01' },
  { name: 'Healthcare', sub: 'Regulated & Telehealth', icon: '02' },
  { name: 'Manufacturing', sub: 'Industrial & EV OEMs', icon: '03' },
  { name: 'Consumer', sub: 'Goods, Retail & CPG', icon: '04' },
]

function SkillBar({ name, width, delay }) {
  const barRef = useRef(null)
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 })
  const label = proficiencyLabel(width)

  useEffect(() => {
    if (isVisible && barRef.current) {
      barRef.current.style.width = `${width}%`
    }
  }, [isVisible, width])

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-text-secondary">{name}</span>
        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full transition-all duration-700 ${
          isVisible
            ? 'opacity-100 bg-primary-light text-primary'
            : 'opacity-0 bg-transparent text-transparent'
        }`}
          style={{ transitionDelay: `${delay + 800}ms` }}
        >
          {label}
        </span>
      </div>
      <div className="w-full h-1.5 bg-surface-dim rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full bg-primary rounded-full transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: 0, transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ heading, skills, index }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`bg-white p-6 md:p-8 rounded-2xl border border-border-light hover:border-primary/30 hover-card transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <h3 className="font-display text-lg font-semibold tracking-tight mb-6 text-text">{heading}</h3>
      <div className="flex flex-col gap-5">
        {skills.map((s, i) => (
          <SkillBar key={s.name} name={s.name} width={s.width} delay={i * 150} />
        ))}
      </div>
    </div>
  )
}

export default function Expertise() {
  const [labelRef, labelVis] = useScrollReveal()
  const [titleRef, titleVis] = useScrollReveal()
  const [indRef, indVis] = useScrollReveal()

  return (
    <section id="expertise" className="py-20 md:py-32 bg-surface-warm">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <span
          ref={labelRef}
          className={`block text-xs font-semibold uppercase tracking-widest text-primary mb-4 transition-all duration-700 ${
            labelVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Expertise
        </span>
        <h2
          ref={titleRef}
          className={`font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-4 text-text transition-all duration-700 ${
            titleVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Deep expertise,<br />
          proven results.
        </h2>
        <p
          className={`text-lg text-text-secondary max-w-[600px] leading-relaxed mb-12 transition-all duration-700 delay-100 ${
            titleVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Three interconnected domains of mastery that reinforce each other to
          deliver stronger outcomes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.heading} heading={cat.heading} skills={cat.skills} index={i} />
          ))}

          {/* Industries card — staggered items */}
          <div
            ref={indRef}
            className={`bg-white p-6 md:p-8 rounded-2xl border border-border-light hover:border-primary/30 hover-card transition-all duration-700 ${
              indVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '360ms' }}
          >
            <h3 className="font-display text-lg font-semibold tracking-tight mb-6 text-text">Industry Experience</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {industries.map((ind, i) => (
                <div
                  key={ind.name}
                  className={`p-5 bg-surface-alt border border-border-light rounded-xl hover:border-primary/30 hover-lift text-center transition-all duration-500 ${
                    indVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: indVis ? `${400 + i * 80}ms` : '0ms' }}
                >
                  <span className="block text-[10px] font-bold text-primary/40 tracking-widest mb-1">{ind.icon}</span>
                  <span className="block text-sm font-semibold text-text mb-1">{ind.name}</span>
                  <span className="block text-xs text-text-muted">{ind.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
