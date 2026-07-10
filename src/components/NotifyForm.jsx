import { useState } from 'react'

export default function NotifyForm() {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('idle') // idle | success

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim()) return

    // Placeholder: wire this up to your backend so suggestions land in a review queue.
    console.log('Business suggestion:', value)
    setStatus('success')
    setValue('')
  }

  return (
    <section className="px-6 py-8">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-gradient-to-br from-[#F8E9F3] to-[#FBF7DA] px-6 py-14 text-center sm:px-16">
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Know a Great Local Business?</h2>
        <p className="mx-auto mt-2.5 max-w-md text-ink-soft">
          Recommend a business from your community. Help them get discovered!
        </p>
        <form onSubmit={handleSubmit} className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Business name or type..."
            className="flex-1 rounded-full border border-[#E5E0EE] bg-white px-5 py-3 text-sm outline-none transition focus:border-purple-600"
          />
          <button
            type="submit"
            className="rounded-full bg-purple-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
          >
            Suggest
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-sm font-medium text-emerald-600">
            Thanks! We’ll review and reach out to them shortly.
          </p>
        )}
      </div>
    </section>
  )
}
