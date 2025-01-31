import React, { useEffect, useState } from "react";
import "./Home.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import Loader from "../Loader/Loader";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // const [meals, setMeals] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // async function getMeals() {
  //   return await axios
  //     .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  //     .then((data) => {
  //       console.log(data.data.meals);
  //       setMeals(data.data.meals);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching meals: ", err);
  //       setIsLoading(false);
  //     });
  // }

  // useEffect(() => {
  //   getMeals();
  // }, []);

  function getMeals() {
    return axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  }

  let { data, isLoading } = useQuery({
    queryKey: ["MealsKey"],
    queryFn: getMeals,
  });

  return (
    <>
      <Heading />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container px-5 pb-4 sm:w-screen md:w-2/3 lg:w-4/5 sm:ml-64 overflow-hidden">
          <div className="meals mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-20">
            {data?.data?.meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="meal text-center hover:shadow-xl hover:scale-105 duration-300 transition-all bg-white p-8 pb-4 rounded-[35px]"
              >
                <img
                  src={meal.strMealThumb}
                  className="w-full rounded-full shadow-xl transition-all duration-700 hover:rotate-[360deg] -translate-y-20"
                  alt={meal.strMeal}
                />
                <h3 className="font-semibold -mt-14 text-xl">{meal.strMeal}</h3>
                <h5 className="text-emerald-600 flex justify-center items-center gap-2">
                  <i className="fa-solid fa-earth-americas"></i>
                  {meal.strArea}
                </h5>

                <button className="text-white font-semibold mt-4 px-6 py-3 rounded-full bg-emerald-500 transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg hover:scale-105">
                  <Link to={`/mealDetails/${meal.idMeal}`}>View Recipe</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
