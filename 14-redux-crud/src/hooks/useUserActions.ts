import {
  addNewUser,
  removeUserByID,
  UserID,
  UserWithoutID
} from '../store/users/slice';
import { useAppDispatch } from './store';

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const removeUser = (id: UserID) => {
    dispatch(removeUserByID(id));
  };

  const addUser = (user: UserWithoutID) => {
    dispatch(addNewUser(user));
  };

  return { addUser, removeUser };
};
