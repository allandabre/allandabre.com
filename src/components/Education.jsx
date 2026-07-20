import { useScrollReveal } from '../hooks/useScrollReveal'

const degrees = [
  {
    type: 'Master of Science',
    field: 'Information Management',
    school: 'University of Maryland College Park',
    location: 'College Park, MD',
    year: 'May 2015',
    desc: 'Graduate study in information management, enterprise systems, and technology strategy, forming the analytical foundation that underpins both risk advisory leadership and AI product development.',
    highlights: ['Enterprise Systems', 'Technology Strategy', 'Data Analytics', 'Information Architecture'],
  },
  {
    type: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    school: 'University of Mumbai',
    location: 'Mumbai, India',
    year: 'June 2010',
    desc: 'Rigorous technical foundation in systems architecture, algorithms, and software engineering, the bedrock of a career spanning technical consulting, enterprise risk leadership, and AI innovation.',
    highlights: ['Systems Architecture', 'Software Engineering', 'Algorithm Design', 'Computer Networks'],
  },
]

function EduCard({ degree, index }) {
  const [ref, isVisible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl overflow-hidden border border-border-light hover:border-primary/30 hover-card transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
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
            <span key={h} className="px-2.5 py-1 text-[11px] font-medium text-text-muted border border-border-light rounded-full hover:border-primary/30 hover:text-primary hover-pop">
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

  return (
    <section id="education" className="py-20 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <span
          ref={labelRef}
          className={`block text-xs font-semibold uppercase tracking-widest text-primary mb-4 transition-all duration-700 ${
            labelVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Education
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
          Graduate and undergraduate engineering foundations from the University of Maryland and University
          of Mumbai, underpinning risk advisory, compliance, and AI product work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {degrees.map((d, i) => (
            <EduCard key={d.field} degree={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
