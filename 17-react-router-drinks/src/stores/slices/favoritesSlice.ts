import { StateCreator } from 'zustand';
import { Recipe } from '../../types';
import {
  createNotificationSlice,
  NotificationSlice
} from './notificationSlice';

export interface FavoritesSlice {
  favorites: Recipe[];
  addToFavorites: (recipe: Recipe) => void;
  deleteFavorite: (recipe: Recipe) => void;
  favoriteExists: (id: Recipe['idDrink']) => boolean;
  loadFromStorage: () => void;
}

export const createFavoritesSlice: StateCreator<
  FavoritesSlice & NotificationSlice,
  [],
  [],
  FavoritesSlice
> = (set, get, api) => ({
  favorites: [],

  addToFavorites: (recipe) => {
    if (get().favoriteExists(recipe.idDrink)) {
      get().deleteFavorite(recipe);
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe]
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: 'Recipe added to favorites!',
        error: false
      });
    }
    localStorage.setItem('favorites', JSON.stringify(get().favorites));
  },
  deleteFavorite: (recipe) => {
    set((state) => ({
      favorites: state.favorites.filter((fav) => fav.idDrink !== recipe.idDrink)
    }));
    createNotificationSlice(set, get, api).showNotification({
      text: 'Recipe removed from favorites!',
      error: false
    });
  },
  favoriteExists: (id) => {
    return get().favorites.some((r) => r.idDrink === id);
  },
  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem('favorites');

    if (storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites)
      });
    }
  }
});
