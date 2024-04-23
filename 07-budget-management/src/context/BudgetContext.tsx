import { Dispatch, ReactNode, createContext, useMemo, useReducer } from 'react';
import {
  BudgetActions,
  BudgetState,
  budgetReducer,
  initialState
} from '../reducers/budget-reducer';

type BudgetContextProps = {
  state: BudgetState;
  dispatch: Dispatch<BudgetActions>;
  spentBudget: number;
  remainingBudget: number;
};

type BudgetProviderProps = {
  children: ReactNode;
};

export const BudgetContext = createContext<BudgetContextProps>(null!);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const spentBudget = useMemo(() => {
    return state.expenses.reduce((total, expense) => expense.amount + total, 0);
  }, [state.expenses]);

  const remainingBudget = state.budget - spentBudget;

  return (
    <BudgetContext.Provider
      value={{ state, dispatch, spentBudget, remainingBudget }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
