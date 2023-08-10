"use client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Recipe } from "@/data/recipe_mock";
import { HYDRATE } from "next-redux-wrapper";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getRecipes: builder.query<Recipe[], void>({
      query: () => `/recipes`,
    }),
    getRecipeById: builder.query<Recipe, string>({
      query: (id) => `/recipes/${id}`,
    }),
  }),
});

export const { useGetRecipesQuery, useGetRecipeByIdQuery } = recipeApi;
