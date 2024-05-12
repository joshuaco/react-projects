import { useTodoStore } from '../store';
import Filters from './Filters';

function Footer() {
  const todoList = useTodoStore((state) => state.todos);
  const removeCompleted = useTodoStore((state) => state.removeCompleted);
  const todosLeft = todoList.filter((todo) => !todo.completed);
  const todosCompleted = todoList.filter((todo) => todo.completed);

  return (
    <footer className="footer">
      <div className="todo-count">
        <strong>{todosLeft.length} item left</strong>
      </div>

      <Filters />

      <div>
        {todosCompleted.length > 0 && (
          <button className="clear-completed" onClick={removeCompleted}>
            Clear completed
          </button>
        )}
      </div>
    </footer>
  );
}

export default Footer;
