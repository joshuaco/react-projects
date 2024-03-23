import { useState } from "react";
import { useCart } from "./hooks/useCart";
import { db } from "./data/db";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [data] = useState(db);
  const {
    cart,
    addToCart,
    deleteItem,
    increaseQuantity,
    decreaseQuantity,
    cleanCart,
  } = useCart();

  return (
    <>
      <Header
        cart={cart}
        deleteItem={deleteItem}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        cleanCart={cleanCart}
      />
      <Content data={data} addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default App;
