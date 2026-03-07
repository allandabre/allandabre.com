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
  const wasActive = useRef(false)

  useEffect(() => {
    if (!isActive) {
      wasActive.current = false
      setCount(0)
      return
    }

    // Already animating this activation — skip
    if (wasActive.current) return
    wasActive.current = true

    let rafId
    const startTime = performance.now()
    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.round(easeOutQuart(progress) * target))
      if (progress < 1) rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration, isActive])

  return count
}
