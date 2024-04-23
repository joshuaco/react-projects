import { useEffect, useMemo } from 'react';
import { useBudget } from './hooks/useBudget';
import BudgetForm from './components/BudgetForm';
import ExpenseList from './components/ExpenseList';
import ExpenseModal from './components/ExpenseModal';
import BudgetTracker from './components/BudgetTracker';
import FilterByCategory from './components/FilterByCategory';

function App() {
  const { state } = useBudget();
  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString());
    localStorage.setItem('expenses', JSON.stringify(state.expenses));

    if (state.expenses.length === 0 || state.budget === 0) {
      localStorage.removeItem('expenses');
    }
  }, [state]);

  return (
    <>
      <header className="bg-blue-800 py-8 max-h-72">
        <h1 className="text-5xl font-bold text-white text-center">
          Expense Tracker
        </h1>
      </header>

      <section className="max-w-3xl mx-auto bg-white shadow rounded mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </section>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-5">
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  );
}

export default App;
