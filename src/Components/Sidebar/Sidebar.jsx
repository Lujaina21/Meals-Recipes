import React from "react";
import "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import RecipesLogo from "./../../assets/logo.png";

export default function Sidebar() {
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <i className="fa-solid fa-bars w-6 h-6 text-3xl"></i>
      </button>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link to="/" className="flex items-center mb-5">
            <img src={RecipesLogo} className=" me-3" alt="Recipes Logo" />
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center px-4 py-2 text-white rounded-xl bg-[#F29724] group mb-6 text-lg shadow-lg shadow-orange-300 font-semibold hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all "
              >
                <i className="fa-solid fa-utensils"></i>
                <span className="ms-3">Meals</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center text-black px-4 py-2 rounded-xl border-1 border-gray-300 group mb-4 hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all text-lg"
              >
                <i className="fa-solid fa-utensils"></i>
                <span className="ms-3">Ingredients</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center text-black px-4 py-2 rounded-xl border-1 border-gray-300 group mb-4 hover:scale-105 hover:shadow-xl hover:shadow-orange-50 transition-all text-lg"
              >
                <i className="fa-solid fa-utensils"></i>
                <span className="ms-3">Area</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
