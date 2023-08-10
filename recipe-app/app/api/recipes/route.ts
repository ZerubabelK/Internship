import recipe_mock from "@/data/recipe_mock";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(recipe_mock);
}
