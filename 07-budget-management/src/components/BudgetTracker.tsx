import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useBudget } from '../hooks/useBudget';
import BudgetDisplay from './BudgetDisplay';

import 'react-circular-progressbar/dist/styles.css';

function BudgetTracker() {
  const { state, dispatch, spentBudget, remainingBudget } = useBudget();

  const percentageBudget = Math.round((spentBudget / state.budget) * 100);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center mx-auto w-1/2 md:w-4/5">
        {/* Smaller size  */}
        <CircularProgressbar
          value={percentageBudget}
          styles={buildStyles({
            pathColor: percentageBudget >= 80 ? '#dc2626' : '#3b82f6',
            textColor: percentageBudget >= 80 ? '#dc2626' : '#3b82f6',
            textSize: 14
          })}
          text={`${percentageBudget}% Spent`}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          className="bg-pink-600 hover:bg-pink-700 text-white p-2 
          font-bold uppercase rounded w-1/2 md:w-full"
          onClick={() => dispatch({ type: 'reset-budget' })}
        >
          Reset App
        </button>

        <BudgetDisplay label="Budget" value={state.budget} />
        <BudgetDisplay label="Available" value={remainingBudget} />
        <BudgetDisplay label="Spent" value={spentBudget} />
      </div>
    </section>
  );
}

export default BudgetTracker;
