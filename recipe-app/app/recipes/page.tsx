"use client";
import RecipeCard from "@/components/RecipeCard";
import recipe_mock, { Recipe } from "@/data/recipe_mock";
import Image from "next/image";
import React from "react";
import { useGetRecipesQuery } from "../redux/recipe-api";
import Skeleton from "@/components/Skeleton";

const LandingPage: React.FC = () => {
  const { data, isLoading, error } = useGetRecipesQuery();
  if (error) {
    return (
      <div className="bg-white py-16 px-4 overflow-hidden">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl font-bold mb-4">
            Sorry, we couldn't find what you're looking for.
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="javascript:history.back()"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Go Back
          </a>
        </div>
      </div>
    );
  }
  return (
    <main className="bg-gray-100">
      <div className="bg-gray-100">
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="lg:max-w-screen-xl mx-auto lg:grid md:grid-cols-2 lg:grid-cols-3 flex flex-wrap justify-center gap-8">
              {isLoading &&
                new Array(9).fill(0).map((_, i) => <Skeleton key={i} />)}
              {data &&
                data.map((recipe, index) => (
                  <RecipeCard recipe={recipe} key={index} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LandingPage;
