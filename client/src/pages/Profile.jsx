import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const OFFERS = [
  { pill: '20% OFF', title: 'On all lunch thalis', valid: 'Valid till Dec 31' },
  { pill: 'FREE', title: 'Dessert on orders ₹500+', valid: 'Valid till Jan 15' },
]

const GALLERY = [
  'linear-gradient(135deg, #FFD5B8, #FFB5A0)',
  'linear-gradient(135deg, #FFF3B0, #FFE870)',
  'linear-gradient(135deg, #FFD9F0, #FFC0E8)',
]

const HOURS = [
  { day: 'Mon - Sat', time: '10:00 AM - 10:00 PM' },
  { day: 'Sunday', time: '11:00 AM - 9:00 PM' },
]

const REVIEWS = [
  {
    initials: 'RS',
    avatarBg: '#EDE3FB',
    avatarColor: '#7C3AED',
    name: 'Rahul S.',
    time: '2 days ago',
    stars: 5,
    text: 'Amazing food and great ambience. The butter chicken is a must-try!',
  },
  {
    initials: 'PD',
    avatarBg: '#D6F5E3',
    avatarColor: '#16A974',
    name: 'Priya D.',
    time: '1 week ago',
    stars: 4,
    text: 'Good food quality. Delivery was quick. Will order again.',
  },
]

function StarRating({ count }) {
  return (
    <span className="text-gold-dark">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </span>
  )
}

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#F7F6FA]">
      <Navbar />

      <div className="relative">
        {/* Purple cover banner */}
        <div className="h-48 w-full bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500" />

        <div className="mx-auto max-w-4xl px-6">

          {/* Logo + Info + Buttons */}
          <div className="relative -mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-end gap-4">
              {/* Icon */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border-4 border-white bg-white shadow-lg text-4xl">
                🍽️
              </div>
              {/* Name + meta */}
              <div className="pb-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="font-display text-2xl font-extrabold text-ink">
                    Saffron Kitchen
                  </h1>
                  <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-bold text-emerald-600">
                    ✓ Verified
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-ink-soft">
                  North Indian Restaurant • Matigara-1
                </p>
                <div className="mt-1.5 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gold-dark">★★★★★</span>
                  <span className="text-sm text-ink-soft">4.8 (94 reviews)</span>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-600">
                    Open Now
                  </span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-3 pb-1">
              <button className="flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600">
                📞 Call
              </button>
              <button className="flex items-center gap-2 rounded-full bg-purple-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-700">
                💬 WhatsApp
              </button>
            </div>
          </div>

          {/* Active Offers */}
          <div className="mt-6 rounded-2xl bg-[#FFFBEA] p-5">
            <h2 className="mb-4 font-display text-base font-bold text-ink">
              🔥 Active Offers
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {OFFERS.map((o) => (
                <div key={o.title} className="rounded-xl bg-white p-4 shadow-sm">
                  <span className="mb-2 inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold text-purple-900">
                    {o.pill}
                  </span>
                  <p className="font-semibold text-ink">{o.title}</p>
                  <p className="text-sm text-ink-soft">{o.valid}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-6">
            <h2 className="mb-4 font-display text-lg font-bold text-ink">Gallery</h2>
            <div className="grid grid-cols-3 gap-4">
              {GALLERY.map((bg, i) => (
                <div
                  key={i}
                  className="h-44 rounded-2xl"
                  style={{ background: bg }}
                />
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-6 rounded-2xl border border-[#EFEDF5] bg-white p-5">
            <h2 className="mb-4 font-display text-base font-bold text-ink">
              Business Hours
            </h2>
            {HOURS.map((h) => (
              <div
                key={h.day}
                className="flex justify-between border-b border-[#F5F3FA] py-2.5 text-sm last:border-0"
              >
                <span className="text-ink">{h.day}</span>
                <span className="font-medium text-purple-700">{h.time}</span>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-6 flex h-32 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F5F0] to-[#D6EEF8]">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-700 text-white">
              📍
            </div>
            <p className="text-sm text-ink-soft">Matigara-1, Near SBI Branch</p>
          </div>

          {/* Reviews */}
          <div className="mb-12 mt-6">
            <h2 className="mb-4 font-display text-lg font-bold text-ink">Reviews</h2>
            <div className="flex flex-col">
              {REVIEWS.map((r) => (
                <div
                  key={r.name}
                  className="border-b border-[#F0EEF6] py-5 last:border-0"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                        style={{ background: r.avatarBg, color: r.avatarColor }}
                      >
                        {r.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink">{r.name}</p>
                        <p className="text-xs text-ink-soft">{r.time}</p>
                      </div>
                    </div>
                    <StarRating count={r.stars} />
                  </div>
                  <p className="mt-3 pl-12 text-sm leading-relaxed text-ink">
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}