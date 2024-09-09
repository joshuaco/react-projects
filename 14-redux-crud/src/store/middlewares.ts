import { Middleware } from '@reduxjs/toolkit';
import { rollbackUser } from './users/slice';
import { toast } from 'sonner';

export const persistancleLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    console.log(store.getState());
    console.log(action);
    next(action);
    console.log(store.getState());
    localStorage.setItem('__redux__state', JSON.stringify(store.getState()));
  };

export const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action;
    const prevState = store.getState();
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
