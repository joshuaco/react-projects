import type { Todos } from '../types';

type TodoProps = {
  todo: Todos;
  onDelete: (id: Todos['id']) => void;
  onToggleCompleted: (id: Todos['id']) => void;
};

function Todo({ todo, onDelete, onToggleCompleted }: TodoProps) {
  return (
    <>
      <li
        className={`${todo.completed ? 'completed' : ''}`}
        onDoubleClick={() => console.log('Double clicked!')}
      >
        <input
          type="checkbox"
          className="toggle"
          checked={todo.completed}
          onChange={() => onToggleCompleted(todo.id)}
        />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => onDelete(todo.id)} />
      </li>
    </>
  );
}

export default Todo;
