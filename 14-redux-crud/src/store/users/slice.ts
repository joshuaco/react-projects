import { users as INITIAL_USERS, type User } from '../../mocks/users';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: User[] = (() => {
  const persistedState = localStorage.getItem('__redux__state');
  return persistedState ? JSON.parse(persistedState).users : INITIAL_USERS;
})();

export type UserWithoutID = Omit<User, 'id'>;
export type UserID = User['id'];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<UserWithoutID>) => {
      const id = crypto.randomUUID();
      return [...state, { ...action.payload, id }];
    },
    removeUserByID: (state, action: PayloadAction<UserID>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
    rollbackUser: (state, action: PayloadAction<User>) => {
      const userAlreadyExists = state.some(
        (user) => user.id === action.payload.id
      );
      if (!userAlreadyExists) {
        return [...state, action.payload];
      }
    }
  }
});

export const { addNewUser, removeUserByID, rollbackUser } = userSlice.actions;

export default userSlice.reducer;
