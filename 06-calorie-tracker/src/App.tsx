import Form from './components/Form';

function App() {
  return (
    <>
      <header className="py-6">
        <nav className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-2xl text-center font-bold mx-2 text-amber-600">
            Calorie Tracker
          </h1>
        </nav>
      </header>

      <section className="bg-amber-600 py-12 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>
    </>
  );
}

export default App;
