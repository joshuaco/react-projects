import { z } from 'zod';
import {
  CategoriesAPIResponseSchema,
  DrinkAPIResponse,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
  RecipeSearchFiltersSchema
} from '../schemas/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type RecipeSearchFilters = z.infer<typeof RecipeSearchFiltersSchema>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
