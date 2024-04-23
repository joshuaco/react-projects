/* eslint-disable react-hooks/exhaustive-deps */
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useBudget } from '../hooks/useBudget';
import { categories } from '../data/categories';
import type { DraftExpense } from '../types';
import ErrorMessage from './ErrorMessage';

const initialExpense: DraftExpense = {
  amount: 0,
  expenseName: '',
  category: '',
  date: new Date()
};

function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>(initialExpense);
  const [error, setError] = useState('');
  const [previousAmount, setPreviousAmount] = useState(0);
  const { state, dispatch, remainingBudget } = useBudget();

  useEffect(() => {
    if (state.expenseID) {
      const expense = state.expenses.find(
        (expense) => expense.id === state.expenseID
      );
      if (expense) {
        setExpense(expense);
        setPreviousAmount(expense.amount);
      }
    }
  }, [state.expenseID]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    const isAmountField = ['amount'].includes(name);

    setExpense({
      ...expense,
      [name]: isAmountField ? Number(value) : value
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(expense).includes('')) {
      setError('All fields are required');
      return;
    }

    if (expense.amount - previousAmount > remainingBudget) {
      setError('Este gasto excede el presupuesto disponible');
      return;
    }

    // Add or update expense
    if (state.expenseID) {
      dispatch({
        type: 'update-expense',
        payload: { expense: { id: state.expenseID, ...expense } }
      });
    } else {
      dispatch({ type: 'add-expense', payload: { expense } });
    }

    setExpense(initialExpense);
    setError('');
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend className="font-black text-center text-blue-600 text-2xl uppercase border-b-4 border-blue-600 py-2">
        {state.expenseID ? 'Update Expense' : 'New Expense'}
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Expense Name:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Netflix, Groceries, Drugs, Plumber..."
          className="bg-slate-100 p-2 outline-blue-600"
          name="expenseName"
          value={expense.expenseName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="100, 500, 1000"
          className="bg-slate-100 p-2 outline-blue-600"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="category" className="text-xl">
          Category:
        </label>
        <select
          name="category"
          id="category"
          className="bg-slate-100 p-2 outline-blue-600"
          onChange={handleChange}
          value={expense.category}
        >
          <option value="">--Select Category--</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-xl">
          Spent Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className="bg-slate-100 outline-blue-600"
          onChange={handleChange}
          value={new Date(expense.date).toISOString().split('T')[0]}
        />
      </div>
      <input
        className="bg-blue-600 cursor-pointer w-full p-2 uppercase text-lg font-bold text-white rounded"
        type="submit"
        value="Save Expense"
      />
    </form>
  );
}

export default ExpenseForm;
