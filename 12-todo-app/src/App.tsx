import { useTodoStore } from './store';
import Todos from './components/Todos';
import Footer from './components/Footer';
import Header from './components/Header';
import { useEffect } from 'react';

function App() {
  const { initTodos, filteredTodos } = useTodoStore();

  useEffect(() => {
    initTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const todos = filteredTodos();

  return (
    <>
      <div className="todoapp">
        <Header />
        <main className="main">
          <Todos todos={todos} />
        </main>
        <Footer />
      </div>
      {todos.length > 0 && <p className="info">Double click to edit a todo</p>}
    </>
  );
}

export default App;
