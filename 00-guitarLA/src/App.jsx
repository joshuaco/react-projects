import { useEffect, useState } from "react";
import { db } from "./data/db";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [data] = useState(db);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) ?? [];
  });

  useEffect(() => {
    saveToLocalStorage();
  }, [cart]);

  function addToCart(item) {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= 5) return;
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  const saveToLocalStorage = () => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }
    localStorage.removeItem("cart");
  };

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Content data={data} addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default App;
