import { useState } from 'react'
import Navbar from '../components/Navbar'

// ── Sidebar nav items ──────────────────────────────────────────────
const NAV_ITEMS = [
  { id: 'dashboard', icon: '⊞', label: 'Dashboard' },
  { id: 'listings', icon: '☰', label: 'My Listings' },
  { id: 'offers', icon: '🏷️', label: 'Offers' },
  { id: 'insights', icon: '📊', label: 'Insights' },
  { id: 'register', icon: '➕', label: 'List My Business' },
  { id: 'account', icon: '⚙️', label: 'Account' },
]

const STATS = [
  { icon: '👁️', label: 'Profile Views', value: '1,247', change: '+12%' },
  { icon: '📞', label: 'Calls This Month', value: '89', change: '+8%' },
  { icon: '💬', label: 'WhatsApp Clicks', value: '156', change: '+23%' },
  { icon: '🏷️', label: 'Offer Redeems', value: '34', change: '+5%' },
]

const ACTIVE_OFFERS = [
  { title: '20% Off Lunch Thali', ends: 'Ends Dec 31', views: '156 views', redeemed: '24 redeemed' },
  { title: 'Free Dessert ₹500+', ends: 'Ends Jan 15', views: '89 views', redeemed: '10 redeemed' },
]

const CATEGORIES = [
  'Restaurants & Food', 'Healthcare', 'Education', 'Grocery & Retail',
  'Beauty & Wellness', 'Home Services', 'Fitness & Gym', 'Automobile', 'Other',
]

