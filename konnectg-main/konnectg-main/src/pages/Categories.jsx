import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CATEGORIES = [
  { icon: '🍽️', iconBg: '#FBE5EF', name: 'Restaurants & Food', count: 48, bar: '#7C3AED', barTrack: '#EDE3FB' },
  { icon: '🏥', iconBg: '#FCE4E4', name: 'Healthcare', count: 32, bar: '#EF4444', barTrack: '#FEE2E2' },
  { icon: '📚', iconBg: '#D6F5E3', name: 'Education', count: 25, bar: '#16A974', barTrack: '#DCFCE7' },
  { icon: '🛒', iconBg: '#E1EFFE', name: 'Grocery & Retail', count: 56, bar: '#3B82F6', barTrack: '#DBEAFE' },
  { icon: '💇‍♀️', iconBg: '#FBE5EF', name: 'Beauty & Wellness', count: 19, bar: '#EC4899', barTrack: '#FCE7F3' },
  { icon: '🔧', iconBg: '#FEF0DA', name: 'Home Services', count: 41, bar: '#F97316', barTrack: '#FFEDD5' },
  { icon: '🏋️', iconBg: '#E8E4FB', name: 'Fitness & Gym', count: 12, bar: '#8B5CF6', barTrack: '#EDE9FE' },
  { icon: '🚗', iconBg: '#CFFAFE', name: 'Automobile', count: 15, bar: '#06B6D4', barTrack: '#CFFAFE' },
]

const MAX = Math.max(...CATEGORIES.map((c) => c.count))

export default function Categories() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-10">
          <h1 className="font-display text-4xl font-extrabold text-ink">All Categories</h1>
          <p className="mt-2 text-ink-soft">Browse all business categories in your area</p>
        </div>

        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="flex cursor-pointer flex-col rounded-2xl border border-[#F0EEF6] bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
                style={{ background: cat.iconBg }}
              >
                {cat.icon}
              </div>

              <h2 className="font-display text-base font-bold text-ink">{cat.name}</h2>
              <p className="mb-5 mt-1 text-sm text-ink-soft">{cat.count} businesses</p>

              <div
                className="mt-auto h-1.5 w-full overflow-hidden rounded-full"
                style={{ background: cat.barTrack }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.round((cat.count / MAX) * 100)}%`,
                    background: cat.bar,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}