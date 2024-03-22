import { useState, useEffect } from "react";

export const useCart = () => {
  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
  });

  useEffect(() => {
    saveToLocalStorage();
  }, [cart]);

  const saveToLocalStorage = () => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }
    localStorage.removeItem("cart");
  };

  const addToCart = (item) => {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS) return;
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return { ...item, quantity: item.quantity + 1 }; // quantity++ doesn't work
      }
      return item;
    });

    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCart(updatedCart);
  };

  const cleanCart = () => {
    setCart([]);
  };

  return {
    cart,
    addToCart,
    deleteItem,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
  };
};
