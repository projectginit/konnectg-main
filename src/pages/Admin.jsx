import { Outlet } from "react-router-dom"

import AdminSidebar from "../components/admin/AdminSidebar";
// import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "./Admin.css"

export default function Admin() {
  return (
    <>
      <AdminSidebar/>
      <Footer />
      <Outlet />
    </>
  )
}
