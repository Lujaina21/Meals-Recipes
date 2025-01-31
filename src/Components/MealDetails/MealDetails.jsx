import React, { useEffect, useState } from "react";
import "./MealDetails.module.scss";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from "axios";

export default function MealDetails() {
  let { id } = useParams();

  const [mealDetails, setMealDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getMealDetails() {
    return await axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((data) => {
        console.log(data.data.meals);
        setMealDetails(data?.data?.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching meal details: ", err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getMealDetails();
  }, [id]);

  return (
    <>
      <div className="p-4 overflow-hidden sm:ml-64 min-h-screen">
        <div className="container p-4">
          {isLoading ? (
            <Loader />
          ) : (
            mealDetails.map((meal) => (
              <div className="flex gap-4 lg:flex-row ">
                <div className="lg:w-2/3">
                  {/* Meal Recipe */}
                  <h1 className="text-5xl font-semibold mb-4">
                    {meal.strMeal}
                  </h1>
                  <div className="grid gap-4 mt-10 lg:grid-cols-2">
                    <div>
                      <img
                        className="w-full rounded-2xl mb-6"
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                      />
                      <ul className="flex gap-4 justify-center">
                        <li className="bg-red-600 text-white py-2 px-4 rounded-lg ">
                          <a
                            target="_blank"
                            href={meal.strYoutube}
                            className="flex gap-2 justify-center items-center"
                          >
                            <i className="fa-brands fa-youtube"></i>
                            Youtube
                          </a>
                        </li>
                        <li className="bg-emerald-500 text-white py-2 px-4 rounded-lg ">
                          <a
                            target="_blank"
                            href={meal.strSource}
                            className="flex gap-2 justify-center items-center"
                          >
                            <i className="fa-solid fa-globe"></i>
                            Source
                          </a>
                        </li>
                      </ul>
                    </div>
                    <p>{meal.strInstructions}</p>
                  </div>
                </div>

                {/* Meal Ingredients */}
                <div className="lg:w-1/3 p-4">
                  <div className="bg-white rounded-2xl p-4">
                    <h3 className="text-2xl font-semibold mb-4 border-b-4 p-2">
                      Ingredients
                    </h3>
                    {meal.strIngredient1 && (
                      <div className="flex justify-between p-2 border-b-2 last:border-b-0">
                        <span>{meal.strIngredient1}:</span>
                        <span>{meal.strMeasure1}</span>
                      </div>
                    )}
                    {meal.strIngredient2 && (
                      <div className="flex justify-between p-2 border-b-2 last:border-b-0">
                        <span>{meal.strIngredient2}:</span>
                        <span>{meal.strMeasure2}</span>
                      </div>
                    )}
                    {meal.strIngredient3 && (
                      <div className="flex justify-between p-2 border-b-2 last:border-b-0">
                        <span>{meal.strIngredient3}:</span>
                        <span>{meal.strMeasure3}</span>
                      </div>
                    )}
                    {meal.strIngredient4 && (
                      <div className="flex justify-between p-2 border-b-2 last:border-b-0">
                        <span>{meal.strIngredient4}:</span>
                        <span>{meal.strMeasure4}</span>
                      </div>
                    )}
                    {meal.strIngredient5 && (
                      <div className="flex justify-between p-2 border-b-2 last:border-b-0">
                        <span>{meal.strIngredient5}:</span>
                        <span>{meal.strMeasure5}</span>
                      </div>
                    )}
                    {meal.strIngredient6 && (
                      <div className="flex justify-between p-2 border-b-2 last:border-b-0">
                        <span>{meal.strIngredient6}:</span>
                        <span>{meal.strMeasure6}</span>
                      </div>
                    )}
                    {meal.strIngredient7 && (
                      <div className="flex justify-between p-2 border-b-2 last:border-b-0">
                        <span>{meal.strIngredient7}:</span>
                        <span>{meal.strMeasure7}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
