import { useScrollReveal } from '../hooks/useScrollReveal'

const degrees = [
  {
    type: 'Master of Science',
    field: 'Information Management',
    school: 'University of Maryland College Park',
    location: 'College Park, MD',
    year: 'May 2015',
    desc: 'Graduate study in information management, enterprise systems, and technology strategy -- the analytical framework that drives both risk advisory and AI product development.',
    highlights: ['Enterprise Systems', 'Technology Strategy', 'Data Analytics', 'Information Architecture'],
  },
  {
    type: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    school: 'University of Mumbai',
    location: 'Mumbai, India',
    year: 'June 2010',
    desc: 'Rigorous technical foundation in systems architecture, algorithms, and software engineering -- the bedrock of a career spanning technical consulting, enterprise risk, and AI innovation.',
    highlights: ['Systems Architecture', 'Software Engineering', 'Algorithm Design', 'Computer Networks'],
  },
]

const leadership = [
  {
    title: 'Strategic AI Initiative Lead',
    org: 'PwC',
    text: 'Co-led a firm-wide initiative to drive AI-powered business development -- designing proof-of-concepts, developing practice growth strategies, and expanding AI-enhanced service offerings to new markets.',
    impact: 'New service offerings launched',
  },
  {
    title: 'Talent Acquisition Strategist',
    org: 'PwC',
    text: 'Oversaw screening interviews as part of talent acquisition strategy, evaluating and identifying high-potential candidates who went on to become top performers in the firm\'s risk and consulting practices.',
    impact: 'Senior hiring pipeline',
  },
  {
    title: 'Campus Recruitment Lead',
    org: 'PwC — New York & Boston',
    text: 'Led university recruitment campaigns across premier institutions in New York and Boston, building lasting partnerships and securing top-tier talent for competitive intern and analyst programs.',
    impact: 'Multi-city campus presence',
  },
]

function EduCard({ degree }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl overflow-hidden border border-border-light hover:border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="h-1 bg-primary" />
      <div className="p-6 md:p-8">
        <span className="block text-[11px] font-semibold uppercase tracking-widest text-primary mb-2">
          {degree.type}
        </span>
        <h3 className="font-display text-2xl font-bold tracking-tight text-text mb-3">{degree.field}</h3>
        <div className="flex items-center gap-2 text-text-secondary text-sm font-medium mb-1">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-primary shrink-0">
            <path d="M2 20h20M12 2L2 8l10 5 10-5-10-5z" />
            <path d="M6 10.5v5.5l6 3 6-3v-5.5" />
          </svg>
          <span>{degree.school}</span>
        </div>
        <span className="block text-xs text-text-muted mb-3 ml-7">{degree.location}</span>
        <span className="inline-block text-xs font-semibold text-primary bg-primary-light px-3 py-1 rounded-full mb-4">
          {degree.year}
        </span>
        <p className="text-sm leading-[1.7] text-text-secondary mb-4">{degree.desc}</p>
        <div className="flex flex-wrap gap-2">
          {degree.highlights.map((h) => (
            <span key={h} className="px-2.5 py-1 text-[11px] font-medium text-text-muted border border-border-light rounded-full">
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  const [labelRef, labelVis] = useScrollReveal()
  const [titleRef, titleVis] = useScrollReveal()
  const [leadRef, leadVis] = useScrollReveal()

  return (
    <section id="education" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <span
          ref={labelRef}
          className={`block text-xs font-semibold uppercase tracking-widest text-primary mb-4 transition-all duration-700 ${
            labelVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Education & Leadership
        </span>
        <h2
          ref={titleRef}
          className={`font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-4 text-text transition-all duration-700 ${
            titleVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Built on strong<br />
          foundations.
        </h2>
        <p
          className={`text-lg text-text-secondary max-w-[600px] leading-relaxed mb-12 transition-all duration-700 delay-100 ${
            titleVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Two world-class engineering programs, two continents, and a commitment
          to continuous growth that extends well beyond the classroom.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {degrees.map((d) => (
            <EduCard key={d.field} degree={d} />
          ))}
        </div>

        {/* Leadership */}
        <div
          ref={leadRef}
          className={`bg-white rounded-2xl border border-border-light p-6 md:p-8 transition-all duration-700 ${
            leadVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="font-display text-lg font-semibold tracking-tight text-text mb-6">
            Firm-Wide Leadership & Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {leadership.map((item, i) => (
              <div key={i} className="p-5 bg-surface-alt rounded-xl border border-border-light hover:border-border transition-all duration-300">
                <span className="block text-sm font-semibold text-text mb-1">{item.title}</span>
                <span className="block text-[10px] text-text-muted uppercase tracking-wider mb-3">{item.org}</span>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">{item.text}</p>
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {item.impact}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
