import { useRef, useState } from 'react'
import { Bell, ChevronDown, MessageCircle, Search } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const destinations = [
  { label: 'Home', to: '/feed' },
  { label: 'Explore', to: '/suggestions' },
  { label: 'Profile', to: '/profile' },
  { label: 'Settings', to: '/settings' },
  { label: 'Help & Support', to: '/settings/help-support' },
]

type TopNavProps = {
  displayName?: string
  avatarUrl?: string
}

export default function TopNav({ displayName = 'Account', avatarUrl }: TopNavProps) {
  const navigate = useNavigate()
  const accountMenu = useRef<HTMLDetailsElement>(null)
  const [query, setQuery] = useState('')

  const term = query.trim().toLowerCase()
  const matches = term
    ? destinations.filter(item => item.label.toLowerCase().includes(term))
    : []

  function openPage(to: string) {
    setQuery('')
    navigate(to)
  }

  return (
    <header className="shell-topnav">
      <form
        className="shell-search"
        role="search"
        onBlur={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) setQuery('')
        }}
        onSubmit={event => {
          event.preventDefault()
          if (matches[0]) openPage(matches[0].to)
        }}
        onKeyDown={event => {
          if (event.key === 'Escape') setQuery('')
        }}
      >
        <Search size={17} aria-hidden="true" />
        <input
          type="search"
          aria-label="Search iLink pages"
          placeholder="Search iLink..."
          value={query}
          onChange={event => setQuery(event.target.value)}
        />

        {term && (
          <div className="shell-dropdown shell-results">
            {matches.length ? matches.map(item => (
              <button type="button" key={item.to} onClick={() => openPage(item.to)}>
                {item.label}
              </button>
            )) : <p>No matching pages</p>}
          </div>
        )}
      </form>

      <div className="shell-actions">
        <button className="shell-icon" type="button" disabled aria-label="Notifications — coming soon">
          <Bell size={19} aria-hidden="true" />
        </button>
        <button className="shell-icon" type="button" disabled aria-label="Messages — coming soon">
          <MessageCircle size={19} aria-hidden="true" />
        </button>

        <details
          className="shell-account"
          ref={accountMenu}
          onBlur={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              event.currentTarget.open = false
            }
          }}
          onKeyDown={event => {
            if (event.key === 'Escape') {
              event.currentTarget.open = false
              event.currentTarget.querySelector('summary')?.focus()
            }
          }}
        >
          <summary aria-label={`Account menu for ${displayName}`}>
            <span className="shell-avatar">
              {avatarUrl
                ? <img src={avatarUrl} alt="" width="34" height="34" />
                : displayName.charAt(0).toUpperCase()}
            </span>
            <span className="shell-account-name">{displayName}</span>
            <ChevronDown size={14} aria-hidden="true" />
          </summary>

          <div
            className="shell-dropdown shell-account-menu"
            onClick={() => { if (accountMenu.current) accountMenu.current.open = false }}
          >
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
          </div>
        </details>
      </div>
    </header>
  )
}