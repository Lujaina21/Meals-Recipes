import React, { useEffect, useState } from "react";
import styles from "./Heading.module.scss";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

export default function Heading() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    return await axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((data) => {
        console.log(data.data.meals);
        setCategories(data.data.meals);
      })
      .catch((err) => {
        console.log("Error fetching categories:", err);
      });
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="container px-5 pt-10 pb-4 sm:w-screen md:w-2/3 lg:w-4/5 sm:ml-64 overflow-hidden">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#F29724] via-[#ca1023c4] to-[#c90519] bg-clip-text text-transparent">
          Learn, Cook, Eat Your Food
        </h2>
        <div className="mt-2 flex flex-row flex-wrap justify-center">
          <ul className="flex mt-8 flex-row flex-wrap gap-4 font-medium text-center text-gray-500 border-b border-gray-200">
            {categories.map((category) => (
              <li key={category.strCategory} className="me-2">
                <NavLink
                  aria-current="page"
                  className={`${styles["category-link"]}`}
                  to={`/specificCategory/${category.strCategory}`}
                  data-discover="true"
                >
                  {category.strCategory}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
