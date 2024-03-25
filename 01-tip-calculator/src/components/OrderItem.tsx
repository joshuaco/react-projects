import type { MenuItem, OrderItem } from "../types";
import { formatCurrency } from "../utils";

type OrderItemProps = {
  item: OrderItem;
  deleteItem: (itemID: MenuItem["id"]) => void;
};

function OrderItem({ item, deleteItem }: OrderItemProps) {
  return (
    <article className="border-2 border-gray-300 rounded py-3 px-5 flex justify-between items-center">
      <div className="w-4/5">
        <p className="text-lg">
          {item.name} - {formatCurrency(item.price)}
        </p>
        <p className="font-bold">
          Cantidad: {item.quantity} - Total:{" "}
          {formatCurrency(item.quantity * item.price)}
        </p>
      </div>

      <button onClick={() => deleteItem(item.id)}>
        <img src="/svg/cross_mark_color.svg" alt="cross symbol" />
      </button>
    </article>
  );
}

export default OrderItem;
