export default function Product(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>Price: {props.price}$</p>
      <button onClick={() => props.handleClick(props.name, props.price)}>
        Add to cart
      </button>
    </>
  );
}
