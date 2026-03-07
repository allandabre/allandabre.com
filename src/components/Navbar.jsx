import { useState, useEffect, useRef } from 'react'
import { useNavScroll } from '../hooks/useNavScroll'
import { useNavigation } from '../context/NavigationContext'
import { smoothScrollTo } from '../utils/smoothScroll'
import Logo from './Logo'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#ai-leadership', label: 'AI Leadership' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#education', label: 'Education' },
  { href: '/blog', label: 'Blog', isPage: true },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrolled, activeSection } = useNavScroll()
  const { view, navigate } = useNavigation()
  const overlayRef = useRef(null)

  // Restore scroll when component unmounts while menu is open
  useEffect(() => {
    return () => { document.body.style.overflow = '' }
  }, [])

  // Focus trap + Escape key for mobile menu
  useEffect(() => {
    if (!mobileOpen) return
    const overlay = overlayRef.current
    if (!overlay) return

    const focusable = Array.from(overlay.querySelectorAll('a, button'))
    focusable[0]?.focus()

    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        document.body.style.overflow = ''
        return
      }
      if (e.key !== 'Tab') return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus() }
      }
    }

    overlay.addEventListener('keydown', handleKey)
    return () => overlay.removeEventListener('keydown', handleKey)
  }, [mobileOpen])

  const handleClick = (e, href, isPage = false) => {
    e.preventDefault()
    setMobileOpen(false)
    document.body.style.overflow = ''

    if (isPage) {
      navigate(href)
      return
    }

    // If currently on blog, navigate home first then scroll
    if (view === 'blog') {
      navigate('/')
      setTimeout(() => smoothScrollTo(href), 150)
      return
    }

    smoothScrollTo(href)
  }

  const toggleMobile = () => {
    const next = !mobileOpen
    setMobileOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  const isLinkActive = (link) => {
    if (link.isPage) return view === 'blog'
    if (view === 'blog') return false
    return activeSection === link.href.slice(1)
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
            href="/"
            onClick={(e) => { e.preventDefault(); navigate('/') }}
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
                onClick={(e) => handleClick(e, link.href, link.isPage)}
                aria-current={isLinkActive(link) ? 'true' : undefined}
                className={`relative text-sm font-medium transition-colors py-2 hover-underline ${
                  isLinkActive(link)
                    ? 'text-primary'
                    : scrolled
                      ? 'text-text-secondary hover:text-text'
                      : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
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
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 z-[1001]"
          >
            <span className={`w-6 h-0.5 rounded transition-all duration-300 ${mobileOpen ? 'bg-white rotate-45 translate-y-[7px]' : scrolled ? 'bg-text' : 'bg-white'}`} />
            <span className={`w-6 h-0.5 rounded transition-all duration-300 ${mobileOpen ? 'bg-white opacity-0' : scrolled ? 'bg-text' : 'bg-white'}`} />
            <span className={`w-6 h-0.5 rounded transition-all duration-300 ${mobileOpen ? 'bg-white -rotate-45 -translate-y-[7px]' : scrolled ? 'bg-text' : 'bg-white'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        ref={overlayRef}
        onClick={toggleMobile}
        className={`fixed inset-0 bg-dark/[0.98] z-[999] flex items-center justify-center relative transition-opacity duration-400 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={toggleMobile}
          aria-label="Close navigation"
          className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="flex flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
          {[...navLinks, { href: '#contact', label: 'Contact' }].map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href, link.isPage)}
              aria-current={isLinkActive(link) ? 'true' : undefined}
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
