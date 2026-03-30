import { useState, useEffect } from 'react'
import { NavContext } from './navContext'

const getView = (path) => (path === '/blog' ? 'blog' : 'home')

export function NavigationProvider({ children }) {
  const [view, setView] = useState(() => getView(window.location.pathname))

  useEffect(() => {
    const onPop = () => setView(getView(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (path) => {
    window.history.pushState({}, '', path)
    setView(getView(path))
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <NavContext.Provider value={{ view, navigate }}>
      {children}
    </NavContext.Provider>
  )
}
