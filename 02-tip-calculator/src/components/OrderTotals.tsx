import { useMemo } from 'react';
import { OrderItem } from '../types';
import { formatCurrency } from '../utils';
import { OrderActions } from '../reducers/order-reducer';

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: React.Dispatch<OrderActions>;
};

function OrderTotals({ order, tip, dispatch }: OrderTotalsProps) {
  const calculateSubTotal = useMemo(
    () => order.reduce((total, item) => total + item.price * item.quantity, 0),
    [order]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculateTip = useMemo(() => calculateSubTotal * tip, [tip, order]);

  return (
    <section className="px-5 py-2">
      <div className="space-y-2">
        <p className="font-semibold text-lg">
          Subtotal: {formatCurrency(calculateSubTotal)}
        </p>

        <p className="font-semibold text-lg">
          Propina: {formatCurrency(calculateTip)}
        </p>

        <p className="font-bold text-2xl">
          Total: {formatCurrency(calculateSubTotal + calculateTip)}
        </p>
      </div>

      <button
        className="bg-blue-950 hover:bg-blue-900 p-3 text-slate-100 font-bold text-lg w-full rounded mt-10 uppercase"
        onClick={() => dispatch({ type: 'place-order' })}
      >
        Send Order
      </button>
    </section>
  );
}

export default OrderTotals;
