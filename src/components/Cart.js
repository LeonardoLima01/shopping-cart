export default function Cart(props) {
  const { cartItems } = props;
  let total = 0;

  const updateTotal = (price, quant) => {
    return (total += price * quant);
  };

  return (
    <>
      <h1>Cart Items:</h1>
      <ul>
        {Object.keys(cartItems).map(
          (i) => (
            updateTotal(cartItems[i].price, cartItems[i].quantity),
            (
              <li key={i}>
                {i} - Quantity: {cartItems[i].quantity} - Price:{" "}
                {cartItems[i].price}$
              </li>
            )
          )
        )}
      </ul>
      <h2>Total: {total}</h2>
    </>
  );
}
