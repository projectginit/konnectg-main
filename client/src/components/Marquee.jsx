const PROMOS = [
  {
    id: "limited-offer",
    tag: "Limited Offer",
    title: "20% Off at Raj Electronics",
    meta: "Valid till Dec 31 • Matigara",
    gradient: "linear-gradient(135deg, #FF7E5F, #ED4584)",
  },
  {
    id: "new-listing",
    tag: "New Listing",
    title: "Ananya Beauty Parlour",
    meta: "Now verified • Medical",
    gradient: "linear-gradient(135deg, #6B2FA0, #A23FCE)",
  },
  {
    id: "featured",
    tag: "Featured",
    title: "Free Delivery at Gupta Store",
    meta: "Orders above ₹500 • Shivamandir",
    gradient: "linear-gradient(135deg, #16A974, #16D9A6)",
  },
];

export default function Marquee() {
  return (
    <section
      className="
        relative
        z-20
        px-5
        sm:px-6
      "
      aria-label="Featured businesses and offers"
    >
      <div
        className="
          mx-auto
          -mt-12
          grid
          max-w-6xl
          gap-4
          sm:grid-cols-3
          sm:gap-5
          md:-mt-16
        "
      >
        {PROMOS.map((promo) => (
          <article
            key={promo.id}
            className="
              rounded-2xl
              p-5
              text-white
              shadow-xl
              shadow-purple-950/30
              transition-transform
              duration-200
              hover:-translate-y-1
            "
            style={{
              background: promo.gradient,
            }}
          >
            <span
              className="
                mb-2
                block
                text-xs
                font-bold
                uppercase
                tracking-wide
                opacity-90
              "
            >
              {promo.tag}
            </span>

            <h3
              className="
                text-base
                font-bold
                leading-snug
              "
            >
              {promo.title}
            </h3>

            <p
              className="
                mt-1
                text-sm
                leading-5
                opacity-90
              "
            >
              {promo.meta}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
