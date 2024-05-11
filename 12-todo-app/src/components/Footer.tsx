import { Todos } from '../types';

type FooterProps = {
  todos: Todos[];
};

function Footer({ todos }: FooterProps) {
  const todosLeft = todos.filter((todo) => !todo.completed);

  return (
    <footer className="footer">
      <div className="todo-count">
        <strong>{todosLeft.length} item left</strong>
      </div>
      <div className="filters"></div>
      <div className="clear-completed"></div>
    </footer>
  );
}

export default Footer;
