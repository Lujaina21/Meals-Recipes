import React from "react";
import "./Footer.module.scss";
import RecipesLogo from "./../../assets/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-white rounded-lg shadow-sm relative z-50 mt-10">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3">
              <img src={RecipesLogo} className="h-8" alt="Recipes Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Recipes
              </span>
            </a>
            <span className="text-blue-600 font-bold text-2xl">Meals</span>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
            © 2025
            <a
              href="https://www.facebook.com"
              className="hover:underline hover:text-gray-500 text-gray-500 mx-1"
            >
              Lujaina Walid.
            </a>
            All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
