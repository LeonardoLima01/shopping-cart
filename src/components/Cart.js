import Product from "./Product";
import GTX1080 from "./../images/gtx1080.png";
import RTX2080 from "./../images/rtx2080.png";
import RTX3080 from "./../images/rtx3080.png";
import RTX4080 from "./../images/rtx4080.png";
import SSD from "./../images/ssd.png";
import RAM from "./../images/ram.png";

export default function Cart(props) {
  const { cartItems } = props;
  let total = 0;

  const updateTotal = (price, quant) => {
    return (total += price * quant);
  };

  return (
    <div id="cart-container">
      <h1>Cart Items:</h1>
      <ul id="cart-items">
        {Object.keys(cartItems).map((i) => {
          const imageName = i.split(" ").join("");
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

          updateTotal(cartItems[i].price, cartItems[i].quantity);

          return (
            <li key={i}>
              <Product name={i} price={cartItems[i].price} image={imageSrc} />
              <span className="bold"> Quantity: {cartItems[i].quantity}</span>
            </li>
          );
        })}
      </ul>
      <h2>Total: ${total}</h2>
      <button onClick={() => window.location.reload()}>Check out</button>
    </div>
  );
}
