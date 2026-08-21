import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

/* ==========================================================
                        CATEGORIES
========================================================== */

const CATEGORIES = [
  {
    id: "restaurants-food",
    icon: "🍽️",
    iconBg: "#FBE5EF",
    name: "Restaurants & Food",
    count: 48,
    bar: "#7C3AED",
    barTrack: "#EDE3FB",
  },
  {
    id: "healthcare",
    icon: "🏥",
    iconBg: "#FCE4E4",
    name: "Healthcare",
    count: 32,
    bar: "#EF4444",
    barTrack: "#FEE2E2",
  },
  {
    id: "education",
    icon: "📚",
    iconBg: "#D6F5E3",
    name: "Education",
    count: 25,
    bar: "#16A974",
    barTrack: "#DCFCE7",
  },
  {
    id: "grocery-retail",
    icon: "🛒",
    iconBg: "#E1EFFE",
    name: "Grocery & Retail",
    count: 56,
    bar: "#3B82F6",
    barTrack: "#DBEAFE",
  },
  {
    id: "beauty-wellness",
    icon: "💇‍♀️",
    iconBg: "#FBE5EF",
    name: "Beauty & Wellness",
    count: 19,
    bar: "#EC4899",
    barTrack: "#FCE7F3",
  },
  {
    id: "home-services",
    icon: "🔧",
    iconBg: "#FEF0DA",
    name: "Home Services",
    count: 41,
    bar: "#F97316",
    barTrack: "#FFEDD5",
  },
  {
    id: "fitness-gym",
    icon: "🏋️",
    iconBg: "#E8E4FB",
    name: "Fitness & Gym",
    count: 12,
    bar: "#8B5CF6",
    barTrack: "#EDE9FE",
  },
  {
    id: "automobile",
    icon: "🚗",
    iconBg: "#CFFAFE",
    name: "Automobile",
    count: 15,
    bar: "#06B6D4",
    barTrack: "#CFFAFE",
  },
];

/* ==========================================================
                    MAX CATEGORY COUNT
========================================================== */

const MAX_COUNT = Math.max(...CATEGORIES.map((category) => category.count));

export default function Categories() {
  return (
    <div className="min-h-screen bg-white">
      {/* ==================================================
                            NAVBAR
      ================================================== */}

      <Navbar />

      {/* ==================================================
                        PAGE CONTENT
      ================================================== */}

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

        <div className="mb-8 sm:mb-10">
          <h1
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-slate-800
              sm:text-4xl
            "
          >
            All Categories
          </h1>

          <p
            className="
              mt-2
              text-sm
              leading-6
              text-slate-500
              sm:text-base
            "
          >
            Browse all business categories in your area.
          </p>
        </div>

        {/* ==================================================
                        CATEGORY GRID
        ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-4
          "
        >
          {CATEGORIES.map((category) => {
            const percentage = Math.round((category.count / MAX_COUNT) * 100);

            return (
              <Link
                key={category.id}
                to={`/listings?category=${encodeURIComponent(category.name)}`}
                className="
                  group
                  flex
                  min-h-[210px]
                  flex-col
                  rounded-2xl
                  border
                  border-[#F0EEF6]
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-purple-100
                  hover:shadow-xl
                  focus-visible:outline-2
                  focus-visible:outline-purple-700
                  sm:p-6
                "
              >
                {/* ==================================================
                                ICON
                ================================================== */}

                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    text-2xl
                    transition-transform
                    duration-200
                    group-hover:scale-105
                  "
                  style={{
                    background: category.iconBg,
                  }}
                  aria-hidden="true"
                >
                  {category.icon}
                </div>

                {/* ==================================================
                                TEXT
                ================================================== */}

                <h2
                  className="
                    text-base
                    font-bold
                    leading-snug
                    text-slate-800
                  "
                >
                  {category.name}
                </h2>

                <p
                  className="
                    mb-5
                    mt-1
                    text-sm
                    text-slate-500
                  "
                >
                  {category.count} businesses
                </p>

                {/* ==================================================
                            CATEGORY VOLUME BAR
                ================================================== */}

                <div
                  className="
                    mt-auto
                    h-1.5
                    w-full
                    overflow-hidden
                    rounded-full
                  "
                  style={{
                    background: category.barTrack,
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="
                      h-full
                      rounded-full
                      transition-all
                      duration-500
                    "
                    style={{
                      width: `${percentage}%`,
                      background: category.bar,
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* ==================================================
                            FOOTER
      ================================================== */}

      <Footer />
    </div>
  );
}
