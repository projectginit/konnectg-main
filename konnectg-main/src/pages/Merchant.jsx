import { useState } from 'react'
import Navbar from '../components/Navbar'

const STATS = [
  { icon: '👁️', label: 'Profile Views', value: '1,247', change: '+12%', changeColor: 'text-emerald-500' },
  { icon: '📞', label: 'Calls This Month', value: '89', change: '+8%', changeColor: 'text-emerald-500' },
  { icon: '💬', label: 'WhatsApp Clicks', value: '156', change: '+23%', changeColor: 'text-emerald-500' },
  { icon: '🏷️', label: 'Offer Redeems', value: '34', change: '+5%', changeColor: 'text-emerald-500' },
]

const ACTIVE_OFFERS = [
  { title: '20% Off Lunch Thali', ends: 'Ends Dec 31', views: '156 views', redeemed: '24 redeemed' },
  { title: 'Free Dessert ₹500+', ends: 'Ends Jan 15', views: '89 views', redeemed: '10 redeemed' },
]

const NAV_ITEMS = [
  { id: 'dashboard', icon: '⊞', label: 'Dashboard' },
  { id: 'listings', icon: '☰', label: 'My Listings' },
  { id: 'offers', icon: '🏷️', label: 'Offers' },
  { id: 'insights', icon: '📊', label: 'Insights' },
  { id: 'account', icon: '⚙️', label: 'Account' },
]

function Dashboard() {
  return (
    <div>
      <h1 className="mb-7 font-display text-2xl font-extrabold text-ink">
        Merchant Dashboard
      </h1>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-2xl border border-[#EFEDF5] bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xl">{s.icon}</span>
              <span className={`text-xs font-semibold ${s.changeColor}`}>{s.change}</span>
            </div>
            <p className="font-display text-2xl font-extrabold text-ink">{s.value}</p>
            <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Active Offers Performance */}
      <div className="mt-6 rounded-2xl border border-[#EFEDF5] bg-white p-6 shadow-sm">
        <h2 className="mb-5 font-display text-base font-bold text-ink">
          Active Offers Performance
        </h2>
        <div className="flex flex-col">
          {ACTIVE_OFFERS.map((o, i) => (
            <div
              key={o.title}
              className={`flex items-center justify-between py-4 ${
                i < ACTIVE_OFFERS.length - 1 ? 'border-b border-[#F0EEF6]' : ''
              }`}
            >
              <div>
                <p className="font-semibold text-ink">{o.title}</p>
                <p className="text-sm text-ink-soft">{o.ends}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-purple-700">{o.views}</p>
                <p className="text-sm font-semibold text-emerald-500">{o.redeemed}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function MyListings() {
  return (
    <div>
      <h1 className="mb-7 font-display text-2xl font-extrabold text-ink">My Listings</h1>
      <div className="rounded-2xl border border-[#EFEDF5] bg-white p-8 text-center shadow-sm">
        <p className="text-4xl">🏪</p>
        <p className="mt-3 font-semibold text-ink">Your business listings appear here.</p>
        <p className="mt-1 text-sm text-ink-soft">Add or manage your listings to reach more customers.</p>
        <button className="mt-5 rounded-full bg-purple-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-purple-600">
          + Add New Listing
        </button>
      </div>
    </div>
  )
}

function Offers() {
  return (
    <div>
      <h1 className="mb-7 font-display text-2xl font-extrabold text-ink">Offers</h1>
      <div className="flex flex-col gap-4">
        {ACTIVE_OFFERS.map((o) => (
          <div key={o.title} className="flex items-center justify-between rounded-2xl border border-[#EFEDF5] bg-white p-5 shadow-sm">
            <div>
              <span className="mb-2 inline-block rounded-full bg-gold px-3 py-0.5 text-xs font-bold text-purple-900">
                Active
              </span>
              <p className="font-semibold text-ink">{o.title}</p>
              <p className="text-sm text-ink-soft">{o.ends}</p>
            </div>
            <button className="rounded-full border border-[#EFEDF5] px-4 py-2 text-sm font-semibold text-ink-soft hover:border-purple-300 hover:text-purple-700">
              Edit
            </button>
          </div>
        ))}
        <button className="mt-2 rounded-full bg-purple-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-purple-600 self-start">
          + Create New Offer
        </button>
      </div>
    </div>
  )
}

function Insights() {
  return (
    <div>
      <h1 className="mb-7 font-display text-2xl font-extrabold text-ink">Insights</h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-2xl border border-[#EFEDF5] bg-white p-5 shadow-sm">
            <span className="text-xl">{s.icon}</span>
            <p className="mt-3 font-display text-2xl font-extrabold text-ink">{s.value}</p>
            <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
            <p className="mt-1 text-xs font-semibold text-emerald-500">{s.change} this month</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-[#EFEDF5] bg-white p-8 text-center shadow-sm">
        <p className="text-4xl">📈</p>
        <p className="mt-3 font-semibold text-ink">Detailed charts coming soon.</p>
        <p className="mt-1 text-sm text-ink-soft">View weekly and monthly performance trends here.</p>
      </div>
    </div>
  )
}

function Account() {
  return (
    <div>
      <h1 className="mb-7 font-display text-2xl font-extrabold text-ink">Account</h1>
      <div className="rounded-2xl border border-[#EFEDF5] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4 border-b border-[#F0EEF6] pb-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 font-display text-xl font-bold text-white">
            S
          </div>
          <div>
            <p className="font-display font-bold text-ink">Saffron Kitchen</p>
            <p className="text-sm text-ink-soft">saffronkitchen@gmail.com</p>
            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-600">
              ✓ Verified
            </span>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          {['Edit Business Info', 'Change Password', 'Notification Settings', 'Logout'].map((item) => (
            <button
              key={item}
              className={`flex w-full items-center justify-between rounded-xl border border-[#F0EEF6] px-4 py-3 text-sm font-medium transition hover:border-purple-200 hover:bg-purple-50 ${
                item === 'Logout' ? 'text-red-500 hover:border-red-100 hover:bg-red-50' : 'text-ink'
              }`}
            >
              {item}
              <span className="text-ink-soft">›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

const PANELS = {
  dashboard: <Dashboard />,
  listings: <MyListings />,
  offers: <Offers />,
  insights: <Insights />,
  account: <Account />,
}

export default function Merchant() {
  const [active, setActive] = useState('dashboard')

  return (
    <div className="min-h-screen bg-[#F7F6FA]">
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <aside className="sticky top-[65px] h-[calc(100vh-65px)] w-52 shrink-0 border-r border-[#EFEDF5] bg-white px-3 py-6">
          {/* Merchant identity */}
          <div className="mb-6 flex items-center gap-3 px-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-700 font-bold text-white">
              S
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Saffron Kitchen</p>
              <p className="text-xs font-medium text-emerald-500">Verified ✓</p>
            </div>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  active === item.id
                    ? 'bg-purple-50 text-purple-700 font-semibold'
                    : 'text-ink-soft hover:bg-[#F7F6FA] hover:text-ink'
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">
          {PANELS[active]}
        </main>
      </div>
    </div>
  )
}