import React, { useState } from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Menu addToCart={addToCart} />
      <Cart items={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}
