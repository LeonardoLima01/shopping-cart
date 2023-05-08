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

  const updateTotal = () => {
    total = Object.keys(cartItems).reduce(
      (acc, currentItem) =>
        acc + cartItems[currentItem].price * cartItems[currentItem].quantity,
      0
    );
  };

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
            <li key={itemName}>
              <Product name={itemName} price={item.price} image={imageSrc} />
              <div className="quantity-container">
                <button
                  onClick={() => props.handleClick(itemName, item.price, "-")}
                >
                  -
                </button>
                {item.quantity}
                <button
                  onClick={() => props.handleClick(itemName, item.price, "+")}
                >
                  +
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {updateTotal()}
      {console.log("TOTAL: ", total)}
      {total > 0 && <h2>Total: ${total}</h2>}
      {total > 0 && (
        <button onClick={() => window.location.reload()}>Check out</button>
      )}
      {total < 1 && <h1>Empty cart!</h1>}
    </div>
  );
}
