import { Link } from "react-router-dom";

/* ==========================================================
                        CATEGORIES
========================================================== */

const CATEGORIES = [
  {
    id: "restaurants-food",
    icon: "🍽️",
    bg: "#F1E6FB",
    name: "Restaurants & Food",
    count: 48,
  },
  {
    id: "healthcare",
    icon: "🏥",
    bg: "#E3F1FB",
    name: "Healthcare",
    count: 32,
  },
  {
    id: "education",
    icon: "📚",
    bg: "#E2F7EA",
    name: "Education",
    count: 25,
  },
  {
    id: "grocery-retail",
    icon: "🛒",
    bg: "#E1F0FB",
    name: "Grocery & Retail",
    count: 56,
  },
  {
    id: "beauty-wellness",
    icon: "💇‍♀️",
    bg: "#FBE5EF",
    name: "Beauty & Wellness",
    count: 19,
  },
  {
    id: "home-services",
    icon: "🔧",
    bg: "#FCEBDB",
    name: "Home Services",
    count: 41,
  },
];

/* ==========================================================
                    FEATURED MERCHANTS
========================================================== */

const MERCHANTS = [
  {
    id: "sharma-electronics",
    cover: "#EDE3FB",
    name: "Sharma Electronics",
    category: "Electronics & Appliances",
    location: "Matigara",
    rating: "★★★★★",
    reviews: 127,
  },
  {
    id: "gupta-general-store",
    cover: "#FCE9C2",
    name: "Gupta General Store",
    category: "Grocery & Daily Needs",
    location: "Shivamandir",
    rating: "★★★★☆",
    reviews: 89,
  },
  {
    id: "ananya-beauty-studio",
    cover: "#CFF6E3",
    name: "Ananya Beauty Studio",
    category: "Beauty & Wellness",
    location: "Medical",
    rating: "★★★★★",
    reviews: 64,
  },
];

/* ==========================================================
                        OFFERS
========================================================== */

const OFFERS = [
  {
    id: "ac-service",
    pill: "30% OFF",
    title: "AC Service & Repair",
    business: "Roy Cooling Solutions",
    location: "Matigara",
    valid: "Valid till Jan 15, 2026",
  },
  {
    id: "hair-spa",
    pill: "BUY 1 GET 1",
    title: "Hair Spa Treatment",
    business: "Ananya Beauty Studio",
    location: "Medical",
    valid: "Valid till Dec 25, 2026",
  },
  {
    id: "grocery-offer",
    pill: "₹100 OFF",
    title: "Grocery Above ₹1000",
    business: "Gupta General Store",
    location: "Shivamandir",
    valid: "Valid till Dec 31, 2026",
  },
];

/* ==========================================================
                        HOW IT WORKS
========================================================== */

const STEPS = [
  {
    id: "discover",
    icon: "🔍",
    bg: "#EDE3FB",
    label: "Step 1",
    title: "Discover",
    text: "Search and explore local businesses in your neighbourhood.",
  },
  {
    id: "verify",
    icon: "✅",
    bg: "#D6F5E3",
    label: "Step 2",
    title: "Verify",
    text: "Every listed business is verified before appearing as verified.",
  },
  {
    id: "connect",
    icon: "🧡",
    bg: "#FCEFC4",
    label: "Step 3",
    title: "Connect",
    text: "Connect directly via call, WhatsApp, or visit in person.",
  },
];

