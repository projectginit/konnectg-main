export default function BusinessCTA() {
  return (
    <section className="px-6 py-8 pb-16">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-gradient-to-br from-purple-900 to-purple-600 px-8 py-16 text-center text-white sm:px-16">
        <h2 className="font-display text-3xl font-bold">Own a Local Business?</h2>
        <p className="mx-auto mt-3 max-w-md text-purple-100">
          Get verified, attract customers, and grow with KonnectG.
        </p>
        <a
          href="/merchant"
          className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-bold text-purple-900 transition hover:-translate-y-0.5"
        >
          List Your Business Free →
        </a>
      </div>
    </section>
  )
}
