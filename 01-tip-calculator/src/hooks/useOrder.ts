import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]); // Generic
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const orderExists = order.findIndex(
      (orderItem) => orderItem.id === item.id
    );

    if (orderExists >= 0) {
      const updatedOrder = [...order];

      updatedOrder[orderExists].quantity++;
      setOrder(updatedOrder);

      return;
    }

    const newItem = { ...item, quantity: 1 };
    setOrder([...order, newItem]);
  };

  const deleteItem = (itemID: MenuItem["id"]) => {
    const updatedOrders = order.filter((item) => item.id !== itemID);

    setOrder(updatedOrders);
  };

  const sendOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    deleteItem,
    sendOrder,
  };
}
