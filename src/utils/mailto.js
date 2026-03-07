export function openMailto(href) {
  const a = document.createElement('a')
  a.href = href
  a.style.display = 'none'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
