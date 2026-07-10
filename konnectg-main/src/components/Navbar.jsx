import { NavLink } from 'react-router-dom'

const LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Categories', to: '/categories' },
  { label: 'Listings', to: '/listings' },
  { label: 'Map', to: '/map' },
  { label: 'Profile', to: '/profile' },
  { label: 'Merchant', to: '/merchant' },
  { label: 'Admin', to: '/admin' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-4 bg-[#66023C] px-6 py-4">
      <NavLink to="/" className="flex items-center gap-2.5 font-display text-xl font-bold">
        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-purple-600 text-white">
          K
        </span>
        <span>
          <span className="text-purple-700">Konnect</span>
          <span className="text-gold-dark">G</span>
        </span>
      </NavLink>

      <nav className="hidden items-center gap-7 lg:flex">
        {LINKS.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              `border-b-2 pb-1.5 text-sm font-medium transition ${
                isActive
                  ? 'border-gold font-semibold text-ink'
                  : 'border-transparent text-ink-soft hover:text-purple-600'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-purple-100 px-3.5 py-2 text-sm font-semibold text-purple-700">
        📍 Matigara-1
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </header>
  )
}
