import { useEffect, useState, useRef } from 'react'

export function useNavScroll() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const sectionsRef = useRef([])

  useEffect(() => {
    // Cache section elements once on mount instead of querying DOM every scroll
    sectionsRef.current = Array.from(document.querySelectorAll('section[id]'))

    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50)

        const scrollY = window.scrollY + 120
        const sections = sectionsRef.current

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          const top = section.offsetTop
          const height = section.offsetHeight

          if (scrollY > top && scrollY <= top + height) {
            setActiveSection(section.id)
            break
          }
        }

        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrolled, activeSection }
}
