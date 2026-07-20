import { useScrollReveal } from '../hooks/useScrollReveal'

const certifications = [
  'Salesforce Certified Administrator',
  'Salesforce Certified Business Analyst',
]

export default function About() {
  const [labelRef, labelVis] = useScrollReveal()
  const [titleRef, titleVis] = useScrollReveal()
  const [text1Ref, text1Vis] = useScrollReveal()
  const [certRef, certVis] = useScrollReveal()

  return (
    <section id="about" className="py-20 md:py-32 bg-surface-warm">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
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
              className={`font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-text transition-all duration-700 mb-8 ${
                titleVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Recognized authority
              <br />
              <span className="text-primary">at the intersection of AI and enterprise risk.</span>
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
          <div
            ref={text1Ref}
            className={`transition-all duration-700 ${
              text1Vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-[17px] leading-[1.7] text-text-secondary mb-8">
              Leads one of the most complex functions in enterprise risk at PwC, designing
              and directing full-lifecycle compliance programs across financial, technology, and
              operational domains for some of the largest organizations in the world. Built and
              deployed original AI-powered compliance automation now running in production,
              eliminating the manual effort that has defined this field for decades.
            </p>
            <p className="text-[17px] leading-[1.7] text-text-secondary">
              Selected by ISACA to evaluate the certification standards against which
              cybersecurity professionals worldwide are assessed. Published by CIO.com
              and sought by national industry media as an authoritative voice on AI risk
              and technology compliance policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