// ── Dashboard panel ────────────────────────────────────────────────
function Dashboard() {
  return (
    <div>
      <h1 className="mb-7 font-display text-2xl font-extrabold text-ink">Merchant Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-2xl border border-[#EFEDF5] bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xl">{s.icon}</span>
              <span className="text-xs font-semibold text-emerald-500">{s.change}</span>
            </div>
            <p className="font-display text-2xl font-extrabold text-ink">{s.value}</p>
            <p className="mt-1 text-sm text-ink-soft">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-[#EFEDF5] bg-white p-6 shadow-sm">
        <h2 className="mb-5 font-display text-base font-bold text-ink">Active Offers Performance</h2>
        <div className="flex flex-col">
          {ACTIVE_OFFERS.map((o, i) => (
            <div key={o.title} className={`flex items-center justify-between py-4 ${i < ACTIVE_OFFERS.length - 1 ? 'border-b border-[#F0EEF6]' : ''}`}>
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

// ── My Listings panel ──────────────────────────────────────────────
function MyListings({ setActive }) {
  return (
    <div>
      <h1 className="mb-7 font-display text-2xl font-extrabold text-ink">My Listings</h1>
      <div className="rounded-2xl border border-[#EFEDF5] bg-white p-8 text-center shadow-sm">
        <p className="text-4xl">🏪</p>
        <p className="mt-3 font-semibold text-ink">No listings yet.</p>
        <p className="mt-1 text-sm text-ink-soft">Add your business to reach more customers.</p>
        <button
          onClick={() => setActive('register')}
          className="mt-5 rounded-full bg-purple-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-purple-600"
        >
          + List My Business
        </button>
      </div>
    </div>
  )
}

// ── Offers panel ───────────────────────────────────────────────────
function Offers() {
  return (
    <div>
      <h1 className="mb-7 font-display text-2xl font-extrabold text-ink">Offers</h1>
      <div className="flex flex-col gap-4">
        {ACTIVE_OFFERS.map((o) => (
          <div key={o.title} className="flex items-center justify-between rounded-2xl border border-[#EFEDF5] bg-white p-5 shadow-sm">
            <div>
              <span className="mb-2 inline-block rounded-full bg-gold px-3 py-0.5 text-xs font-bold text-purple-900">Active</span>
              <p className="font-semibold text-ink">{o.title}</p>
              <p className="text-sm text-ink-soft">{o.ends}</p>
            </div>
            <button className="rounded-full border border-[#EFEDF5] px-4 py-2 text-sm font-semibold text-ink-soft hover:border-purple-300 hover:text-purple-700">
              Edit
            </button>
          </div>
        ))}
        <button className="mt-2 self-start rounded-full bg-purple-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-purple-600">
          + Create New Offer
        </button>
      </div>
    </div>
  )
}

// ── Insights panel ─────────────────────────────────────────────────
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
      </div>
    </div>
  )
}

// ── Account panel ──────────────────────────────────────────────────
function Account() {
  return (
    <div>
      <h1 className="mb-7 font-display text-2xl font-extrabold text-ink">Account</h1>
      <div className="rounded-2xl border border-[#EFEDF5] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4 border-b border-[#F0EEF6] pb-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-700 font-display text-xl font-bold text-white">S</div>
          <div>
            <p className="font-display font-bold text-ink">Saffron Kitchen</p>
            <p className="text-sm text-ink-soft">saffronkitchen@gmail.com</p>
            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-600">✓ Verified</span>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          {['Edit Business Info', 'Change Password', 'Notification Settings', 'Logout'].map((item) => (
            <button key={item} className={`flex w-full items-center justify-between rounded-xl border border-[#F0EEF6] px-4 py-3 text-sm font-medium transition hover:border-purple-200 hover:bg-purple-50 ${item === 'Logout' ? 'text-red-500 hover:border-red-100 hover:bg-red-50' : 'text-ink'}`}>
              {item}
              <span className="text-ink-soft">›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Register / List My Business panel ─────────────────────────────
function Register({ setActive }) {
  const [form, setForm] = useState({
    businessName: '', phone: '', category: '', description: '', location: '',
  })
  const [photos, setPhotos] = useState(Array(6).fill(null))
  const [otp, setOtp] = useState(['', '', '', ''])
  const [otpSent, setOtpSent] = useState(false)
  const [otpVerified, setOtpVerified] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleField = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handlePhoto = (index, e) => {
    const file = e.target.files[0]
    if (!file) return
    const updated = [...photos]
    updated[index] = URL.createObjectURL(file)
    setPhotos(updated)
  }

  const handleSendOtp = () => {
    if (form.phone.length >= 10) setOtpSent(true)
  }

  const handleOtpChange = (i, val) => {
    if (!/^\d?$/.test(val)) return
    const updated = [...otp]
    updated[i] = val
    setOtp(updated)
    if (val && i < 3) document.getElementById(`otp-${i + 1}`)?.focus()
    if (updated.every((d) => d !== '')) setOtpVerified(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!otpVerified) return
    setSubmitted(true)
    setTimeout(() => setActive('dashboard'), 2000)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="mb-4 text-6xl">🎉</div>
        <h2 className="font-display text-2xl font-extrabold text-ink">Business Submitted!</h2>
        <p className="mt-2 text-ink-soft">We'll verify and list your business shortly. Redirecting to dashboard...</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-7">
        <h1 className="font-display text-2xl font-extrabold text-ink">List Your Business</h1>
        <p className="mt-1 text-sm text-ink-soft">Get discovered by thousands of locals. It's completely free!</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Photo upload grid */}
        <div className="rounded-2xl border border-[#EFEDF5] bg-white p-6 shadow-sm">
          <p className="mb-4 font-display font-bold text-ink">Business Photos</p>
          <div className="grid grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <label key={i} className="group relative flex h-28 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-purple-200 bg-purple-50 transition hover:border-purple-500 hover:bg-purple-100">
                {src ? (
                  <img src={src} alt="" className="h-full w-full object-cover" />
                ) : (
                  <>
                    <span className="text-2xl">📷</span>
                    <span className="mt-1 text-xs text-ink-soft">Add Photo</span>
                  </>
                )}
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handlePhoto(i, e)} />
              </label>
            ))}
          </div>
        </div>

        {/* Business details */}
        <div className="rounded-2xl border border-[#EFEDF5] bg-white p-6 shadow-sm">
          <p className="mb-5 font-display font-bold text-ink">Business Details</p>
          <div className="flex flex-col gap-4">

            {/* Business name */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">Business Name</label>
              <input
                name="businessName"
                value={form.businessName}
                onChange={handleField}
                placeholder="e.g. Saffron Kitchen"
                required
                className="w-full rounded-xl border border-[#E5E0EE] px-4 py-3 text-sm outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* Phone + OTP */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">
                Phone Number
                {otpVerified && (
                  <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-600">✓ Verified</span>
                )}
              </label>
              <div className="flex gap-2">
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleField}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  required
                  disabled={otpSent}
                  className="flex-1 rounded-xl border border-[#E5E0EE] px-4 py-3 text-sm outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100 disabled:bg-gray-50"
                />
                {!otpVerified && (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={form.phone.length < 10}
                    className="rounded-xl bg-purple-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-600 disabled:opacity-40"
                  >
                    {otpSent ? 'Resend' : 'Send OTP'}
                  </button>
                )}
              </div>

              {/* OTP boxes */}
              {otpSent && !otpVerified && (
                <div className="mt-3">
                  <p className="mb-2 text-xs text-ink-soft">Enter the 4-digit OTP sent to {form.phone}</p>
                  <div className="flex gap-3">
                    {otp.map((d, i) => (
                      <input
                        key={i}
                        id={`otp-${i}`}
                        type="text"
                        maxLength={1}
                        value={d}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                        className="h-12 w-12 rounded-xl border-2 border-purple-200 text-center text-lg font-bold text-ink outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleField}
                required
                className="w-full rounded-xl border border-[#E5E0EE] px-4 py-3 text-sm outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              >
                <option value="">Select a category</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleField}
                placeholder="Tell customers what makes your business special..."
                rows={3}
                required
                className="w-full resize-none rounded-xl border border-[#E5E0EE] px-4 py-3 text-sm outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
              />
            </div>

            {/* Location */}
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-ink">Location</label>
              <div className="flex gap-2">
                <input
                  name="location"
                  value={form.location}
                  onChange={handleField}
                  placeholder="e.g. Near SBI Branch, Matigara-1"
                  required
                  className="flex-1 rounded-xl border border-[#E5E0EE] px-4 py-3 text-sm outline-none transition focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                />
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
                >
                  📍 Pin on Map
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="rounded-2xl border border-[#EFEDF5] bg-white p-6 shadow-sm text-center">
          <p className="mb-1 font-display text-lg font-bold text-ink">List your business for FREE!!!</p>
          <p className="mb-5 text-sm text-ink-soft">Get verified and reach thousands of local customers.</p>
          <button
            type="submit"
            disabled={!otpVerified}
            className="w-full rounded-full bg-purple-700 py-3.5 font-display font-bold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            SUBMIT!
          </button>
          {!otpVerified && (
            <p className="mt-2 text-xs text-ink-soft">Please verify your phone number before submitting.</p>
          )}
        </div>

      </form>
    </div>
  )
}

// ── Main Merchant page ─────────────────────────────────────────────
export default function Merchant() {
  const [active, setActive] = useState('dashboard')

  const PANELS = {
    dashboard: <Dashboard />,
    listings: <MyListings setActive={setActive} />,
    offers: <Offers />,
    insights: <Insights />,
    register: <Register setActive={setActive} />,
    account: <Account />,
  }

  return (
    <div className="min-h-screen bg-[#F7F6FA]">
      <Navbar />
      <div className="flex">

        {/* Sidebar */}
        <aside className="sticky top-[65px] h-[calc(100vh-65px)] w-52 shrink-0 border-r border-[#EFEDF5] bg-white px-3 py-6">
          <div className="mb-6 flex items-center gap-3 px-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-purple-700 font-bold text-white">S</div>
            <div>
              <p className="text-sm font-bold text-ink">Saffron Kitchen</p>
              <p className="text-xs font-medium text-emerald-500">Verified ✓</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  active === item.id
                    ? 'bg-purple-50 font-semibold text-purple-700'
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
        <main className="flex-1 p-8">{PANELS[active]}</main>

      </div>
    </div>
  )
}