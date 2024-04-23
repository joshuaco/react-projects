import { formatCurrency } from '../utils';

type BudgetDisplayProps = {
  label?: string;
  value: number;
};

function BudgetDisplay({ label, value }: BudgetDisplayProps) {
  return (
    <p className="text-3xl text-blue-800 text-center font-bold">
      {label && `${label}: `}
      <span className="text-black">{formatCurrency(value)}</span>
    </p>
  );
}

export default BudgetDisplay;
