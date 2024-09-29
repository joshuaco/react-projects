import axios from 'axios';
import {
  CategoriesAPIResponseSchema,
  DrinksAPIResponse,
  RecipeAPIResponseSchema
} from '../schemas/recipes-schema';
import type { Drink, RecipeSearchFilters } from '../types';

export const getCategories = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const { data } = await axios.get(url);

  const safeData = CategoriesAPIResponseSchema.safeParse(data);

  if (safeData.success) {
    return safeData.data;
  }
};

export const searchRecipes = async (searchFilters: RecipeSearchFilters) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchFilters.ingredients}&c=${searchFilters.category}`;

  const { data } = await axios.get(url);
  const safeData = DrinksAPIResponse.safeParse(data);

  if (safeData.success) {
    return safeData.data;
  }
};

export const getRecipeDetails = async (recipeID: Drink['idDrink']) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeID}`;

  const { data } = await axios(url);
  const safeData = RecipeAPIResponseSchema.safeParse(data.drinks[0]);

  if (safeData.success) {
    return safeData.data;
  }
};
