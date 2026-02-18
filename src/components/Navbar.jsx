import { useState, useEffect } from 'react'
import { useNavScroll } from '../hooks/useNavScroll'
import Logo from './Logo'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#ai-leadership', label: 'AI Leadership' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#education', label: 'Education' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrolled, activeSection } = useNavScroll()

  // Restore scroll when component unmounts while menu is open
  useEffect(() => {
    return () => { document.body.style.overflow = '' }
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    document.body.style.overflow = ''
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen)
    document.body.style.overflow = !mobileOpen ? 'hidden' : ''
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface/90 backdrop-blur-xl border-b border-border/50 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_4px_12px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="flex items-center gap-3 text-primary hover:text-primary-dark transition-colors"
          >
            <Logo size={34} />
            <span className={`font-display text-lg font-bold tracking-tight transition-colors ${
              scrolled ? 'text-text' : 'text-white'
            }`}>
              Allan Dabre
            </span>
          </a>

          {/* Desktop links + CTA */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative text-sm font-medium transition-colors py-2 hover-underline ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary'
                    : scrolled
                      ? 'text-text-secondary hover:text-text'
                      : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            {/* CTA button */}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={toggleMobile}
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 z-[1001]"
            aria-label="Toggle navigation"
          >
            <span className={`w-6 h-0.5 rounded transition-all duration-300 ${mobileOpen ? 'bg-white rotate-45 translate-y-[7px]' : scrolled ? 'bg-text' : 'bg-white'}`} />
            <span className={`w-6 h-0.5 rounded transition-all duration-300 ${mobileOpen ? 'bg-white opacity-0' : scrolled ? 'bg-text' : 'bg-white'}`} />
            <span className={`w-6 h-0.5 rounded transition-all duration-300 ${mobileOpen ? 'bg-white -rotate-45 -translate-y-[7px]' : scrolled ? 'bg-text' : 'bg-white'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-dark/[0.98] z-[999] flex items-center justify-center transition-opacity duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {[...navLinks, { href: '#contact', label: 'Contact' }].map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`font-display text-3xl font-semibold text-white hover:text-primary transition-all duration-400 ${
                mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: mobileOpen ? `${100 + i * 50}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
