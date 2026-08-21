import { Link } from "react-router-dom";

export default function BusinessCTA() {
  return (
    <section
      className="
        px-5
        py-8
        pb-14
        sm:px-6
        sm:pb-16
      "
      aria-labelledby="business-cta-title"
    >
      <div
        className="
          mx-auto
          max-w-6xl
          rounded-[28px]
          bg-gradient-to-br
          from-purple-900
          to-purple-600
          px-6
          py-12
          text-center
          text-white
          sm:px-16
          sm:py-16
        "
      >
        {/* ==================================================
                            HEADING
        ================================================== */}

        <h2
          id="business-cta-title"
          className="
            text-2xl
            font-bold
            sm:text-3xl
          "
        >
          Own a Local Business?
        </h2>

        {/* ==================================================
                            DESCRIPTION
        ================================================== */}

        <p
          className="
            mx-auto
            mt-3
            max-w-md
            text-sm
            leading-6
            text-purple-100
            sm:text-base
          "
        >
          Get verified, attract customers, and grow with KonnectG.
        </p>

        {/* ==================================================
                            CTA
        ================================================== */}

        <Link
          to="/merchant"
          className="
            mt-8
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-gold
            px-7
            py-3.5
            text-sm
            font-bold
            text-purple-900
            transition
            hover:-translate-y-0.5
            hover:shadow-lg
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-gold
            sm:px-8
          "
        >
          List Your Business For Free →
        </Link>
      </div>
    </section>
  );
}
