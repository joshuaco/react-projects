import { useEffect, useRef, useState } from 'react';
import { useTodoStore } from '../store';
import type { Todos } from '../types';

type TodoProps = {
  todo: Todos;
};

function Todo({ todo }: TodoProps) {
  const { removeTodo, completeTodo, updateTodo } = useTodoStore();
  const [isEditing, setIsEditing] = useState('');
  const [editedText, setEditedText] = useState(todo.text);
  const inputEditTitle = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (editedText === '') {
        removeTodo(todo.id);
      }
      setIsEditing('');
      updateTodo(todo.id, editedText);
    }
    if (e.key === 'Escape') {
      setEditedText(todo.text);
      setIsEditing('');
    }
  };

  useEffect(() => {
    inputEditTitle.current?.focus();
  }, [isEditing]);

  return (
    <>
      <li
        className={`
          ${todo.completed ? 'completed' : ''}
          ${isEditing === todo.id ? 'editing' : ''}
        `}
      >
        <input
          type="checkbox"
          className="toggle"
          checked={todo.completed}
          onChange={() => {
            completeTodo(todo.id);
          }}
        />
        {!isEditing ? (
          <>
            <label onDoubleClick={() => setIsEditing(todo.id)}>
              {todo.text}
            </label>
            <button
              className="destroy"
              onClick={() => {
                removeTodo(todo.id);
              }}
            />
          </>
        ) : (
          // show input when editing
          <input
            ref={inputEditTitle}
            className="edit"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => setIsEditing('')}
          />
        )}
        <button
          className="destroy"
          onClick={() => {
            removeTodo(todo.id);
          }}
        />
      </li>
    </>
  );
}

export default Todo;
