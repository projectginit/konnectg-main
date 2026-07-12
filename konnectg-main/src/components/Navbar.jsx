import { MapPin, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";


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
    "Matigara-1",
    "Matigara-2",
    "Attharokhai",
    "Patharghata",
    "Champasari",
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="relative top-0 z-40 flex items-center justify-between gap-4 bg-[#66023C] px-6 py-4">
      <NavLink to="/" className="flex items-center gap-2.5 font-display text-xl font-bold">
        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-purple-600 text-white">
          K
        </span>
        <span>
          <span className="text-slate-200">Konnect</span>
          <span className="text-gray-500">G</span>
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
                  : 'border-transparent text-ink-soft hover:text-white'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-purple-100 px-3.5 py-2 text-sm font-semibold text-purple-700"
        >
        <MapPin size={16} className="text-red-500" />

        <span>{selectedLocation}</span>

        <ChevronDown
          size={16}
          className={`transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />        
        
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-2 w-48 rounded-md border border-gray-300 bg-white shadow-lg z-50 overflow-hidden">
            {locations.map((location) => (
              <button
                key={location}
                onClick={() => {
                  setSelectedLocation(location);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-4 py-2 text-left text-sm hover:bg-purple-100 ${
                  selectedLocation === location
                    ? "bg-gray-200 font-semibold"
                    : ""
                }`}
              >
            <>
            <MapPin size={16} className="text-red-500" />
            <span>{location}</span>
          </>
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
    );
    }