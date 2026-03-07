/**
 * Shared smooth-scroll utility.
 * Offsets by 80px to account for the fixed navbar.
 */
export function smoothScrollTo(href) {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
