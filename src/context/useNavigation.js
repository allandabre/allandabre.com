import { useContext } from 'react'
import { NavContext } from './navContext'

export function useNavigation() {
  const ctx = useContext(NavContext)
  if (!ctx) {
    throw new Error('useNavigation must be used within NavigationProvider')
  }
  return ctx
}
