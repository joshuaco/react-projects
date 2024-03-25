import { menuItems } from "../data/db";
import useOrder from "../hooks/useOrder";
import MenuItem from "./MenuItem";
import OrderItem from "./OrderItem";
import OrderTotals from "./OrderTotals";
import TipForm from "./TipForm";

function Content() {
  const { order, tip, setTip, addItem, deleteItem, sendOrder } = useOrder();

  return (
    <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">
      <section>
        <h2 className="text-center text-3xl text-blue-950 font-bold py-2">
          Menu
        </h2>
        <div className="px-5 py-2 space-y-1">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} addItem={addItem} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-center text-3xl text-blue-950 font-bold py-2">
          Orders
        </h2>
        <div className="px-5 py-2 space-y-1">
          {order.length > 0 ? (
            order.map((item) => (
              <OrderItem key={item.id} item={item} deleteItem={deleteItem} />
            ))
          ) : (
            <p className="text-3xl font-bold text-center py-8 md:py-20">
              No orders
            </p>
          )}

          {order.length > 0 && (
            <>
              <TipForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} sendOrder={sendOrder} />
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default Content;
