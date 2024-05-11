import { useState } from 'react';
import { mockTodos } from './mocks';
import Todos from './components/Todos';
import Footer from './components/Footer';
import type { Todos as TodoList } from './types';

function App() {
  const [todos, setTodos] = useState(mockTodos);

  const handleDelete = (id: TodoList['id']) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = (id: TodoList['id']) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <main className="main">
        <Todos
          todos={todos}
          onDelete={handleDelete}
          onToggleCompleted={handleCompleted}
        />
      </main>
      <Footer todos={todos} />
    </div>
  );
}

export default App;