export default function Cards() {
  return (
    <>
      {/* ======================================================
                        POPULAR CATEGORIES
      ====================================================== */}

      <section
        className="px-5 py-14 sm:px-6 sm:py-16"
        aria-labelledby="popular-categories"
      >
        <div className="mx-auto max-w-6xl">
          <div
            className="
              mb-7
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <h2
              id="popular-categories"
              className="
                text-xl
                font-bold
                text-slate-800
                sm:text-2xl
              "
            >
              Popular Categories
            </h2>

            <Link
              to="/categories"
              className="
                shrink-0
                text-sm
                font-semibold
                text-purple-600
                transition-colors
                hover:text-purple-800
              "
            >
              View All →
            </Link>
          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              sm:gap-4
              lg:grid-cols-6
            "
          >
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={`/listings?category=${encodeURIComponent(category.name)}`}
                className="
                  rounded-2xl
                  border
                  border-transparent
                  bg-[#F7F6FA]
                  p-4
                  text-left
                  transition
                  hover:-translate-y-0.5
                  hover:border-purple-100
                  hover:bg-white
                  hover:shadow-lg
                  focus-visible:outline-2
                  focus-visible:outline-purple-700
                  sm:p-5
                "
              >
                <div
                  className="
                    mb-3
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    text-xl
                  "
                  style={{
                    background: category.bg,
                  }}
                  aria-hidden="true"
                >
                  {category.icon}
                </div>

                <h3
                  className="
                    text-sm
                    font-semibold
                    leading-snug
                    text-slate-800
                  "
                >
                  {category.name}
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-slate-500
                  "
                >
                  {category.count} listings
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
                    TOP VERIFIED MERCHANTS
      ====================================================== */}

      <section className="px-5 py-8 sm:px-6" aria-labelledby="top-merchants">
        <div className="mx-auto max-w-6xl">
          <h2
            id="top-merchants"
            className="
              mb-7
              text-xl
              font-bold
              text-slate-800
              sm:text-2xl
            "
          >
            Top Verified Merchants
          </h2>

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {MERCHANTS.map((merchant) => (
              <article
                key={merchant.id}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-purple-50
                  bg-white
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                {/* COVER */}

                <div
                  className="
                    flex
                    h-32
                    items-start
                    justify-end
                    p-3.5
                  "
                  style={{
                    background: merchant.cover,
                  }}
                >
                  <span
                    className="
                      flex
                      items-center
                      gap-1
                      rounded-full
                      bg-white
                      px-3
                      py-1
                      text-xs
                      font-bold
                      text-emerald-600
                    "
                  >
                    ✓ Verified
                  </span>
                </div>

                {/* CONTENT */}

                <div className="p-5">
                  <h3
                    className="
                      font-bold
                      text-slate-800
                    "
                  >
                    {merchant.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-500
                    "
                  >
                    {merchant.category}
                    {" • "}
                    {merchant.location}
                  </p>

                  <p
                    className="
                      mb-4
                      mt-2.5
                      text-sm
                      text-amber-500
                    "
                  >
                    {merchant.rating}

                    <span
                      className="
                        ml-1
                        text-slate-500
                      "
                    >
                      ({merchant.reviews} reviews)
                    </span>
                  </p>

                  <Link
                    to={`/listings?business=${encodeURIComponent(
                      merchant.name,
                    )}`}
                    className="
                      block
                      w-full
                      rounded-full
                      bg-purple-50
                      py-2.5
                      text-center
                      text-sm
                      font-semibold
                      text-purple-700
                      transition
                      hover:bg-purple-100
                    "
                  >
                    View Profile
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
                        LOCAL OFFERS
      ====================================================== */}

      <section className="px-5 py-8 sm:px-6" aria-labelledby="local-offers">
        <div className="mx-auto max-w-6xl">
          <h2
            id="local-offers"
            className="
              mb-7
              text-xl
              font-bold
              text-slate-800
              sm:text-2xl
            "
          >
            🔥 Local Offers &amp; Deals
          </h2>

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {OFFERS.map((offer) => (
              <article
                key={offer.id}
                className="
                  rounded-2xl
                  border
                  border-purple-50
                  bg-white
                  p-5
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                <span
                  className="
                    mb-3.5
                    inline-block
                    rounded-full
                    bg-gold
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-purple-900
                  "
                >
                  {offer.pill}
                </span>

                <h3
                  className="
                    font-bold
                    text-slate-800
                  "
                >
                  {offer.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-500
                  "
                >
                  {offer.business}
                  {" • "}
                  {offer.location}
                </p>

                <p
                  className="
                    mt-3
                    text-xs
                    text-slate-400
                  "
                >
                  {offer.valid}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
                        HOW IT WORKS
      ====================================================== */}

      <section
        className="
          px-5
          py-14
          text-center
          sm:px-6
          sm:py-16
        "
        aria-labelledby="how-it-works"
      >
        <div className="mx-auto max-w-5xl">
          <h2
            id="how-it-works"
            className="
              mb-10
              text-xl
              font-bold
              text-slate-800
              sm:mb-12
              sm:text-2xl
            "
          >
            How KonnectG Works
          </h2>

          <div
            className="
              grid
              gap-10
              sm:grid-cols-3
            "
          >
            {STEPS.map((step) => (
              <article key={step.id}>
                <div
                  className="
                    mx-auto
                    mb-4
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    text-2xl
                  "
                  style={{
                    background: step.bg,
                  }}
                  aria-hidden="true"
                >
                  {step.icon}
                </div>

                <p
                  className="
                    mb-1.5
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-purple-600
                  "
                >
                  {step.label}
                </p>

                <h3
                  className="
                    mb-2
                    text-lg
                    font-bold
                    text-slate-800
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mx-auto
                    max-w-[260px]
                    text-sm
                    leading-6
                    text-slate-500
                  "
                >
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
