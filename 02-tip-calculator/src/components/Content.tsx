import { useReducer } from 'react';
import { menuItems } from '../data/db';
import { OrderReducer, initialState } from '../reducers/order-reducer';

import MenuItem from './MenuItem';
import OrderItem from './OrderItem';
import OrderTotals from './OrderTotals';
import TipForm from './TipForm';

function Content() {
  const [state, dispatch] = useReducer(OrderReducer, initialState);

  return (
    <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
      <section>
        <h2 className="text-center text-3xl text-blue-950 font-bold py-2">
          Menu
        </h2>
        <div className="px-5 py-2 space-y-1">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} dispatch={dispatch} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-center text-3xl text-blue-950 font-bold py-2">
          Orders
        </h2>
        <div className="px-5 py-2 space-y-1">
          {state.order.length > 0 ? (
            <>
              {state.order.map((item) => (
                <OrderItem key={item.id} item={item} dispatch={dispatch} />
              ))}
              <TipForm dispatch={dispatch} tip={state.tip} />
              <OrderTotals
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="text-3xl font-bold text-center py-8 md:py-20">
              No orders
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Content;
