"use client";
import RecipeCard from "@/components/RecipeCard";
import recipe_mock, { Recipe } from "@/data/recipe_mock";
import Image from "next/image";
import React from "react";

const LandingPage: React.FC = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>(recipe_mock);

  return (
    <main className="bg-gray-100">
      <div className="bg-gray-100">
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="lg:max-w-screen-xl mx-auto lg:grid md:grid-cols-2 lg:grid-cols-3 flex flex-wrap justify-center gap-8">
              {recipes.map((recipe, index) => (
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
