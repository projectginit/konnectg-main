import { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
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

import Overview from './components/admin/Overview'
import Merchants from './components/admin/Merchants'
import Verification from './components/admin/Verification'
import Offers from './components/admin/Offers'
import Reviews from './components/admin/Reviews'
import Analytics from './components/admin/Analytics'

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
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Overview />} />
        <Route path="merchants" element={<Merchants />} />
        <Route path="verification" element={<Verification />} />
        <Route path="offers" element={<Offers />}/>
        <Route path="reviews" element={<Reviews />}/>
        <Route path="analytics" element={<Analytics />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}