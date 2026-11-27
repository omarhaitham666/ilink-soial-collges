import { useSyncExternalStore } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { settingsPages } from '../../../app/components/MobileNav'

const query = '(max-width: 760px)'

function subscribe(notify: () => void) {
  const media = window.matchMedia(query)
  media.addEventListener('change', notify)
  return () => media.removeEventListener('change', notify)
}

function isMobile() {
  return window.matchMedia(query).matches
}

export default function SettingsIndex() {
  const mobile = useSyncExternalStore(subscribe, isMobile, () => false)

  if (!mobile) return <Navigate to="account" replace />

  return (
    <nav className="mobile-settings-list" aria-label="Settings sections">
      {settingsPages.map(page => (
        <Link key={page.path} to={page.path}>
          <span>
            <strong>{page.label}</strong>
            <small>{page.description}</small>
          </span>
          <ChevronRight size={16} aria-hidden="true" />
        </Link>
      ))}
    </nav>
  )
}