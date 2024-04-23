import { useEffect, useMemo } from 'react';

import Form from './components/Form';
import ActivityList from './components/ActivityList';
import CalorieTracker from './components/CalorieTracker';
import { useActivity } from './hooks/useActivity';

function App() {
  const { state, dispatch } = useActivity();

  useEffect(() => {
    if (state.activities.length > 0) {
      localStorage.setItem('activities', JSON.stringify(state.activities));
    } else {
      localStorage.removeItem('activities');
    }
  }, [state.activities]);

  const canRestart = useMemo(() => state.activities.length, [state.activities]);

  return (
    <>
      <header className="py-6">
        <nav className="max-w-4xl mx-auto flex justify-between items-center px-5 lg:px-0">
          <h1 className="text-2xl text-center font-bold mx-2 text-amber-600">
            Calorie Tracker
          </h1>

          <button
            className="bg-amber-600 text-white px-4 py-2 rounded font-bold disabled:opacity-40"
            disabled={!canRestart}
            onClick={() => dispatch({ type: 'restart-app' })}
          >
            Restart App
          </button>
        </nav>
      </header>

      <section className="bg-amber-600 py-12 px-5">
        <div className="max-w-4xl mx-auto">
          <Form />
        </div>
      </section>

      <section className="bg-slate-800 py-10">
        <div className="max-w-4xl mx-auto px-5">
          <CalorieTracker />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList />
      </section>
    </>
  );
}

export default App;
