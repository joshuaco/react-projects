import { useState } from 'react';
import { useTodoStore } from '../store';

function CreateTodo() {
  const [inputValue, setInputValue] = useState('');
  const { addTodo } = useTodoStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="new-todo"
        value={inputValue}
        placeholder="What do you need to do?"
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
    </form>
  );
}

export default CreateTodo;
