const PROMOS = [
  {
    tag: 'Limited Offer',
    title: '20% Off at Raj Electronics',
    meta: 'Valid till Dec 31 • Matigara-1',
    gradient: 'linear-gradient(135deg,#FF7E5F,#ED4584)',
  },
  {
    tag: 'New Listing',
    title: 'Ananya Beauty Parlour',
    meta: 'Now verified • Champasari',
    gradient: 'linear-gradient(135deg,#6B2FA0,#A23FCE)',
  },
  {
    tag: 'Featured',
    title: 'Free Delivery at Gupta Store',
    meta: 'Orders above ₹500 • Patharghata',
    gradient: 'linear-gradient(135deg,#16A974,#16D9A6)',
  },
]

export default function Marquee() {
  return (
    <div className="px-6">
      <div className="mx-auto -mt-12 grid max-w-6xl gap-5 sm:grid-cols-3 md:-mt-16">
        {PROMOS.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl p-5 text-white shadow-xl shadow-purple-950/30"
            style={{ background: p.gradient }}
          >
            <span className="mb-2 block text-xs font-bold uppercase tracking-wide opacity-90">
              {p.tag}
            </span>
            <h3 className="font-display text-base font-bold">{p.title}</h3>
            <p className="mt-1 text-sm opacity-90">{p.meta}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
