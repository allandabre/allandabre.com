import { useState, useMemo } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { openMailto } from '../utils/mailto'

// Email constructed at runtime so bots can't scrape it from HTML source
function useObfuscatedEmail() {
  return useMemo(() => {
    const parts = ['allan', '.', 'dabre', '@', 'gmail', '.', 'com']
    return parts.join('')
  }, [])
}

export default function Contact() {
  const [leftRef, leftVis] = useScrollReveal()
  const [rightRef, rightVis] = useScrollReveal()
  const [status, setStatus] = useState('idle')
  const email = useObfuscatedEmail()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target  // capture before React recycles the synthetic event
    const formData = new FormData(form)
    const name = formData.get('name')
    const senderEmail = formData.get('email')
    const subject = formData.get('subject') || 'Website Contact'
    const message = formData.get('message')

    // Opens the user's real email client with pre-filled fields
    const body = `From: ${name} (${senderEmail})\n\n${message}`
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    openMailto(mailtoUrl)

    setStatus('sent')
    setTimeout(() => {
      setStatus('idle')
      form.reset()
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-surface-cool">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16">
          {/* Left */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${
              leftVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Contact
            </span>
            <h2 className="font-display text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-4 text-text">
              Let's connect.
            </h2>
            <p className="text-base leading-[1.7] text-text-secondary mb-4">
              Whether you are modernizing a SOX program, exploring AI in compliance, or seeking
              your next leader — let&apos;s talk.
            </p>
            <p className="text-sm text-text-muted mb-8">
              Based in New York. Open to global opportunities.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  openMailto(`mailto:${email}`)
                }}
                className="flex items-center gap-3 p-4 bg-surface-alt rounded-xl border border-border-light hover:border-primary/30 hover-card group"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-primary-light rounded-lg text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 7l-10 6L2 7" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-text-muted font-medium">Email</span>
                  <span className="text-sm text-text font-medium group-hover:text-primary transition-colors">Get in touch via email</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/allandabre/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-surface-alt rounded-xl border border-border-light hover:border-primary/30 hover-card group"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-primary-light rounded-lg text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-text-muted font-medium">LinkedIn</span>
                  <span className="text-sm text-text font-medium group-hover:text-primary transition-colors">Connect with me</span>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 bg-surface-alt rounded-xl border border-border-light">
                <div className="w-11 h-11 flex items-center justify-center bg-primary-light rounded-lg text-primary shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-text-muted font-medium">Location</span>
                  <span className="text-sm text-text font-medium">New York, NY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            ref={rightRef}
            className={`transition-all duration-700 ${
              rightVis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-6 md:p-8 bg-surface-alt rounded-2xl border border-border-light">
              <div className="mb-2">
                <h3 className="font-display text-lg font-semibold text-text mb-1">Send a message</h3>
                <p className="text-xs text-text-muted">Opens your email client with the message pre-filled.</p>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-text-muted">Name</label>
                <input name="name" type="text" placeholder="Your full name" required className="w-full px-4 py-3.5 text-[15px] text-text bg-white border border-border-light rounded-lg outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all duration-200 placeholder:text-text-muted" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-text-muted">Email</label>
                <input name="email" type="email" placeholder="your@email.com" required className="w-full px-4 py-3.5 text-[15px] text-text bg-white border border-border-light rounded-lg outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all duration-200 placeholder:text-text-muted" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-text-muted">Subject</label>
                <input name="subject" type="text" placeholder="What's this about?" className="w-full px-4 py-3.5 text-[15px] text-text bg-white border border-border-light rounded-lg outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all duration-200 placeholder:text-text-muted" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-text-muted">Message</label>
                <textarea name="message" rows="5" placeholder="Tell me about your challenge..." required className="w-full px-4 py-3.5 text-[15px] text-text bg-white border border-border-light rounded-lg outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-all duration-200 placeholder:text-text-muted resize-y min-h-[120px]" />
              </div>
              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-[15px] text-white transition-all duration-300 mt-2 ${
                  status === 'sent'
                    ? 'bg-success'
                    : 'bg-primary hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg'
                } disabled:cursor-not-allowed`}
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Opening Email Client...
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
