import { mockTodos } from '../mocks';
import type { Todos } from '../types';

export type TodoActions =
  | { type: 'remove-todo'; payload: { id: Todos['id'] } }
  | { type: 'complete-todo'; payload: { id: Todos['id'] } }
  | { type: 'filter-all-todos' }
  | { type: 'filter-active-todos' }
  | { type: 'filter-completed-todos' };

export type TodoState = {
  todos: Todos[];
  filteredTodos: Todos[];
};

export const InitialState: TodoState = {
  todos: mockTodos,
  filteredTodos: mockTodos
};

export const todoReducer = (
  state: TodoState = InitialState,
  action: TodoActions
) => {
  if (action.type === 'remove-todo') {
    const newTodos = state.todos.filter(
      (todo) => todo.id !== action.payload.id
    );
    return {
      ...state,
      todos: newTodos,
      filteredTodos: newTodos
    };
  }
  if (action.type === 'complete-todo') {
    const newTodos = state.filteredTodos.map((todo) => {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });

    return { ...state, todos: newTodos, filteredTodos: newTodos };
  }
  if (action.type === 'filter-active-todos') {
    const filteredTodos = state.filteredTodos.filter((todo) => !todo.completed);
    return { ...state, todos: filteredTodos };
  }
  if (action.type === 'filter-completed-todos') {
    const filteredTodos = state.filteredTodos.filter((todo) => todo.completed);
    return { ...state, todos: filteredTodos };
  }
  if (action.type === 'filter-all-todos') {
    return {
      ...state,
      todos: state.filteredTodos
    };
  }

  return state;
};
