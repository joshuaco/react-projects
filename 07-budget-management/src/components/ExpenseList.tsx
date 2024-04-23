/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from 'react';
import { useBudget } from '../hooks/useBudget';
import ExpenseDetails from './ExpenseDetails';

function ExpenseList() {
  const { state } = useBudget();

  const filteredExpenses = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;

  const isEmpty = useMemo(
    () => filteredExpenses.length === 0,
    [state.expenses]
  );

  return (
    <div className="mt-2 space-y-5">
      {isEmpty ? (
        <p className="text-center text-lg text-gray-500">
          No expenses yet. Add an expense to get started.
        </p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseDetails key={expense.id} expense={expense} />
        ))
      )}
    </div>
  );
}

export default ExpenseList;
