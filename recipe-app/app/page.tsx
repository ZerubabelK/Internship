"use client";
import Hero from "@/components/Hero";
import PopularList from "@/components/PopularList";
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
        <Hero />
        <PopularList recipes={recipes} />
      </div>
    </main>
  );
};

export default LandingPage;
