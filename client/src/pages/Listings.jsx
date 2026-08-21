import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

/* ==========================================================
                            FILTERS
========================================================== */

const FILTERS = ["All", "Verified Only", "Top Rated", "With Offers"];

/* ==========================================================
                        MOCK LISTINGS
========================================================== */
/*
  Temporary frontend data.

  This will eventually come from:

  GET /api/businesses
*/

const ALL_LISTINGS = [
  {
    id: "1",
    name: "Saffron Kitchen",
    type: "North Indian",
    category: "Restaurants & Food",
    area: "Matigara",
    stars: 5,
    reviews: 94,
    distance: "0.8 km",
    verified: true,
    offer: "20% OFF",
    phone: "+919876543210",
    cover: "linear-gradient(135deg,#FFD5B8,#FFB5A0)",
  },

  {
    id: "2",
    name: "Green Leaf Cafe",
    type: "Cafe & Bakery",
    category: "Restaurants & Food",
    area: "Medical",
    stars: 5,
    reviews: 67,
    distance: "1.2 km",
    verified: true,
    offer: null,
    phone: "+919876543211",
    cover: "linear-gradient(135deg,#B8F5D8,#A0EEC8)",
  },

  {
    id: "3",
    name: "Biryani House",
    type: "Mughlai",
    category: "Restaurants & Food",
    area: "Shivamandir",
    stars: 4,
    reviews: 45,
    distance: "2.1 km",
    verified: true,
    offer: null,
    phone: "+919876543212",
    cover: "linear-gradient(135deg,#FFF3B0,#FFE870)",
  },

  {
    id: "4",
    name: "Spice Garden",
    type: "Multi-cuisine",
    category: "Restaurants & Food",
    area: "Medical",
    stars: 4,
    reviews: 38,
    distance: "1.8 km",
    verified: true,
    offer: "BUY 1 GET 1",
    phone: "+919876543213",
    cover: "linear-gradient(135deg,#C8E6FF,#A8D4FF)",
  },

  {
    id: "5",
    name: "The Dhaba",
    type: "Punjabi",
    category: "Restaurants & Food",
    area: "Shivamandir",
    stars: 5,
    reviews: 112,
    distance: "3.2 km",
    verified: false,
    offer: null,
    phone: "+919876543214",
    cover: "linear-gradient(135deg,#FFD9F0,#FFC0E8)",
  },

  {
    id: "6",
    name: "Rolls & Wraps",
    type: "Fast Food",
    category: "Restaurants & Food",
    area: "Matigara",
    stars: 3,
    reviews: 29,
    distance: "0.5 km",
    verified: true,
    offer: "₹50 OFF",
    phone: "+919876543215",
    cover: "linear-gradient(135deg,#D8F5C0,#C0EDA0)",
  },

  {
    id: "7",
    name: "City Hospital",
    type: "Multi-speciality",
    category: "Healthcare",
    area: "Matigara",
    stars: 5,
    reviews: 210,
    distance: "1.0 km",
    verified: true,
    offer: null,
    phone: "+919876543216",
    cover: "linear-gradient(135deg,#FFE0E0,#FFC8C8)",
  },

  {
    id: "8",
    name: "Dr. Roy Clinic",
    type: "General Physician",
    category: "Healthcare",
    area: "Medical",
    stars: 4,
    reviews: 88,
    distance: "2.3 km",
    verified: true,
    offer: "10% OFF",
    phone: "+919876543217",
    cover: "linear-gradient(135deg,#E0F0FF,#C8E0FF)",
  },

  {
    id: "9",
    name: "Sunrise Pharmacy",
    type: "Pharmacy",
    category: "Healthcare",
    area: "Shivamandir",
    stars: 4,
    reviews: 54,
    distance: "1.5 km",
    verified: true,
    offer: null,
    phone: "+919876543218",
    cover: "linear-gradient(135deg,#E0FFE8,#C8FFD8)",
  },

  {
    id: "10",
    name: "Gupta General Store",
    type: "Daily Needs",
    category: "Grocery & Retail",
    area: "Shivamandir",
    stars: 4,
    reviews: 89,
    distance: "0.9 km",
    verified: true,
    offer: "₹100 OFF",
    phone: "+919876543219",
    cover: "linear-gradient(135deg,#FFF3B0,#FFE870)",
  },

  {
    id: "11",
    name: "Fresh Mart",
    type: "Supermarket",
    category: "Grocery & Retail",
    area: "Matigara",
    stars: 5,
    reviews: 143,
    distance: "1.1 km",
    verified: true,
    offer: null,
    phone: "+919876543220",
    cover: "linear-gradient(135deg,#D8F5C0,#C0EDA0)",
  },

  {
    id: "12",
    name: "Ananya Beauty Studio",
    type: "Salon",
    category: "Beauty & Wellness",
    area: "Medical",
    stars: 5,
    reviews: 64,
    distance: "1.4 km",
    verified: true,
    offer: "BUY 1 GET 1",
    phone: "+919876543221",
    cover: "linear-gradient(135deg,#FFD9F0,#FFC0E8)",
  },

  {
    id: "13",
    name: "Roy Cooling Solutions",
    type: "AC Service",
    category: "Home Services",
    area: "Matigara",
    stars: 4,
    reviews: 37,
    distance: "2.8 km",
    verified: true,
    offer: "30% OFF",
    phone: "+919876543222",
    cover: "linear-gradient(135deg,#C8E6FF,#A8D4FF)",
  },

  {
    id: "14",
    name: "FitZone Gym",
    type: "Fitness Center",
    category: "Fitness & Gym",
    area: "Matigara",
    stars: 5,
    reviews: 76,
    distance: "0.6 km",
    verified: true,
    offer: null,
    phone: "+919876543223",
    cover: "linear-gradient(135deg,#E8E0FF,#D0C0FF)",
  },

  {
    id: "15",
    name: "AutoCare Garage",
    type: "Car Repair",
    category: "Automobile",
    area: "Shivamandir",
    stars: 4,
    reviews: 51,
    distance: "3.0 km",
    verified: true,
    offer: null,
    phone: "+919876543224",
    cover: "linear-gradient(135deg,#C8F5F0,#A0EDE8)",
  },
];

