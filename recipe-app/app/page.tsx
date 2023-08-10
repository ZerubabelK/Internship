"use client";
import Hero from "@/components/Hero";
import PopularList from "@/components/PopularList";
import { Recipe } from "@/data/recipe_mock";
import React from "react";
import { useGetRecipesQuery } from "./redux/recipe-api";

const LandingPage: React.FC = () => {
  const { data, isLoading, error } = useGetRecipesQuery();
  const [recipes, setRecipes] = React.useState<Recipe[]>();

  return (
    <main className="bg-gray-100">
      <div className="bg-gray-100 relative">
        <Hero />

        <PopularList recipes={data} isLoading={isLoading} />
      </div>
    </main>
  );
};

export default LandingPage;
