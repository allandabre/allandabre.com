import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-dark flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-display text-3xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              An unexpected error occurred. Please refresh the page to try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
