import CreateTodo from './CreateTodo';

function Header() {
  return (
    <header>
      <h1>
        Todo
        <img src="/typescript.svg" alt="TS Logo" width="60" />
      </h1>
      <CreateTodo />
    </header>
  );
}

export default Header;
