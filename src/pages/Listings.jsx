import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FILTERS = ['All', 'Verified Only', 'Top Rated', 'With Offers']

const LISTINGS = [
  {
    id: 1,
    name: 'Saffron Kitchen',
    type: 'North Indian',
    area: 'Matigara-1',
    stars: 5,
    reviews: 94,
    distance: '0.8 km',
    verified: true,
    offer: '20% OFF',
    cover: 'linear-gradient(135deg, #FFD5B8, #FFB5A0)',
  },
  {
    id: 2,
    name: 'Green Leaf Cafe',
    type: 'Cafe & Bakery',
    area: 'Champasari',
    stars: 5,
    reviews: 67,
    distance: '1.2 km',
    verified: true,
    offer: null,
    cover: 'linear-gradient(135deg, #B8F5D8, #A0EEC8)',
  },
  {
    id: 3,
    name: 'Biryani House',
    type: 'Mughlai',
    area: 'Attharokhai',
    stars: 4,
    reviews: 45,
    distance: '2.1 km',
    verified: true,
    offer: null,
    cover: 'linear-gradient(135deg, #FFF3B0, #FFE870)',
  },
  {
    id: 4,
    name: 'Spice Garden',
    type: 'Multi-cuisine',
    area: 'Champasari',
    stars: 4,
    reviews: 38,
    distance: '1.8 km',
    verified: true,
    offer: 'BUY 1 GET 1',
    cover: 'linear-gradient(135deg, #C8E6FF, #A8D4FF)',
  },
  {
    id: 5,
    name: 'The Dhaba',
    type: 'Punjabi',
    area: 'Patharghata',
    stars: 5,
    reviews: 112,
    distance: '3.2 km',
    verified: false,
    offer: null,
    cover: 'linear-gradient(135deg, #FFD9F0, #FFC0E8)',
  },
  {
    id: 6,
    name: 'Rolls & Wraps',
    type: 'Fast Food',
    area: 'Matigara-1',
    stars: 3,
    reviews: 29,
    distance: '0.5 km',
    verified: true,
    offer: '₹50 OFF',
    cover: 'linear-gradient(135deg, #D8F5C0, #C0EDA0)',
  },
]

function StarRating({ count }) {
  return (
    <span className="text-sm text-gold-dark">
      {'★'.repeat(count)}
      {'☆'.repeat(5 - count)}
    </span>
  )
}

export default function Listings() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = LISTINGS.filter((l) => {
    if (activeFilter === 'Verified Only') return l.verified
    if (activeFilter === 'Top Rated') return l.stars >= 5
    if (activeFilter === 'With Offers') return l.offer !== null
    return true
  })

  return (
    <div className="min-h-screen bg-[#F7F6FA]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Heading */}
        <div className="mb-7 flex items-center gap-4">
          <h1 className="font-display text-3xl font-extrabold text-ink">
            Restaurants &amp; Food
          </h1>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
            {filtered.length} results
          </span>
        </div>

        {/* Filter pills */}
        <div className="mb-8 flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                activeFilter === f
                  ? 'border-purple-700 bg-purple-700 text-white'
                  : 'border-[#E5E0EE] bg-white text-ink hover:border-purple-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((biz) => (
            <div
              key={biz.id}
              className="overflow-hidden rounded-2xl border border-[#EFEDF5] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Cover */}
              <div
                className="relative h-36"
                style={{ background: biz.cover }}
              >
                {biz.offer && (
                  <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-purple-900">
                    {biz.offer}
                  </span>
                )}
                {biz.verified && (
                  <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-emerald-500 shadow">
                    ✓
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5">
                <h2 className="font-display text-lg font-bold text-ink">{biz.name}</h2>
                <p className="mt-0.5 text-sm text-ink-soft">
                  {biz.type} • {biz.area}
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <StarRating count={biz.stars} />
                    <span className="text-sm text-ink-soft">({biz.reviews})</span>
                  </div>
                  <span className="flex items-center gap-1 text-sm text-ink-soft">
                    📍 {biz.distance}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-4 flex items-center gap-3">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600">
                    📞 Call
                  </button>
                  <button className="flex-1 rounded-full bg-purple-50 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-100">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}