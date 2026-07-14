import { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const FILTERS = ['All', 'Verified Only', 'Top Rated', 'With Offers']

const ALL_LISTINGS = [
  { id: 1, name: 'Saffron Kitchen', type: 'North Indian', category: 'Restaurants & Food', area: 'Matigara-1', stars: 5, reviews: 94, distance: '0.8 km', verified: true, offer: '20% OFF', cover: 'linear-gradient(135deg,#FFD5B8,#FFB5A0)' },
  { id: 2, name: 'Green Leaf Cafe', type: 'Cafe & Bakery', category: 'Restaurants & Food', area: 'Champasari', stars: 5, reviews: 67, distance: '1.2 km', verified: true, offer: null, cover: 'linear-gradient(135deg,#B8F5D8,#A0EEC8)' },
  { id: 3, name: 'Biryani House', type: 'Mughlai', category: 'Restaurants & Food', area: 'Attharokhai', stars: 4, reviews: 45, distance: '2.1 km', verified: true, offer: null, cover: 'linear-gradient(135deg,#FFF3B0,#FFE870)' },
  { id: 4, name: 'Spice Garden', type: 'Multi-cuisine', category: 'Restaurants & Food', area: 'Champasari', stars: 4, reviews: 38, distance: '1.8 km', verified: true, offer: 'BUY 1 GET 1', cover: 'linear-gradient(135deg,#C8E6FF,#A8D4FF)' },
  { id: 5, name: 'The Dhaba', type: 'Punjabi', category: 'Restaurants & Food', area: 'Patharghata', stars: 5, reviews: 112, distance: '3.2 km', verified: false, offer: null, cover: 'linear-gradient(135deg,#FFD9F0,#FFC0E8)' },
  { id: 6, name: 'Rolls & Wraps', type: 'Fast Food', category: 'Restaurants & Food', area: 'Matigara-1', stars: 3, reviews: 29, distance: '0.5 km', verified: true, offer: '₹50 OFF', cover: 'linear-gradient(135deg,#D8F5C0,#C0EDA0)' },
  { id: 7, name: 'City Hospital', type: 'Multi-speciality', category: 'Healthcare', area: 'Matigara-1', stars: 5, reviews: 210, distance: '1.0 km', verified: true, offer: null, cover: 'linear-gradient(135deg,#FFE0E0,#FFC8C8)' },
  { id: 8, name: 'Dr. Roy Clinic', type: 'General Physician', category: 'Healthcare', area: 'Champasari', stars: 4, reviews: 88, distance: '2.3 km', verified: true, offer: '10% OFF', cover: 'linear-gradient(135deg,#E0F0FF,#C8E0FF)' },
  { id: 9, name: 'Sunrise Pharmacy', type: 'Pharmacy', category: 'Healthcare', area: 'Patharghata', stars: 4, reviews: 54, distance: '1.5 km', verified: true, offer: null, cover: 'linear-gradient(135deg,#E0FFE8,#C8FFD8)' },
  { id: 10, name: 'Gupta General Store', type: 'Daily Needs', category: 'Grocery & Retail', area: 'Patharghata', stars: 4, reviews: 89, distance: '0.9 km', verified: true, offer: '₹100 OFF', cover: 'linear-gradient(135deg,#FFF3B0,#FFE870)' },
  { id: 11, name: 'Fresh Mart', type: 'Supermarket', category: 'Grocery & Retail', area: 'Matigara-1', stars: 5, reviews: 143, distance: '1.1 km', verified: true, offer: null, cover: 'linear-gradient(135deg,#D8F5C0,#C0EDA0)' },
  { id: 12, name: 'Ananya Beauty Studio', type: 'Salon', category: 'Beauty & Wellness', area: 'Champasari', stars: 5, reviews: 64, distance: '1.4 km', verified: true, offer: 'BUY 1 GET 1', cover: 'linear-gradient(135deg,#FFD9F0,#FFC0E8)' },
  { id: 13, name: 'Roy Cooling Solutions', type: 'AC Service', category: 'Home Services', area: 'Attharokhai', stars: 4, reviews: 37, distance: '2.8 km', verified: true, offer: '30% OFF', cover: 'linear-gradient(135deg,#C8E6FF,#A8D4FF)' },
  { id: 14, name: 'FitZone Gym', type: 'Fitness Center', category: 'Fitness & Gym', area: 'Matigara-1', stars: 5, reviews: 76, distance: '0.6 km', verified: true, offer: null, cover: 'linear-gradient(135deg,#E8E0FF,#D0C0FF)' },
  { id: 15, name: 'AutoCare Garage', type: 'Car Repair', category: 'Automobile', area: 'Patharghata', stars: 4, reviews: 51, distance: '3.0 km', verified: true, offer: null, cover: 'linear-gradient(135deg,#C8F5F0,#A0EDE8)' },
]

function StarRating({ count }) {
  return (
    <span className="text-sm text-gold-dark">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

export default function Listings() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const categoryParam = searchParams.get('category')

  const [activeFilter, setActiveFilter] = useState('All')

  const byCategory = categoryParam
    ? ALL_LISTINGS.filter((l) => l.category === categoryParam)
    : ALL_LISTINGS

  const filtered = byCategory.filter((l) => {
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
        <div className="mb-7 flex flex-wrap items-center gap-3">
          {categoryParam && (
            <button
              onClick={() => navigate('/categories')}
              className="text-sm font-semibold text-purple-600 hover:underline"
            >
              ← All Categories
            </button>
          )}
          <h1 className="font-display text-3xl font-extrabold text-ink">
            {categoryParam || 'All Listings'}
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

        {/* Cards */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-4xl">🔍</p>
            <p className="mt-3 font-semibold text-ink">No results found.</p>
            <p className="mt-1 text-sm text-ink-soft">Try a different filter or category.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((biz) => (
              <div key={biz.id} className="overflow-hidden rounded-2xl border border-[#EFEDF5] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="relative h-36" style={{ background: biz.cover }}>
                  {biz.offer && (
                    <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-purple-900">
                      {biz.offer}
                    </span>
                  )}
                  {biz.verified && (
                    <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white text-emerald-500 shadow">✓</span>
                  )}
                </div>
                <div className="p-5">
                  <h2 className="font-display text-lg font-bold text-ink">{biz.name}</h2>
                  <p className="mt-0.5 text-sm text-ink-soft">{biz.type} • {biz.area}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <StarRating count={biz.stars} />
                      <span className="text-sm text-ink-soft">({biz.reviews})</span>
                    </div>
                    <span className="text-sm text-ink-soft">📍 {biz.distance}</span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600">
                      📞 Call
                    </button>
                    <button
                      onClick={() => navigate(`/profile/${biz.id}`)}
                      className="flex-1 rounded-full bg-purple-50 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}