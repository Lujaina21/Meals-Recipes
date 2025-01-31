import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SpecificCategory.module.scss";
import { Link, useParams } from "react-router-dom";
import Heading from "../Heading/Heading";
import Loader from "../Loader/Loader";

export default function SpecificCategory() {
  let { category } = useParams();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getSpecificCategory() {
    return await axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((data) => {
        setCategories(data.data.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching a specific category: ", err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getSpecificCategory();
  }, [category]);

  return (
    <>
      <Heading />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container px-5 pb-4 sm:w-screen md:w-2/3 lg:w-4/5 sm:ml-64 overflow-hidden">
          <div className="meals mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
            {categories.map((cat) => (
              <div
                key={cat.idMeal}
                className="meal text-center hover:shadow-xl hover:scale-105 duration-300 transition-all bg-white p-8 pb-4 rounded-[35px]"
              >
                <img
                  src={cat.strMealThumb}
                  className="w-full rounded-full shadow-xl transition-all duration-700 hover:rotate-[360deg] -translate-y-20"
                  alt={cat.strMeal}
                />
                <h3 className="font-semibold -mt-14 text-xl">{cat.strMeal}</h3>
                <h5 className="text-emerald-600 flex justify-center items-center gap-2">
                  {cat.strArea}
                </h5>

                <button className="text-white font-semibold mt-4 px-6 py-3 rounded-full bg-emerald-500 transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg hover:scale-105">
                  <Link to={`/mealDetails/${cat.idMeal}`}>View Recipe</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
