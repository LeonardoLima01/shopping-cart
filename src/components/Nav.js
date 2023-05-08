import { Link } from "react-router-dom/dist";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function Nav(props) {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <div className="cart-container">
          <li>
            <Link to="/cart">
              <AiOutlineShoppingCart />
            </Link>
          </li>
          <div id="cart-size">{props.cartSize}</div>
        </div>
      </ul>
    </nav>
  );
}
