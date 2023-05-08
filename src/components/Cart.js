import Product from "./Product";
import GTX1080 from "./../images/gtx1080.png";
import RTX2080 from "./../images/rtx2080.png";
import RTX3080 from "./../images/rtx3080.png";
import RTX4080 from "./../images/rtx4080.png";
import SSD from "./../images/ssd.png";
import RAM from "./../images/ram.png";
import { useEffect } from "react";
import "animate.css";

export default function Cart(props) {
  const { cartItems } = props;
  let total = 0;

  const updateTotal = () => {
    total = Object.keys(cartItems).reduce(
      (acc, currentItem) =>
        acc + cartItems[currentItem].price * cartItems[currentItem].quantity,
      0
    );
  };

  const handleDelete = (itemName, quantity) => {
    const updatedCartItems = { ...cartItems };
    delete updatedCartItems[itemName];
    props.setCartItems(updatedCartItems);
    props.setCartSize((prevSize) => prevSize - quantity);
  };

  useEffect(() => {
    const updatedCartItems = {};
    Object.keys(cartItems).forEach((itemName) => {
      if (cartItems[itemName].quantity >= 1) {
        updatedCartItems[itemName] = cartItems[itemName];
      }
    });
    props.setCartItems(updatedCartItems);
  }, []); // Empty dependency array to run the effect only once

  return (
    <div id="cart-container">
      <ul id="cart-items">
        {Object.keys(cartItems).map((itemName) => {
          const item = cartItems[itemName];
          const imageName = itemName.split(" ").join("");
          let imageSrc;
          switch (imageName) {
            case "GTX1080":
              imageSrc = GTX1080;
              break;
            case "RTX2080":
              imageSrc = RTX2080;
              break;
            case "RTX3080":
              imageSrc = RTX3080;
              break;
            case "RTX4080":
              imageSrc = RTX4080;
              break;
            case "SSD":
              imageSrc = SSD;
              break;
            case "RAM":
              imageSrc = RAM;
              break;
            default:
              imageSrc = null;
          }

          return (
            <li
              key={itemName}
              className="animate__animated animate__fadeInLeft"
            >
              <Product name={itemName} price={item.price} image={imageSrc} />
              <div className="quantity-container">
                <div className="operation-container">
                  <button
                    className="minus-button"
                    onClick={() => props.handleClick(itemName, item.price, "-")}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <div className="item-quantity">{item.quantity}</div>
                  <button
                    className="plus-button"
                    onClick={() => props.handleClick(itemName, item.price, "+")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(itemName, item.quantity)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {updateTotal()}
      {total > 0 && <h2>Total: ${total}</h2>}
      {total > 0 && (
        <button onClick={() => window.location.reload()}>Check out</button>
      )}
      {total < 1 && (
        <h1 className="animate__animated animate__fadeInUp">Empty cart!</h1>
      )}
    </div>
  );
}
