import { createContext, useContext, useState, useEffect } from 'react'

const NavContext = createContext(null)

export function NavigationProvider({ children }) {
  const [view, setView] = useState(
    window.location.pathname === '/blog' ? 'blog' : 'home'
  )

  useEffect(() => {
    const onPop = () => setView(window.location.pathname === '/blog' ? 'blog' : 'home')
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (path) => {
    window.history.pushState({}, '', path)
    setView(path === '/blog' ? 'blog' : 'home')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <NavContext.Provider value={{ view, navigate }}>
      {children}
    </NavContext.Provider>
  )
}

export const useNavigation = () => useContext(NavContext)
