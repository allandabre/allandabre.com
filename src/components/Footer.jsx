import { useMemo } from 'react'
import { useNavigation } from '../context/NavigationContext'
import { smoothScrollTo } from '../utils/smoothScroll'
import { openMailto } from '../utils/mailto'
import Logo from './Logo'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#ai-leadership', label: 'AI Leadership' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
  { href: '/blog', label: 'Blog', isPage: true },
]

export default function Footer() {
  const { view, navigate } = useNavigation()
  const email = useMemo(() => ['allan', '.', 'dabre', '@', 'gmail', '.', 'com'].join(''), [])

  const handleClick = (e, href, isPage = false) => {
    e.preventDefault()
    if (isPage) { navigate(href); return }
    if (view === 'blog') { navigate('/'); setTimeout(() => smoothScrollTo(href), 150); return }
    smoothScrollTo(href)
  }

  return (
    <footer className="relative bg-dark overflow-hidden">
      {/* Teal accent line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Subtle grid pattern matching hero */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 pt-14 pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Logo size={30} className="text-primary" />
              <span className="font-display text-xl font-bold text-white">
                Allan Dabre
              </span>
            </div>
            <p className="text-sm text-white/40 mb-4">
              Leader, PwC · Risk & Compliance · AI Innovation
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/allandabre/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-primary hover:border-primary/30 hover:bg-white/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <button
                onClick={() => openMailto(`mailto:${email}`)}
                className="w-11 h-11 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-primary hover:border-primary/30 hover:bg-white/10 transition-all duration-300"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 6L2 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Links + Back to top */}
          <div className="flex flex-col items-end gap-6">
            <div className="flex gap-6 flex-wrap">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href, link.isPage)}
                  className="text-sm text-white/40 hover:text-primary transition-colors duration-200 hover-underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-xs text-white/30 hover:text-primary transition-colors duration-200 group"
            >
              <span>Back to top</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} Allan Dabre. All rights reserved.</p>
          <p className="text-xs text-white/30">Built with React, Tailwind CSS & Cursor AI</p>
        </div>
      </div>
    </footer>
  )
}
