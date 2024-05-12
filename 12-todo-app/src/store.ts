import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { FilterType, Todos } from './types';
import { getTodos, updateTodoToBin } from './services';

type TodoStore = {
  todos: Todos[];
  filter: FilterType;
  initTodos: () => void;
  setFilter: (filter: FilterType) => void;
  filteredTodos: () => Todos[];
  addTodo: (text: string) => void;
  removeTodo: (id: Todos['id']) => void;
  completeTodo: (id: Todos['id']) => void;
  removeCompleted: () => void;
  updateTodo: (id: Todos['id'], text: string) => void;
};
export const useTodoStore = create<TodoStore>()(
  devtools((set, get) => ({
    todos: [],
    filter: 'all',
    //Actions
    initTodos: async () => {
      const todos = await getTodos();
      if (todos) {
        set({ todos });
      } else {
        set({ todos: [] });
      }
    },
    setFilter: (filter: FilterType) => set({ filter }),
    filteredTodos: () => {
      const { todos, filter } = get();
      if (filter === 'active') {
        return todos.filter((todo) => !todo.completed);
      }
      if (filter === 'completed') {
        return todos.filter((todo) => todo.completed);
      }
      return todos;
    },
    addTodo(text) {
      const newTodo = {
        id: crypto.randomUUID(),
        text,
        completed: false
      };
      set((state) => ({
        todos: [...state.todos, newTodo]
      }));
      updateTodoToBin(get().todos);
    },
    removeTodo(id) {
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
      }));
      updateTodoToBin(get().todos);
    },
    completeTodo(id) {
      set((state) => ({
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      }));
      updateTodoToBin(get().todos);
    },
    removeCompleted() {
      set((state) => ({
        todos: state.todos.filter((todo) => !todo.completed)
      }));
      updateTodoToBin(get().todos);
    },
    updateTodo(id, text) {
      set((state) => ({
        todos: state.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              text
            };
          }
          return todo;
        })
      }));
      updateTodoToBin(get().todos);
    }
  }))
);
