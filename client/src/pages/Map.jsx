import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const LOCATIONS = ["Matigara", "Medical", "Shivamandir"];

export default function MapPage() {
  return (
    <div className="min-h-screen bg-[#F7F6FA]">
      <Navbar />

      <main
        className="
          mx-auto
          w-full
          max-w-6xl
          px-5
          py-10
          sm:px-6
          sm:py-12
        "
      >
        {/* ==================================================
                            HEADER
        ================================================== */}

        <div className="mb-7">
          <h1
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-800
            "
          >
            Nearby Businesses
          </h1>

          <p
            className="
              mt-2
              max-w-2xl
              text-sm
              leading-6
              text-slate-500
              sm:text-base
            "
          >
            Discover verified businesses around your selected area.
          </p>
        </div>

        {/* ==================================================
                        LOCATION SELECTOR
        ================================================== */}

        <div
          className="
            mb-6
            flex
            flex-wrap
            gap-2
          "
        >
          {LOCATIONS.map((location) => (
            <button
              key={location}
              type="button"
              className="
                rounded-full
                border
                border-[#E5E0EE]
                bg-white
                px-5
                py-2.5
                text-sm
                font-semibold
                text-slate-700
                transition
                hover:border-purple-300
                hover:bg-purple-50
                hover:text-purple-700
              "
            >
              📍 {location}
            </button>
          ))}
        </div>

        {/* ==================================================
                            MAP AREA
        ================================================== */}

        <section
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-[#EFEDF5]
            bg-white
            shadow-sm
          "
        >
          <div
            className="
              flex
              min-h-[500px]
              items-center
              justify-center
              bg-[#E8EEF5]
              sm:min-h-[600px]
            "
          >
            <div className="px-6 text-center">
              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-100
                  text-3xl
                "
              >
                📍
              </div>

              <h2
                className="
                  mt-5
                  text-xl
                  font-bold
                  text-slate-800
                "
              >
                Interactive Map
              </h2>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-md
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                The interactive business map will appear here once the map
                service and business API are connected.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================
                        QUICK DISCOVERY
        ================================================== */}

        <section
          className="
            mt-6
            rounded-2xl
            border
            border-[#EFEDF5]
            bg-white
            p-6
            shadow-sm
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <h2
                className="
                  text-lg
                  font-bold
                  text-slate-800
                "
              >
                Looking for a specific business?
              </h2>

              <p
                className="
                  mt-1
                  text-sm
                  text-slate-500
                "
              >
                Browse all available businesses and filter them by category,
                rating, or offers.
              </p>
            </div>

            <Link
              to="/listings"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-purple-700
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-purple-600
              "
            >
              Browse Listings →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
