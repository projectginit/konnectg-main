import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import SplashScreen from './components/SplashScreen'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Listings from './pages/Listings'
import MapPage from './pages/Map'
import Profile from './pages/Profile'
import Merchant from './pages/Merchant'
import Admin from './pages/Admin'
import NotFound from './pages/NotFound'
import './App.css'

export default function App() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (showSplash) return <SplashScreen />

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/merchant" element={<Merchant />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}