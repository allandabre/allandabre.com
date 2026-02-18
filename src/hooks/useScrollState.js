import { useEffect, useState } from 'react'

/**
 * Single scroll listener that provides both scroll progress (%)
 * and whether the user has scrolled past a threshold (for back-to-top).
 * Replaces two separate listeners in App.jsx with one RAF-throttled handler.
 */
export function useScrollState(showBackToTopAfter = 600) {
  const [progress, setProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
          setShowBackToTop(scrollTop > showBackToTopAfter)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [showBackToTopAfter])

  return { progress, showBackToTop }
}
