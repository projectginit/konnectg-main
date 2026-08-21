import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function Hero() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");


  /* ==========================================================
                        SEARCH
  ========================================================== */

  const handleSearch = (event) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      return;
    }

    navigate(
      `/listings?search=${encodeURIComponent(
        trimmedQuery
      )}`
    );
  };


  return (
    <section
      className="
        bg-gradient-to-br
        from-purple-900
        via-purple-700
        to-purple-600
        px-5
        pb-40
        pt-20
        text-center
        text-white
        sm:px-6
        sm:pt-24
      "
    >

      {/* ======================================================
                            STATUS
      ====================================================== */}

      <span
        className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-white/10
          px-4
          py-2
          text-sm
          font-medium
          backdrop-blur-sm
        "
      >

        <span
          className="
            h-2
            w-2
            rounded-full
            bg-emerald-400
          "
          aria-hidden="true"
        />

        Serving Siliguri &amp; Surrounding Areas

      </span>


      {/* ======================================================
                            HEADING
      ====================================================== */}

      <h1
        className="
          mx-auto
          mt-8
          max-w-4xl
          text-4xl
          font-extrabold
          leading-[1.1]
          sm:mt-10
          sm:text-5xl
          lg:text-6xl
        "
      >
        Discover Trusted Local Businesses Near You
      </h1>


      {/* ======================================================
                            DESCRIPTION
      ====================================================== */}

      <p
        className="
          mx-auto
          mt-7
          max-w-2xl
          text-base
          leading-7
          text-purple-100
          sm:mt-10
          sm:text-xl
        "
      >
        Verified local businesses from your own community.
      </p>


      {/* ======================================================
                            SEARCH
      ====================================================== */}

      <form
        onSubmit={handleSearch}
        role="search"
        className="
          mx-auto
          mt-9
          flex
          w-full
          max-w-2xl
          items-center
          gap-2
          rounded-2xl
          bg-white
          p-2
          pl-4
          shadow-2xl
          shadow-purple-950/40
          sm:mt-12
          sm:rounded-full
          sm:pl-6
        "
      >

        <Search
          size={20}
          className="
            shrink-0
            text-slate-400
          "
          aria-hidden="true"
        />


        <input
          type="search"
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          placeholder="Search businesses, services, categories..."
          aria-label="Search businesses, services, and categories"
          className="
            min-w-0
            flex-1
            border-none
            bg-transparent
            px-1
            py-3
            text-sm
            text-slate-800
            outline-none
            placeholder:text-slate-400
          "
        />


        <button
          type="submit"
          disabled={!query.trim()}
          className="
            shrink-0
            rounded-xl
            bg-purple-700
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-purple-600
            disabled:cursor-not-allowed
            disabled:opacity-50
            sm:rounded-full
            sm:px-8
            sm:py-4
            sm:text-base
          "
        >
          Search
        </button>

      </form>


      {/* ======================================================
                        PRIMARY ACTIONS
      ====================================================== */}

      <div
        className="
          mt-8
          flex
          flex-col
          items-center
          justify-center
          gap-3
          sm:mt-10
          sm:flex-row
          sm:gap-4
        "
      >

        <Link
          to="/categories"
          className="
            w-full
            rounded-full
            bg-gold
            px-8
            py-4
            text-sm
            font-semibold
            text-purple-900
            transition
            hover:-translate-y-0.5
            hover:shadow-lg
            sm:w-auto
          "
        >
          Explore Categories
        </Link>


        <Link
          to="/map"
          className="
            w-full
            rounded-full
            bg-white/15
            px-7
            py-4
            text-sm
            font-semibold
            text-white
            backdrop-blur-sm
            transition
            hover:-translate-y-0.5
            hover:bg-white/20
            sm:w-auto
          "
        >
          View Nearby Map
        </Link>

      </div>

    </section>
  );
}