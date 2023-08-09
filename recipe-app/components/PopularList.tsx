import { Recipe } from "@/data/recipe_mock";
import Link from "next/link";
import RecipeCard from "./RecipeCard";

interface Prop {
  recipes: Recipe[];
}
const PopularList: React.FC<Prop> = ({ recipes }) => {
  return (
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
  );
};

export default PopularList;