/* ==========================================================
                        STAR RATING
========================================================== */

function StarRating({ count }) {
  return (
    <span
      className="text-sm text-amber-500"
      aria-label={`${count} out of 5 stars`}
    >
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </span>
  );
}

/* ==========================================================
                    FILTER LISTINGS
========================================================== */

function filterListings(listings, category, search, filter) {
  const normalizedSearch = search.trim().toLowerCase();

  return listings.filter((listing) => {
    /* ======================================================
                        CATEGORY
    ====================================================== */

    if (category && listing.category !== category) {
      return false;
    }

    /* ======================================================
                        SEARCH
    ====================================================== */

    const matchesSearch =
      !normalizedSearch ||
      listing.name.toLowerCase().includes(normalizedSearch) ||
      listing.type.toLowerCase().includes(normalizedSearch) ||
      listing.category.toLowerCase().includes(normalizedSearch) ||
      listing.area.toLowerCase().includes(normalizedSearch);

    if (!matchesSearch) {
      return false;
    }

    /* ======================================================
                        FILTER
    ====================================================== */

    switch (filter) {
      case "Verified Only":
        return listing.verified;

      case "Top Rated":
        return listing.stars >= 5;

      case "With Offers":
        return Boolean(listing.offer);

      case "All":
      default:
        return true;
    }
  });
}

/* ==========================================================
                        LISTINGS PAGE
========================================================== */

