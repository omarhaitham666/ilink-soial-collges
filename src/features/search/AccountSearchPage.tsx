import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import { ProfileBaseData, mockAbout } from '../profile/data/profileData'

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/^@/, '').replace(/\s+/g, '')
}

// Each searchable account carries the route for its own profile.
const accounts = [{
  id: ProfileBaseData.id,
  name: ProfileBaseData.name,
  handle: ProfileBaseData.userName,
  alias: mockAbout.userName ?? '',
  avatar: ProfileBaseData.avatar,
  path: '/profile/overview',
}]

export default function AccountSearchPage() {
  const [query, setQuery] = useState('')
  const term = normalize(query)
  const results = accounts.filter(account =>
    [account.name, account.handle, account.alias].some(value =>
      normalize(value).includes(term),
    ),
  )

  return (
    <section className="il-account-search" aria-labelledby="account-search-title">
      <h1 id="account-search-title">Search accounts</h1>

      <label className="il-search-field">
        <Search size={20} aria-hidden="true" />
        <input
          type="search"
          aria-label="Search by name or username"
          placeholder="Name or @username"
          autoComplete="off"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
      </label>

      <ul aria-label="Accounts">
        {results.map(account => (
          <li key={account.id}>
            <Link to={account.path} className="il-search-account">
              <span className="il-search-photo">
                {account.avatar
                  ? <img src={account.avatar} alt="" width="44" height="44" />
                  : account.name.slice(0, 1)}
              </span>
              <span>
                <strong>{account.name}</strong>
                <small>@{account.handle}</small>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {results.length === 0 && <p role="status">No accounts found.</p>}
    </section>
  )
}