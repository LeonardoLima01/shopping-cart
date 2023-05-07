import "./style.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";

function App() {
  const [cartSize, setCartSize] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (name, price) => {
    setCartSize((prevSize) => prevSize + 1);
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[name]) {
        console.log("CALL!");
        updatedItems[name].quantity += 0.5; // If item already exists, increment the quantity
      } else {
        updatedItems[name] = { quantity: 1, price }; // If item doesn't exist, initialize with quantity and price
      }
      return updatedItems;
    });
  };

  useEffect(() => {
    console.log("ITEMS: ", cartItems);
  }, [cartItems]);

  return (
    <>
      <Nav cartSize={cartSize} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store handleClick={handleClick} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </>
  );
}

export default App;
