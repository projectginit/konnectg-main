import { NavLink } from "react-router-dom";

/* ==========================================================
                        FOOTER LINKS
========================================================== */

const EXPLORE_LINKS = [
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

const AUTH_LINKS = [
  {
    label: "Login",
    to: "/login",
  },
  {
    label: "Sign Up",
    to: "/signup",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-slate-200
        bg-white
        px-5
        py-10
        sm:px-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* ==================================================
                            MAIN FOOTER
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-12
          "
        >
          {/* ==================================================
                                BRAND
          ================================================== */}

          <div
            className="
              text-center
              sm:text-left
            "
          >
            <NavLink
              to="/"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                text-lg
                font-extrabold
                tracking-tight
                sm:justify-start
              "
              aria-label="KonnectG home"
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-purple-600
                  text-sm
                  font-extrabold
                  text-white
                "
              >
                K
              </span>

              <span>
                <span className="text-slate-700">Konnect</span>

                <span className="text-[#66023c]">G</span>
              </span>
            </NavLink>

            <p
              className="
                mx-auto
                mt-2
                max-w-sm
                text-sm
                leading-6
                text-slate-500
                sm:mx-0
              "
            >
              Connecting Siliguri&apos;s local community, one business at a
              time.
            </p>
          </div>

          {/* ==================================================
                            EXPLORE
          ================================================== */}

          <div
            className="
              text-center
              sm:text-left
            "
          >
            <h3
              className="
                mb-3
                text-sm
                font-bold
                text-slate-800
              "
            >
              Explore
            </h3>

            <nav
              className="
                flex
                flex-wrap
                justify-center
                gap-x-6
                gap-y-3
                sm:justify-start
              "
              aria-label="Explore"
            >
              {EXPLORE_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="
                      text-sm
                      font-medium
                      text-slate-500
                      transition-colors
                      hover:text-[#66023c]
                    "
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* ==================================================
                            ACCOUNT
          ================================================== */}

          <div
            className="
              text-center
              sm:text-left
            "
          >
            <h3
              className="
                mb-3
                text-sm
                font-bold
                text-slate-800
              "
            >
              Account
            </h3>

            <nav
              className="
                flex
                flex-wrap
                justify-center
                gap-x-6
                gap-y-3
                sm:justify-start
              "
              aria-label="Account"
            >
              {AUTH_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className="
                      text-sm
                      font-medium
                      text-slate-500
                      transition-colors
                      hover:text-[#66023c]
                    "
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* ==================================================
                            DIVIDER
        ================================================== */}

        <div
          className="
            mt-8
            border-t
            border-slate-200
            pt-6
          "
        >
          <p
            className="
              text-center
              text-xs
              text-slate-400
            "
          >
            © 2026 KonnectG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
