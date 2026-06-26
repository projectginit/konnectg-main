import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Cards from '../components/Cards'
import NotifyForm from '../components/NotifyForm'
import BusinessCTA from '../components/BusinessCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <Hero />
      <Marquee />
      <Cards />
      <NotifyForm />
      <BusinessCTA />
      <Footer />
    </div>
  )
}
