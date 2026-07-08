import { Link } from 'react-router-dom'

const CATEGORIES = [
  { icon: '🍽️', bg: '#F1E6FB', name: 'Restaurants', count: 48 },
  { icon: '🏥', bg: '#E3F1FB', name: 'Healthcare', count: 32 },
  { icon: '📚', bg: '#E2F7EA', name: 'Education', count: 25 },
  { icon: '🛒', bg: '#E1F0FB', name: 'Grocery', count: 56 },
  { icon: '💇‍♀️', bg: '#FBE5EF', name: 'Beauty', count: 19 },
  { icon: '🔧', bg: '#FCEBDB', name: 'Services', count: 41 },
]

const MERCHANTS = [
  { cover: '#EDE3FB', name: 'Sharma Electronics', cat: 'Electronics & Appliances • Matigara-1', stars: '★★★★★', reviews: 127 },
  { cover: '#FCE9C2', name: 'Gupta General Store', cat: 'Grocery & Daily Needs • Patharghata', stars: '★★★★☆', reviews: 89 },
  { cover: '#CFF6E3', name: 'Ananya Beauty Studio', cat: 'Beauty & Wellness • Champasari', stars: '★★★★★', reviews: 64 },
]

const OFFERS = [
  { pill: '30% OFF', title: 'AC Service & Repair', biz: 'Roy Cooling Solutions • Attharokhai', valid: 'Valid till Jan 15, 2025' },
  { pill: 'BUY 1 GET 1', title: 'Hair Spa Treatment', biz: 'Ananya Beauty Studio • Champasari', valid: 'Valid till Dec 25, 2024' },
  { pill: '₹100 OFF', title: 'Grocery Above ₹1000', biz: 'Gupta General Store • Patharghata', valid: 'Valid till Jan 31, 2025' },
]

const STEPS = [
  { icon: '🔍', bg: '#EDE3FB', label: 'Step 1', title: 'Discover', text: 'Search and explore local businesses in your neighbourhood.' },
  { icon: '✅', bg: '#D6F5E3', label: 'Step 2', title: 'Verify', text: 'Every listed business is verified by our community team.' },
  { icon: '🧡', bg: '#FCEFC4', label: 'Step 3', title: 'Connect', text: 'Connect directly via call, WhatsApp, or visit in person.' },
]

export default function Cards() {
  return (
    <>
      {/* Popular Categories */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-7 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-bold text-ink">Popular Categories</h2>
            <Link to="/categories" className="text-sm font-semibold text-purple-600">View All →</Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {CATEGORIES.map((c) => (
              <Link
                to="/categories"
                key={c.name}
                className="cursor-pointer rounded-2xl border border-transparent bg-[#F7F6FA] p-5 text-left transition hover:-translate-y-0.5 hover:border-purple-100 hover:bg-white hover:shadow-lg"
              >
                <div
                  className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                  style={{ background: c.bg }}
                >
                  {c.icon}
                </div>
                <h3 className="text-sm font-semibold text-ink">{c.name}</h3>
                <p className="text-xs text-ink-soft">{c.count} listings</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Verified Merchants */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-7 font-display text-2xl font-bold text-ink">Top Verified Merchants</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {MERCHANTS.map((m) => (
              <div key={m.name} className="overflow-hidden rounded-2xl border border-purple-50 bg-white shadow-sm">
                <div className="flex h-32 items-start justify-end p-3.5" style={{ background: m.cover }}>
                  <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-emerald-600">
                    ✓ Verified
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-ink">{m.name}</h3>
                  <p className="mb-2.5 text-sm text-ink-soft">{m.cat}</p>
                  <p className="mb-4 text-sm text-gold-dark">
                    {m.stars} <span className="text-ink-soft">({m.reviews} reviews)</span>
                  </p>
                  <button className="w-full rounded-full bg-purple-50 py-2.5 text-sm font-semibold text-purple-700 transition hover:bg-purple-100">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Offers & Deals */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-7 font-display text-2xl font-bold text-ink">🔥 Local Offers &amp; Deals</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {OFFERS.map((o) => (
              <div key={o.title} className="rounded-2xl border border-purple-50 bg-white p-5">
                <span className="mb-3.5 inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold text-purple-900">
                  {o.pill}
                </span>
                <h3 className="font-display font-bold text-ink">{o.title}</h3>
                <p className="mb-3.5 text-sm text-ink-soft">{o.biz}</p>
                <p className="text-xs text-[#A6A0B8]">{o.valid}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-6 py-16 text-center">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 font-display text-2xl font-bold text-ink">How KonnectG Works</h2>
          <div className="grid gap-10 sm:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.title}>
                <div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl"
                  style={{ background: s.bg }}
                >
                  {s.icon}
                </div>
                <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-purple-600">{s.label}</p>
                <h3 className="mb-2 font-display text-lg font-bold text-ink">{s.title}</h3>
                <p className="mx-auto max-w-[260px] text-sm text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}