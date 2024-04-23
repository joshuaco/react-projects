import { useMemo, useState } from 'react';
import { useBudget } from '../hooks/useBudget';

function BudgetForm() {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(Number(event.target.value));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '0' || budget === 0) {
      e.target.value = '';
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: 'add-budget', payload: { budget } });
  };

  const isValidBudget = useMemo(() => budget > 0 && !isNaN(budget), [budget]);

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
          <label
            htmlFor="budget"
            className="text-4xl text-blue-800 text-center font-bold"
          >
            Set Your Budget
          </label>
          <input
            id="budget"
            name="budget"
            type="number"
            className="w-full bg-white border border-gray-200 p-2 rounded outline-blue-900"
            placeholder="Enter Your Budget"
            value={budget}
            onChange={handleChange}
            onSelect={handleSelect}
          />
        </div>
        <div className="flex">
          <input
            type="submit"
            className="bg-blue-600 hover:bg-blue-700  w-1/2 mx-auto rounded p-2 font-bold text-white cursor-pointer disabled:opacity-30 disabled:cursor-auto"
            disabled={!isValidBudget}
            value="Submit"
          />
        </div>
      </form>
    </>
  );
}

export default BudgetForm;
