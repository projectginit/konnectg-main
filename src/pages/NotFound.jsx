import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper px-6 text-center">
      <span className="font-display text-6xl font-extrabold text-purple-700">404</span>
      <h1 className="font-display text-xl font-semibold text-ink">
        This street doesn’t exist on our map yet.
      </h1>
      <Link
        to="/"
        className="mt-2 rounded-full bg-purple-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-600"
      >
        Back to Home
      </Link>
    </div>
  )
}
