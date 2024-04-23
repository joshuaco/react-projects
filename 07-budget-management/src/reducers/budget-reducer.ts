import { v4 as uuidv4 } from 'uuid';
import type { Category, DraftExpense, Expense } from '../types';

export type BudgetActions =
  | { type: 'add-budget'; payload: { budget: number } }
  | { type: 'toggle-modal'; payload: { modal: boolean } }
  | { type: 'add-expense'; payload: { expense: DraftExpense } }
  | { type: 'remove-expense'; payload: { id: Expense['id'] } }
  | { type: 'get-expense-by-id'; payload: { id: Expense['id'] } }
  | { type: 'update-expense'; payload: { expense: Expense } }
  | { type: 'reset-budget' }
  | { type: 'filter-by-category'; payload: { id: Category['id'] } };

export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[];
  expenseID: Expense['id'];
  currentCategory: Category['id'];
};

const initialBudget = (): number => {
  const localStorage = window.localStorage.getItem('budget');
  return localStorage ? +localStorage : 0;
};

const initialExpenses = (): Expense[] => {
  const localStorage = window.localStorage.getItem('expenses');
  return localStorage ? JSON.parse(localStorage) : [];
};

export const initialState: BudgetState = {
  budget: initialBudget(),
  modal: false,
  expenses: initialExpenses(),
  expenseID: '',
  currentCategory: ''
};

const createExpense = (DraftExpense: DraftExpense): Expense => {
  return {
    ...DraftExpense,
    id: uuidv4()
  };
};

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {
  if (action.type === 'add-budget') {
    return {
      ...state,
      budget: action.payload.budget
    };
  }

  if (action.type === 'toggle-modal') {
    return {
      ...state,
      modal: action.payload.modal,
      expenseID: ''
    };
  }

  if (action.type === 'add-expense') {
    const expense = createExpense(action.payload.expense);
    return {
      ...state,
      expenses: [...state.expenses, expense],
      modal: false
    };
  }

  if (action.type === 'remove-expense') {
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      )
    };
  }

  if (action.type === 'get-expense-by-id') {
    return {
      ...state,
      expenseID: action.payload.id,
      modal: true
    };
  }

  if (action.type === 'update-expense') {
    return {
      ...state,
      expenses: state.expenses.map((expense) => {
        if (expense.id === action.payload.expense.id) {
          return action.payload.expense;
        }
        return expense;
      }),
      modal: false
    };
  }

  if (action.type === 'reset-budget') {
    return {
      ...state,
      budget: 0,
      expenses: []
    };
  }

  if (action.type === 'filter-by-category') {
    return {
      ...state,
      currentCategory: action.payload.id
    };
  }

  return state;
};
