import { useState, useEffect } from 'react'
import { NavigationProvider } from './context/NavigationContext'
import { useNavigation } from './context/useNavigation'
import { useScrollState } from './hooks/useScrollState'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import AILeadership from './components/AILeadership'
import Expertise from './components/Expertise'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SchrodingerSection from './components/SchrodingerSection'
import Blog from './pages/Blog'

function ScrollProgress({ progress }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
      <div
        className="h-full bg-primary shadow-[0_0_8px_rgba(13,148,136,0.4)] transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

function BackToTop({ show }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}

function AppContent() {
  const { view } = useNavigation()
  const [loaded, setLoaded] = useState(false)
  const { progress, showBackToTop } = useScrollState()

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`transition-opacity duration-700 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <ScrollProgress progress={progress} />
      <Navbar />
      <main id="main-content">
        {view === 'blog' ? (
          <Blog />
        ) : (
          <>
            <Hero />
            <SchrodingerSection />
            <About />
            <Experience />
            <AILeadership />
            <Expertise />
            <Education />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <BackToTop show={showBackToTop} />
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ErrorBoundary>
  )
}
