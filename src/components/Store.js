import Product from "./Product";
import gtx1080 from "./../images/gtx1080.png";
import rtx2080 from "./../images/rtx2080.png";
import rtx3080 from "./../images/rtx3080.png";
import rtx4080 from "./../images/rtx4080.png";
import ssd from "./../images/ssd.png";
import ram from "./../images/ram.png";

export default function Store(props) {
  return (
    <div id="products-grid">
      <div className="product-container animate__animated animate__fadeInLeft">
        <Product
          name="GTX 1080"
          image={gtx1080}
          price="149"
          handleClick={props.handleClick}
          button={true}
        />
      </div>
      <div className="product-container animate__animated animate__fadeInLeft">
        <Product
          name="RTX 2080"
          image={rtx2080}
          price="199"
          handleClick={props.handleClick}
          button={true}
        />
      </div>
      <div className="product-container animate__animated animate__fadeInLeft">
        <Product
          name="RTX 3080"
          image={rtx3080}
          price="249"
          handleClick={props.handleClick}
          button={true}
        />
      </div>
      <div className="product-container animate__animated animate__fadeInLeft">
        <Product
          name="RTX 4080"
          image={rtx4080}
          price="349"
          handleClick={props.handleClick}
          button={true}
        />
      </div>
      <div className="product-container animate__animated animate__fadeInLeft">
        <Product
          name="SSD"
          image={ssd}
          price="99"
          handleClick={props.handleClick}
          button={true}
        />
      </div>
      <div className="product-container animate__animated animate__fadeInLeft">
        <Product
          name="RAM"
          image={ram}
          price="29"
          handleClick={props.handleClick}
          button={true}
        />
      </div>
    </div>
  );
}
