import { configureStore } from '@reduxjs/toolkit';
import {
  persistancleLocalStorageMiddleware,
  syncWithDatabaseMiddleware
} from './middlewares';
import usersReducer from './users/slice';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      persistancleLocalStorageMiddleware,
      syncWithDatabaseMiddleware
    )
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
