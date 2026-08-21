import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Listings from "./pages/Listings";
import MapPage from "./pages/Map";
import Profile from "./pages/Profile";
import Merchant from "./pages/Merchant";
import BusinessDetails from "./pages/BusinessDetails";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import NotFound from "./pages/NotFound";

import Admin from "./pages/admin/Admin";
import Overview from "./pages/admin/Overview";
import Merchants from "./pages/admin/Merchants";
import Verification from "./pages/admin/Verification";
import Offers from "./pages/admin/Offers";
import Reviews from "./pages/admin/Reviews";
import Analytics from "./pages/admin/Analytics";
import Approval from "./pages/admin/Approval";

import "./App.css";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  /* ==========================================================
                        SPLASH SCREEN
  ========================================================== */

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Routes>
      {/* ======================================================
                            PUBLIC PAGES
      ====================================================== */}

      <Route path="/" element={<Home />} />

      <Route path="/categories" element={<Categories />} />

      <Route path="/listings" element={<Listings />} />

      <Route path="/businesses/:businessId" element={<BusinessDetails />} />

      <Route path="/map" element={<MapPage />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/merchant" element={<Merchant />} />

      {/* ======================================================
                        AUTHENTICATION
      ====================================================== */}

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      {/* ======================================================
                            ADMIN
      ====================================================== */}

      <Route path="/admin" element={<Admin />}>
        {/* /admin → /admin/dashboard */}

        <Route index element={<Navigate to="dashboard" replace />} />

        {/* Dashboard */}

        <Route path="dashboard" element={<Overview />} />

        {/* Merchants */}

        <Route path="merchants" element={<Merchants />} />

        {/* Verification */}

        <Route path="verification" element={<Verification />} />

        {/* Approval */}

        <Route path="approval" element={<Approval />} />

        {/* Offers */}

        <Route path="offers" element={<Offers />} />

        {/* Reviews */}

        <Route path="reviews" element={<Reviews />} />

        {/* Analytics */}

        <Route path="analytics" element={<Analytics />} />
      </Route>

      {/* ======================================================
                            404
      ====================================================== */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
