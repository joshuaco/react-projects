import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipeSlice, RecipeSlice } from './slices/recipeSlice';

export const useAppStore = create<RecipeSlice>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a)
  }))
);
