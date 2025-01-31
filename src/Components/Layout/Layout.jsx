import React from "react";
import "./Layout.module.scss";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}
