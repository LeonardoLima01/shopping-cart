import "./style.css";
import "animate.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [cartSize, setCartSize] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleClick = (name, price, operation) => {
    setCartSize((prevSize) =>
      operation === "+" ? prevSize + 1 : prevSize - 1
    );
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[name]) {
        operation === "+"
          ? (updatedItems[name].quantity += 1)
          : (updatedItems[name].quantity -= 1); // If item already exists, increment the quantity
      } else {
        updatedItems[name] = { quantity: 1, price }; // If item doesn't exist, initialize with quantity and price
      }
      return updatedItems;
    });
  };
  return (
    <>
      <Nav cartSize={cartSize} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store handleClick={handleClick} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleClick={handleClick}
              setCartItems={setCartItems}
              setCartSize={setCartSize}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
