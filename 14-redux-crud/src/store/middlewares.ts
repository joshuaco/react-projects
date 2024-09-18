import { Middleware } from '@reduxjs/toolkit';
import { rollbackUser } from './users/slice';
import { toast } from 'sonner';
import { RootState } from '.';

export const persistancleLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    console.log(store.getState());
    console.log(action);
    next(action);
    console.log(store.getState());
    localStorage.setItem('__redux__state', JSON.stringify(store.getState()));
  };

const isAction = (
  action: unknown
): action is { type: string; payload: string } =>
  typeof action === 'object' && action !== null && 'type' in action;

export const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    if (!isAction(action)) return next(action);

    const { type, payload } = action;
    const prevState = store.getState() as RootState;
    next(action);

    if (type === 'users/removeUserByID') {
      const userToRemove = prevState.users.find((user) => user.id === payload);

      fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
        method: 'DELETE'
      })
        .then((res) => {
          if (res.ok) {
            toast.success('User deleted!');
          }
        })
        .catch((err) => {
          toast.error('Error deleting user');
          if (userToRemove) store.dispatch(rollbackUser(userToRemove));
          console.error(err);
        });
    }
  };
