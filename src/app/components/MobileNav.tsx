import { Link, NavLink, useLocation } from 'react-router-dom'
import { Bell, ChevronLeft, Ellipsis, House, Link2, Plus, Search, UserRound } from 'lucide-react'
import { ProfileBaseData } from '../../features/profile/data/profileData'
import './mobile-navigation.css'

export const settingsPages = [
  { path: '/settings/account', label: 'Account', description: 'Update your profile information' },
  { path: '/settings/privacy-security', label: 'Privacy & Security', description: 'Manage your privacy and security' },
  { path: '/settings/notifications', label: 'Notifications', description: 'Manage your notification preferences' },
  { path: '/settings/appearance', label: 'Appearance', description: 'Theme, color, and display' },
  { path: '/settings/help-support', label: 'Help & Support', description: 'Get help and explore support' },
]

type MobileNavProps = {
  avatarUrl?: string
  onCreate?: () => void
  onMessages?: () => void
}

function ILinkMessagesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M7 3.5h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-5.2L6 21v-3.7a4 4 0 0 1-3-3.8v-6a4 4 0 0 1 4-4Z" />
      <path d="m10.5 12.2-.7.7a2 2 0 0 1-2.8-2.8l2-2a2 2 0 0 1 2.8 0" />
      <path d="m13.5 8.8.7-.7a2 2 0 0 1 2.8 2.8l-2 2a2 2 0 0 1-2.8 0" />
      <path d="m10.6 11.9 2.8-2.8" />
    </svg>
  )
}

export default function MobileNav({
  avatarUrl = ProfileBaseData.avatar, onCreate, onMessages,
}: MobileNavProps) {
  const { pathname } = useLocation()
  const detail = settingsPages.find(page => page.path === pathname.replace(/\/$/, ''))

  return (
    <>
      <header className={`mobile-top ${detail ? 'mobile-top-detail' : ''}`}>
        {detail ? (
          <>
            <Link className="mobile-icon" to="/settings" aria-label="Back to settings">
              <ChevronLeft />
            </Link>
            <span className="mobile-page-title">{detail.label}</span>
          </>
        ) : (
          <>
            <Link className="mobile-brand" to="/feed" aria-label="iLink home">
              <Link2 size={22} strokeWidth={3} /> iLink
            </Link>
            <button className="mobile-icon" type="button" disabled
              aria-label="Notifications inbox unavailable">
              <Bell />
            </button>
          </>
        )}
      </header>

      <nav className="il-bottom-bar" aria-label="Mobile navigation">
        <NavLink to="/feed" aria-label="Home"><House /></NavLink>
        <NavLink to="/search" aria-label="Search accounts"><Search /></NavLink>

        <button type="button" disabled={!onCreate} onClick={onCreate} aria-label="Create a post">
          <span className="il-create-disc"><Plus /></span>
        </button>

        <button type="button" disabled={!onMessages} onClick={onMessages} aria-label="Messages">
          <ILinkMessagesIcon />
        </button>

        <NavLink to="/more" aria-label="More"><Ellipsis /></NavLink>

        <NavLink to="/profile" aria-label="Profile">
          <span className="il-nav-photo">
            {avatarUrl
              ? <img src={avatarUrl} alt="" width="28" height="28" />
              : <UserRound />}
          </span>
        </NavLink>
      </nav>
    </>
  )
}