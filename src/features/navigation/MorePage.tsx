import { Link } from 'react-router-dom'
import {
  Bell, ChevronRight, CircleHelp, Compass, Moon, Settings, Shield, UserRound,
} from 'lucide-react'
import './more.css'

const groups = [
  {
    title: 'Discover',
    links: [
      { to: '/suggestions', label: 'Explore suggestions', icon: Compass },
    ],
  },
  {
    title: 'Settings',
    links: [
      { to: '/settings', label: 'All settings', icon: Settings },
      { to: '/settings/account', label: 'Account', icon: UserRound },
      { to: '/settings/privacy-security', label: 'Privacy & security', icon: Shield },
      { to: '/settings/notifications', label: 'Notification preferences', icon: Bell },
      { to: '/settings/appearance', label: 'Appearance', icon: Moon },
    ],
  },
  {
    title: 'Support',
    links: [
      { to: '/settings/help-support', label: 'Help & support', icon: CircleHelp },
    ],
  },
]

export default function MorePage() {
  return (
    <section className="il-more-page" aria-labelledby="il-more-title">
      <h1 id="il-more-title">More</h1>

      {groups.map(group => (
        <section key={group.title}>
          <h2>{group.title}</h2>
          <ul>
            {group.links.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <Link to={to}>
                  <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                  <span>{label}</span>
                  <ChevronRight size={16} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </section>
  )
}