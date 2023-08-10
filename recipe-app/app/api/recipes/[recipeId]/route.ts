import recipe_mock from "@/data/recipe_mock";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { recipeId: string } }
) {
  const recipe = recipe_mock.find(
    (recipe) => recipe.id === Number(params.recipeId)
  );
  if (!recipe) {
    return NextResponse.json({ error: "Recipe not found" }, { status: 404 });
  }

  return NextResponse.json(recipe, { status: 200 });
}