export default function Listings() {
  const [searchParams, setSearchParams] = useSearchParams();

  /* ========================================================
                    URL PARAMETERS
  ======================================================== */

  const categoryParam = searchParams.get("category") || "";

  const searchQuery = searchParams.get("search") || "";

  /* ========================================================
                        FILTER STATE
  ======================================================== */

  const [activeFilter, setActiveFilter] = useState("All");

  /* ========================================================
                        FILTER DATA
  ======================================================== */

  const filteredListings = filterListings(
    ALL_LISTINGS,
    categoryParam,
    searchQuery,
    activeFilter,
  );

  /* ========================================================
                    CLEAR CATEGORY
  ======================================================== */

  const handleClearCategory = () => {
    const nextParams = new URLSearchParams(searchParams);

    nextParams.delete("category");

    setSearchParams(nextParams);
  };

  return (
    <div className="min-h-screen bg-[#F7F6FA]">
      {/* ==================================================
                            NAVBAR
      ================================================== */}

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

        <div
          className="
            mb-7
            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          {categoryParam && (
            <button
              type="button"
              onClick={handleClearCategory}
              className="
                text-sm
                font-semibold
                text-purple-600
                transition
                hover:text-purple-800
                hover:underline
              "
            >
              ← All Categories
            </button>
          )}

          <h1
            className="
              w-full
              text-2xl
              font-extrabold
              tracking-tight
              text-slate-800
              sm:w-auto
              sm:text-3xl
            "
          >
            {categoryParam
              ? categoryParam
              : searchQuery
                ? `Search results for "${searchQuery}"`
                : "All Listings"}
          </h1>

          <span
            className="
              rounded-full
              bg-purple-100
              px-3
              py-1
              text-sm
              font-semibold
              text-purple-700
            "
          >
            {filteredListings.length} results
          </span>
        </div>

        {/* ==================================================
                        FILTER PILLS
        ================================================== */}

        <div
          className="
            mb-8
            flex
            flex-wrap
            gap-2
            sm:gap-3
          "
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-semibold
                transition
                sm:px-5

                ${
                  activeFilter === filter
                    ? `
                      border-purple-700
                      bg-purple-700
                      text-white
                    `
                    : `
                      border-[#E5E0EE]
                      bg-white
                      text-slate-700
                      hover:border-purple-300
                    `
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* ==================================================
                        EMPTY STATE
        ================================================== */}

        {filteredListings.length === 0 ? (
          <div
            className="
              rounded-2xl
              bg-white
              px-5
              py-24
              text-center
              shadow-sm
            "
          >
            <p className="text-4xl" aria-hidden="true">
              🔍
            </p>

            <p
              className="
                mt-3
                font-semibold
                text-slate-800
              "
            >
              No results found.
            </p>

            <p
              className="
                mt-1
                text-sm
                text-slate-500
              "
            >
              {searchQuery
                ? `No businesses matched "${searchQuery}".`
                : "Try a different filter or category."}
            </p>
          </div>
        ) : (
          /* ==================================================
                            LISTINGS GRID
          ================================================== */

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {filteredListings.map((business) => (
              <article
                key={business.id}
                className="
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#EFEDF5]
                    bg-white
                    shadow-sm
                    transition
                    hover:-translate-y-0.5
                    hover:shadow-lg
                  "
              >
                {/* ==================================================
                                COVER
                  ================================================== */}

                <div
                  className="
                      relative
                      h-36
                    "
                  style={{
                    background: business.cover,
                  }}
                >
                  {business.offer && (
                    <span
                      className="
                          absolute
                          left-3
                          top-3
                          rounded-full
                          bg-gold
                          px-3
                          py-1
                          text-xs
                          font-bold
                          text-purple-900
                        "
                    >
                      {business.offer}
                    </span>
                  )}

                  {business.verified && (
                    <span
                      className="
                          absolute
                          right-3
                          top-3
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-full
                          bg-white
                          text-emerald-500
                          shadow
                        "
                      title="Verified business"
                      aria-label="Verified business"
                    >
                      ✓
                    </span>
                  )}
                </div>

                {/* ==================================================
                                CONTENT
                  ================================================== */}

                <div className="p-5">
                  <h2
                    className="
                        text-lg
                        font-bold
                        text-slate-800
                      "
                  >
                    {business.name}
                  </h2>

                  <p
                    className="
                        mt-0.5
                        text-sm
                        text-slate-500
                      "
                  >
                    {business.type}
                    {" • "}
                    {business.area}
                  </p>

                  {/* ==================================================
                                RATING / DISTANCE
                    ================================================== */}

                  <div
                    className="
                        mt-3
                        flex
                        flex-wrap
                        items-center
                        justify-between
                        gap-2
                      "
                  >
                    <div
                      className="
                          flex
                          items-center
                          gap-1.5
                        "
                    >
                      <StarRating count={business.stars} />

                      <span
                        className="
                            text-sm
                            text-slate-500
                          "
                      >
                        ({business.reviews})
                      </span>
                    </div>

                    <span
                      className="
                          text-sm
                          text-slate-500
                        "
                    >
                      📍 {business.distance}
                    </span>
                  </div>

                  {/* ==================================================
                                ACTIONS
                    ================================================== */}

                  <div
                    className="
                        mt-4
                        flex
                        gap-3
                      "
                  >
                    <a
                      href={`tel:${business.phone}`}
                      className="
                          flex
                          flex-1
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          bg-emerald-500
                          py-2.5
                          text-sm
                          font-semibold
                          text-white
                          transition
                          hover:bg-emerald-600
                        "
                    >
                      📞 Call
                    </a>

                    <Link
                      to={`/businesses/${business.id}`}
                      className="
                          flex
                          flex-1
                          items-center
                          justify-center
                          rounded-full
                          bg-purple-50
                          py-2.5
                          text-sm
                          font-semibold
                          text-purple-700
                          transition
                          hover:bg-purple-100
                        "
                    >
                      View
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* ==================================================
                            FOOTER
      ================================================== */}

      <Footer />
    </div>
  );
}
