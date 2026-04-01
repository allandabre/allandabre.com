import { useState, useEffect } from 'react'
import { NavContext } from './navContext'

const normalizePath = (path) => {
  const clean = path.split('?')[0] || '/'
  return clean === '' ? '/' : clean
}

const getView = (path) => {
  const clean = normalizePath(path)
  return clean === '/blog' || clean.startsWith('/blog/') ? 'blog' : 'home'
}

export function NavigationProvider({ children }) {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname))
  const [view, setView] = useState(() => getView(window.location.pathname))

  useEffect(() => {
    const onPop = () => {
      const next = normalizePath(window.location.pathname)
      setPathname(next)
      setView(getView(next))
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (path) => {
    window.history.pushState({}, '', path)
    const next = normalizePath(window.location.pathname)
    setPathname(next)
    setView(getView(next))
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <NavContext.Provider value={{ view, navigate, pathname }}>
      {children}
    </NavContext.Provider>
  )
}
