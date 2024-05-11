import type { Todos } from '../types';
import Todo from './Todo';

type TodosProps = {
  todos: Todos[];
  onDelete: (id: Todos['id']) => void;
  onToggleCompleted: (id: Todos['id']) => void;
};

function Todos({ todos, onDelete, onToggleCompleted }: TodosProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  );
}

export default Todos;
