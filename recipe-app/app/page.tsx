"use client";
import RecipeCard from "@/components/RecipeCard";
import recipe_mock from "@/data/recipe_mock";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const LandingPage: React.FC = () => {
  const [recipes, setRecipes] = React.useState(recipe_mock);

  return (
    <main className="bg-gray-100">
      <div className="bg-gray-100 relative">
        <section className="bg-[#2a5846] py-16">
          <div className="lg:max-w-screen-xl sm:max-w-screen-sm mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-1 flex justify-between items-center">
                <div className="w-full flex flex-col lg:items-start items-center">
                  <div>
                    <h2 className="lg:text-5xl sm:text-left sm:text-3xl  text-center text-xl font-semibold text-white mb-4 lg:max-w-[15ch] max-w-[20ch] mx-auto">
                      The Easiest Way To Make Your Favorite Meals
                    </h2>
                    <p className="text-gray-300 lg:text-base text-sm mb-6 max-w-[40ch] lg:mx-0 mx-auto sm:text-left sm:max-w-[50ch] text-center">
                      Discover 1000+ recipes in your hand with the best recipe.
                      Help you find the easiest way to cook.
                    </p>
                    <div className="flex justify-center sm:block">
                      <button className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-full mx-auto text-center">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-1 hidden md:flex md:justify-center">
                <Image
                  width={500}
                  height={300}
                  className="rounded"
                  src="/recipe-hero.jpg"
                  alt="Delicious Recipes"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="lg:max-w-screen-xl sm:max-w-screen-sm mx-auto flex justify-between items-center">
              <div className="space-y-2">
                <h1 className="font-bold lg:text-3xl">
                  Popular Recipes Of The Week
                </h1>
                <p className="font-light text-sm sm:text-base">
                  Our most popular recipes of the week
                </p>
              </div>
              <div>
                <Link
                  href="/recipes"
                  className="top-0 right-0 border-2 border-[#E05D26] font-bold px-3 py-2 rounded bg-white text-[#E05D26] hover:scale-110 ease-in-out hover:bg-[#E05D26] hover:text-white transition duration-300"
                >
                  See all
                </Link>
              </div>
            </div>
            <div className="lg:max-w-screen-xl mx-auto lg:grid sm:max-w-screen-sm sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 flex flex-wrap justify-center gap-8 mt-6">
              {recipes.map(
                (recipe, index) => index < 3 && <RecipeCard recipe={recipe} />
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LandingPage;
