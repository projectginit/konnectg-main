import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) console.log('Searching for:', query)
  }

  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600 px-6 pb-16 pt-16 text-center text-white">
      <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
        <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
        Serving Siliguri &amp; Surrounding Areas
      </span>

      <h1 className="mx-auto mt-7 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
        Discover Trusted Local Businesses Near You
      </h1>

      <p className="mx-auto mt-5 max-w-xl text-lg text-purple-100">
        Verified local businesses from your own community.
      </p>

      <form
        onSubmit={handleSearch}
        className="mx-auto mt-9 flex max-w-2xl items-center gap-2 rounded-full bg-white p-2 pl-5 shadow-2xl shadow-purple-950/40"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A6A0B8" strokeWidth="2" className="shrink-0">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search businesses, services, categories..."
          className="flex-1 border-none bg-transparent text-sm text-ink outline-none placeholder:text-[#A6A0B8]"
        />
        <button
          type="submit"
          className="rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
        >
          Search
        </button>
      </form>

      <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
        <Link
          to="/categories"
          className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-purple-900 transition hover:-translate-y-0.5"
        >
          Explore Categories
        </Link>
        <Link
          to="/map"
          className="rounded-full bg-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
        >
          View Nearby Map
        </Link>
      </div>
    </section>
  )
}