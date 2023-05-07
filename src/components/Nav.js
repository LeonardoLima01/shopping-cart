import { Link } from "react-router-dom/dist";

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
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <div id="cart-size">{props.cartSize}</div>
      </ul>
    </nav>
  );
}
