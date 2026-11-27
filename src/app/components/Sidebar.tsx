import SidebarEmblem from './brand/SidebarEmblem'
import { Link, NavLink } from 'react-router-dom'
import { CircleHelp, Compass, House, Settings, UserRound } from 'lucide-react'

const primary = [
  { to: '/feed', label: 'Home', icon: House },
  { to: '/suggestions', label: 'Explore', icon: Compass },
  { to: '/profile', label: 'Profile', icon: UserRound },
]

const secondary = [
  { to: '/settings', label: 'Settings', icon: Settings },
  { to: '/settings/help-support', label: 'Help & Support', icon: CircleHelp },
]

export default function Sidebar() {
  return (
    <aside className="shell-sidebar">
      <Link className="shell-brand" to="/feed" aria-label="iLink home">
        <SidebarEmblem />
        <span>iLink</span>
      </Link>

      <nav className="shell-nav" aria-label="Sidebar">
        {[primary, secondary].map((group, index) => (
          <div key={group[0].to}
            className={`shell-nav-group${index === 1 ? ' shell-nav-secondary' : ''}`}>
            {group.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} end={to === '/settings'}
                className={({ isActive }) => `shell-nav-item${isActive ? ' is-active' : ''}`}>
                <Icon size={19} aria-hidden="true" />
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
        ))}
      </nav>

      <div className="shell-landscape" aria-hidden="true">
        <span className="shell-moon" />
        <span className="shell-mountain" />
        <span className="shell-mountain shell-mountain-near" />
      </div>
    </aside>
  )
}