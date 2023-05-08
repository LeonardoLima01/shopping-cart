export default function Product(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <div className="img-container">
        <img className="product-image" alt="product img" src={props.image} />
      </div>
      <p>
        <span className="bold">Price: </span> ${props.price}
      </p>
      {props.button && (
        <button onClick={() => props.handleClick(props.name, props.price, "+")}>
          Add to cart
        </button>
      )}
    </>
  );
}
