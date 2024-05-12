import { useAutoAnimate } from '@formkit/auto-animate/react';
import type { Todos } from '../types';
import Todo from './Todo';

type TodosProps = {
  todos: Todos[];
};

function Todos({ todos }: TodosProps) {
  const [parent] = useAutoAnimate();

  return (
    <ul className="todo-list" ref={parent}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default Todos;
