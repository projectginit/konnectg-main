import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { MapPin, ChevronDown, Menu, X } from "lucide-react";

/* ==========================================================
                        NAVIGATION
========================================================== */

const LINKS = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Categories",
    to: "/categories",
  },
  {
    label: "Listings",
    to: "/listings",
  },
  {
    label: "Map",
    to: "/map",
  },
  {
    label: "Profile",
    to: "/profile",
  },
  {
    label: "Merchant",
    to: "/merchant",
  },
];

/* ==========================================================
                        LOCATIONS
========================================================== */

const LOCATIONS = ["Matigara", "Medical", "Shivamandir"];

const LOCATION_STORAGE_KEY = "konnectg_selected_location";

export default function Navbar() {
  /* ========================================================
                        STATE
  ======================================================== */

  const [selectedLocation, setSelectedLocation] = useState(() => {
    const savedLocation = localStorage.getItem(LOCATION_STORAGE_KEY);

    return savedLocation || LOCATIONS[0];
  });

  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const locationRef = useRef(null);

  /* ========================================================
                    CLOSE LOCATION DROPDOWN
  ======================================================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setIsLocationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* ========================================================
                    CLOSE MOBILE MENU
  ======================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ========================================================
                    NAVIGATION HANDLER
  ======================================================== */

  const handleNavigation = () => {
    setIsMobileMenuOpen(false);

    setIsLocationOpen(false);
  };

  /* ========================================================
                    LOCATION HANDLER
  ======================================================== */

  const handleLocationChange = (location) => {
    setSelectedLocation(location);

    localStorage.setItem(LOCATION_STORAGE_KEY, location);

    setIsLocationOpen(false);

    setIsMobileMenuOpen(false);
  };

  /* ========================================================
                            RENDER
  ======================================================== */

  return (
    <header
      className="
        relative
        top-0
        z-50
        w-full
        px-4
        sm:px-6
      "
      style={{
        background: "#7B0040",

        boxShadow: "0 2px 20px rgba(0,0,0,0.3)",

        borderBottom: "1px solid rgba(245,197,24,0.2)",
      }}
    >
      <div
        className="
          mx-auto
          flex
          min-h-[68px]
          max-w-7xl
          items-center
          justify-between
          gap-4
        "
      >
        {/* ==================================================
                            LOGO
        ================================================== */}

        <NavLink
          to="/"
          onClick={handleNavigation}
          className="
            flex
            shrink-0
            items-center
            gap-2.5
          "
          aria-label="KonnectG home"
        >
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-[10px]
              text-base
              font-extrabold
              text-white
            "
            style={{
              background: "linear-gradient(135deg, #7C3AED, #5B2A8C)",

              boxShadow: "0 0 12px rgba(124,58,237,0.5)",
            }}
          >
            K
          </div>

          <span
            className="
              text-xl
              font-extrabold
              tracking-tight
            "
          >
            <span className="text-white">Konnect</span>

            <span className="text-gold">G</span>
          </span>
        </NavLink>

        {/* ==================================================
                        DESKTOP NAVIGATION
        ================================================== */}

        <nav
          className="
            hidden
            items-center
            lg:flex
          "
          aria-label="Main navigation"
        >
          {LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              onClick={handleNavigation}
              className={({ isActive }) =>
                `
                relative
                px-3
                py-[18px]
                text-sm
                font-semibold
                tracking-wide
                transition-all
                duration-150
                xl:px-4

                ${
                  isActive
                    ? `
                      text-white
                      after:absolute
                      after:bottom-0
                      after:left-3
                      after:right-3
                      after:h-[3px]
                      after:rounded-t-full
                      after:bg-gold
                      after:content-[""]
                    `
                    : `
                      text-white/65
                      hover:text-white
                    `
                }
                `
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ==================================================
                        DESKTOP RIGHT SIDE
        ================================================== */}

        <div
          className="
            hidden
            items-center
            gap-3
            lg:flex
          "
        >
          {/* LOCATION */}

          <div className="relative shrink-0" ref={locationRef}>
            <button
              type="button"
              onClick={() => setIsLocationOpen((previous) => !previous)}
              aria-expanded={isLocationOpen}
              aria-haspopup="listbox"
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                px-3
                py-2
                text-sm
                font-semibold
                text-white
                transition-all
                duration-150
                hover:bg-white/10
              "
              style={{
                border: "1.5px solid rgba(245,197,24,0.5)",

                background: "rgba(245,197,24,0.08)",
              }}
            >
              <MapPin size={16} className="text-gold" />

              <span>{selectedLocation}</span>

              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isLocationOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isLocationOpen && (
              <div
                className="
                  absolute
                  right-0
                  mt-2
                  w-48
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  shadow-xl
                "
                style={{
                  background: "#7B0040",
                }}
                role="listbox"
                aria-label="Select location"
              >
                {LOCATIONS.map((location) => (
                  <button
                    key={location}
                    type="button"
                    role="option"
                    aria-selected={selectedLocation === location}
                    onClick={() => handleLocationChange(location)}
                    className="
                        block
                        w-full
                        px-4
                        py-3
                        text-left
                        text-sm
                        text-white
                        transition-colors
                        hover:bg-white/10
                      "
                  >
                    <span className="mr-2">📍</span>

                    {location}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* LOGIN */}

          <NavLink
            to="/login"
            onClick={handleNavigation}
            className="
              rounded-lg
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              transition-colors
              hover:bg-white/10
            "
          >
            Login
          </NavLink>

          {/* SIGN UP */}

          <NavLink
            to="/signup"
            onClick={handleNavigation}
            className="
              rounded-lg
              bg-white
              px-4
              py-2
              text-sm
              font-bold
              text-[#7B0040]
              transition-all
              hover:bg-gray-100
              hover:shadow-md
            "
          >
            Sign Up
          </NavLink>
        </div>

        {/* ==================================================
                        MOBILE MENU BUTTON
        ================================================== */}

        <button
          type="button"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            text-white
            transition-colors
            hover:bg-white/10
            lg:hidden
          "
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ==================================================
                        MOBILE MENU
      ================================================== */}

      {isMobileMenuOpen && (
        <div
          className="
            border-t
            border-white/10
            pb-5
            pt-3
            lg:hidden
          "
        >
          {/* MOBILE NAVIGATION */}

          <nav className="flex flex-col" aria-label="Mobile navigation">
            {LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={handleNavigation}
                className={({ isActive }) =>
                  `
                  rounded-lg
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  transition-colors

                  ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }
                  `
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE LOCATION */}

          <div
            className="
              mt-3
              border-t
              border-white/10
              pt-3
            "
          >
            <p
              className="
                mb-2
                px-4
                text-xs
                font-semibold
                uppercase
                tracking-wider
                text-white/50
              "
            >
              Location
            </p>

            <div className="grid grid-cols-1 gap-1">
              {LOCATIONS.map((location) => (
                <button
                  key={location}
                  type="button"
                  onClick={() => handleLocationChange(location)}
                  className="
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      px-4
                      py-3
                      text-left
                      text-sm
                      text-white/80
                      transition-colors
                      hover:bg-white/10
                      hover:text-white
                    "
                >
                  <MapPin size={16} className="text-gold" />

                  {location}
                </button>
              ))}
            </div>
          </div>

          {/* MOBILE AUTH */}

          <div
            className="
              mt-4
              grid
              grid-cols-2
              gap-3
              border-t
              border-white/10
              pt-4
            "
          >
            <NavLink
              to="/login"
              onClick={handleNavigation}
              className="
                flex
                items-center
                justify-center
                rounded-lg
                border
                border-white/20
                px-4
                py-3
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:bg-white/10
              "
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              onClick={handleNavigation}
              className="
                flex
                items-center
                justify-center
                rounded-lg
                bg-white
                px-4
                py-3
                text-sm
                font-bold
                text-[#7B0040]
                transition-all
                hover:bg-gray-100
              "
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
