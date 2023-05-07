import Product from "./Product";

export default function Store(props) {
  return (
    <>
      <Product name="GTX 1080" price="99" handleClick={props.handleClick} />
      <Product name="RTX 2080" price="149" handleClick={props.handleClick} />
      <Product name="RTX 3080" price="199" handleClick={props.handleClick} />
      <Product name="RTX 4080" price="299" handleClick={props.handleClick} />
      <Product name="SSD NVME" price="49" handleClick={props.handleClick} />
      <Product name="1TB RAM" price="99" handleClick={props.handleClick} />
    </>
  );
}
