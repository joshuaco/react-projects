import { useMemo } from 'react';
import { useBudget } from '../hooks/useBudget';
import { formatDate } from '../utils';
import { categories } from '../data/categories';
import type { Expense } from '../types';
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import BudgetDisplay from './BudgetDisplay';

type ExpenseDetailsProps = {
  expense: Expense;
};

function ExpenseDetails({ expense }: ExpenseDetailsProps) {
  const categoryInfo = useMemo(
    () => categories.filter((category) => category.id === expense.category)[0],
    [expense]
  );

  const { dispatch } = useBudget();

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction
        onClick={() =>
          dispatch({ type: 'get-expense-by-id', payload: { id: expense.id } })
        }
      >
        <PencilSquareIcon className="h-10 w-10">Edit</PencilSquareIcon>
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() =>
          dispatch({ type: 'remove-expense', payload: { id: expense.id } })
        }
      >
        <TrashIcon className="h-10 w-10" />
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <div className="shadow">
      <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions()} // Izquierda / Left
          trailingActions={trailingActions()} // Derecha / Right
        >
          <article
            className="bg-white shadow p-5 w-full border-b border-gray-200 
      rounded flex gap-5 items-center"
          >
            <div>
              <img
                src={`icono_${categoryInfo.icon}.png`}
                alt={categoryInfo.name}
                className="w-20 h-20"
              />
            </div>

            <div className="flex-1">
              <p className="text-sm font-bold uppercase text-slate-500 ">
                {categoryInfo.name}
              </p>
              <p className="text-lg">{expense.expenseName}</p>
              <p className="text-slate-600 text-sm">
                {formatDate(expense.date.toString())}
              </p>
            </div>

            <BudgetDisplay value={expense.amount} />
          </article>
        </SwipeableListItem>
      </SwipeableList>
    </div>
  );
}

export default ExpenseDetails;
