import { Dispatch, createContext, useReducer } from 'react';
import {
  InitialState,
  TodoActions,
  TodoState,
  todoReducer
} from '../reducers/todo-reducer';

type TodoContextProps = {
  state: TodoState;
  dispatch: Dispatch<TodoActions>;
};

type TodoProviderProps = {
  children: React.ReactNode;
};

export const TodoContext = createContext<TodoContextProps>(null!);

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, InitialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
