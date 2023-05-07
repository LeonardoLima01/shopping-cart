export default function Product(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <img className="product-image" src={props.image} />
      <p>
        <span className="bold">Price: </span> {props.price}$
      </p>
      {props.button && (
        <button onClick={() => props.handleClick(props.name, props.price)}>
          Add to cart
        </button>
      )}
    </>
  );
}
