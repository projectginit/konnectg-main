export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-purple-900 via-purple-700 to-purple-600">
      <div className="flex h-20 w-20 animate-floatY items-center justify-center rounded-2xl bg-white text-3xl font-display font-extrabold text-purple-700 shadow-2xl">
        K
      </div>
      <h1 className="font-display text-3xl font-extrabold tracking-tight text-white">
        Konnect<span className="text-gold">G</span>
      </h1>
      <p className="font-body text-sm text-purple-100">
        Connecting Siliguri, one neighbourhood at a time.
      </p>
      <div className="mt-2 flex gap-1.5">
        <span className="h-2 w-2 animate-bounce rounded-full bg-gold [animation-delay:-0.3s]"></span>
        <span className="h-2 w-2 animate-bounce rounded-full bg-gold [animation-delay:-0.15s]"></span>
        <span className="h-2 w-2 animate-bounce rounded-full bg-gold"></span>
      </div>
    </div>
  )
}
