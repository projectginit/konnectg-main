import { Outlet } from "react-router-dom"

import AdminSidebar from "../components/admin/AdminSidebar";
import Footer from "../components/Footer"

import "./Admin.css"
import Navbar from "../components/Navbar";

export default function Admin() {
  return (
    <>
    <Navbar/>
    <div className="admin-layout">
      <AdminSidebar/>
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
    <Footer />
    </>
  )
}