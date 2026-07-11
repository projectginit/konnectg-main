import { Outlet } from "react-router-dom"

import AdminSidebar from "../components/admin/AdminSidebar";
// import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import "./Admin.css"

import Overview from "../components/admin/Overview";

export default function Admin() {
  return (
    <>
      <AdminSidebar/>
      <Overview />
      <Footer />
      <Outlet />
    </>
  )
}
