import { StateCreator } from 'zustand';
import {
  getCategories,
  getRecipeDetails,
  searchRecipes
} from '../../services/recipeService';
import type {
  Categories,
  Drinks,
  Recipe,
  RecipeSearchFilters
} from '../../types';

export interface RecipeSlice {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilters: RecipeSearchFilters) => Promise<void>;
  selectRecipe: (id: string) => Promise<void>;
}

export const createRecipeSlice: StateCreator<RecipeSlice> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  selectedRecipe: {} as Recipe,

  fetchCategories: async () => {
    const categories = await getCategories();
    set({ categories });
  },

  searchRecipes: async (searchFilters) => {
    const drinks = await searchRecipes(searchFilters);
    set({ drinks });
  },

  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeDetails(id);
    set({ selectedRecipe });
  }
});
