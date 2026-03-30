import { useEffect, useRef, useState } from 'react'

// ── Shared IntersectionObserver pool ──────────────────────────────
// Instead of creating one observer per element (30+), we share observers
// grouped by their options key (threshold + rootMargin).
const observerPool = new Map()

function getSharedObserver(threshold, rootMargin) {
  const key = `${threshold}|${rootMargin}`

  if (!observerPool.has(key)) {
    const callbacks = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cb = callbacks.get(entry.target)
          if (cb) cb(entry)
        })
      },
      { threshold, rootMargin }
    )

    observerPool.set(key, { observer, callbacks })
  }

  return observerPool.get(key)
}

// ── useScrollReveal ───────────────────────────────────────────────
export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const once = options.once !== false  // default true

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const threshold = options.threshold || 0.1
    const rootMargin = options.rootMargin || '0px 0px -60px 0px'
    const { observer, callbacks } = getSharedObserver(threshold, rootMargin)

    callbacks.set(element, (entry) => {
      if (once) {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
          callbacks.delete(element)
        }
      } else {
        setIsVisible(entry.isIntersecting)
      }
    })

    observer.observe(element)

    return () => {
      observer.unobserve(element)
      callbacks.delete(element)
    }
  }, [options.threshold, options.rootMargin, once])

  return [ref, isVisible]
}

// ── useCountUp ────────────────────────────────────────────────────
export function useCountUp(target, duration = 2000, isActive = false) {
  const [count, setCount] = useState(0)
  const ranCycle = useRef(false)

  useEffect(() => {
    if (!isActive) {
      ranCycle.current = false
      return
    }

    if (ranCycle.current) return
    ranCycle.current = true

    const startTime = performance.now()
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)
    let rafId
    let cancelled = false

    const animate = (currentTime) => {
      if (cancelled) return
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.round(easeOutQuart(progress) * target))
      if (progress < 1) rafId = requestAnimationFrame(animate)
    }

    // Reset in RAF (not synchronously in the effect body) to satisfy react-hooks/set-state-in-effect
    rafId = requestAnimationFrame(() => {
      if (cancelled) return
      setCount(0)
      rafId = requestAnimationFrame(animate)
    })

    return () => {
      cancelled = true
      cancelAnimationFrame(rafId)
      ranCycle.current = false
    }
  }, [target, duration, isActive])

  return isActive ? count : 0
}
