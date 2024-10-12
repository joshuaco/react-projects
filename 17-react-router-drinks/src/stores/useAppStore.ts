import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createRecipeSlice, RecipeSlice } from './slices/recipeSlice';
import { createFavoritesSlice, FavoritesSlice } from './slices/favoritesSlice';
import {
  createNotificationSlice,
  NotificationSlice
} from './slices/notificationSlice';

export const useAppStore = create<
  RecipeSlice & FavoritesSlice & NotificationSlice
>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a)
  }))
);
