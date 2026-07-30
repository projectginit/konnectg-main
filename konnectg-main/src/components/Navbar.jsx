import { NavLink } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { MapPin, ChevronDown } from 'lucide-react'

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
  const locations = [
  'Matigara-1',
  'Matigara-2',
  'Siliguri',
  'Pradhan Nagar',
  'Bagdogra',
  ]

  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 px-6"
      style={{
        background: '#7B0040',
        boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
        borderBottom: '1px solid rgba(245,197,24,0.2)',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">

        {/* Logo */}
        <NavLink to="/" className="flex shrink-0 items-center gap-2.5 py-3.5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-[10px] font-display text-base font-extrabold text-white"
            style={{
              background: 'linear-gradient(135deg, #7C3AED, #5B2A8C)',
              boxShadow: '0 0 12px rgba(124,58,237,0.5)',
            }}
          >
            K
          </div>
          <span className="font-display text-xl font-extrabold tracking-tight">
            <span className="text-white">Konnect</span>
            <span className="text-gold">G</span>
          </span>
        </NavLink>

        {/* Nav links */}
        <nav className="hidden items-center lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative px-4 py-[18px] text-sm font-semibold tracking-wide transition-all duration-150 ${
                  isActive
                    ? 'text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[3px] after:rounded-t-full after:bg-gold after:content-[""]'
                    : 'text-white/55 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Location pill */}
        <div className="relative shrink-0" ref={dropdownRef}>
  <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-150 hover:bg-white/10"
        style={{
          border: '1.5px solid rgba(245,197,24,0.5)',
          background: 'rgba(245,197,24,0.08)',
        }}
      >
        <MapPin size={16} className="text-gold" />
        <span>{selectedLocation}</span>

        <ChevronDown
          size={16}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-white/10 shadow-xl"
          style={{
            background: '#7B0040',
          }}
        >
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => {
                setSelectedLocation(location)
                setIsOpen(false)
              }}
              className="block w-full px-4 py-3 text-left text-sm text-white transition-colors hover:bg-white/10"
            >
              📍 {location}
            </button>
          ))}
        </div>
      )}
    </div>

      </div>
    </header>
  )
}