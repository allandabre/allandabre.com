export function smoothScrollTo(href) {
  const el = document.querySelector(href)
  if (el) {
    const paddingTop = parseInt(getComputedStyle(el).paddingTop, 10) || 0
    const top = el.getBoundingClientRect().top + window.scrollY - 80 + paddingTop
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
