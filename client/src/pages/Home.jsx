import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Cards from "../components/Cards";
import NotifyForm from "../components/NotifyForm";
import BusinessCTA from "../components/BusinessCTA";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      {/* ==================================================
                          NAVIGATION
      ================================================== */}

      <Navbar />

      {/* ==================================================
                            HERO
      ================================================== */}

      <main>
        <Hero />

        {/* ==================================================
                            MARQUEE
        ================================================== */}

        <section
          className="
            relative
            z-20
            -mt-20
          "
        >
          <Marquee />
        </section>

        {/* ==================================================
                        FEATURED CATEGORIES
        ================================================== */}

        <section>
          <Cards />
        </section>

        {/* ==================================================
                        NOTIFICATION SIGNUP
        ================================================== */}

        <section>
          <NotifyForm />
        </section>

        {/* ==================================================
                        BUSINESS CTA
        ================================================== */}

        <section>
          <BusinessCTA />
        </section>
      </main>

      {/* ==================================================
                            FOOTER
      ================================================== */}

      <Footer />
    </div>
  );
}
