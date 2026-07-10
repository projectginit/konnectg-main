const LINKS = [
  { label: 'Categories', to: '/categories' },
  { label: 'Listings', to: '/listings' },
  { label: 'Merchant', to: '/merchant' },
]

export default function Footer() {
  return (
    <footer className="border-t border-purple-100 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <div className="flex items-center justify-center gap-2 font-display text-lg font-bold sm:justify-start">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-sm text-white">
              K
            </span>
            <span>
              <span className="text-purple-700">Konnect</span>
              <span className="text-gold-dark">G</span>
            </span>
          </div>
          <p className="mt-1 text-sm text-ink-soft">
            Connecting Siliguri’s local community, one business at a time.
          </p>
        </div>

        <nav className="flex gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.to}
              className="text-sm font-medium text-ink-soft transition hover:text-purple-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <p className="mt-8 text-center text-xs text-ink-soft/70">© 2026 KonnectG. All rights reserved.</p>
    </footer>
  )
}
