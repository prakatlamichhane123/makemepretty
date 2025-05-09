import "./Productcard.css";
import img from "../../assets/prodimg.png";
import Button from "../buttons/Button";

export default function Productcard(props) {
  return (
    <>
      <div className="product-card-container">
        <img
          className="product-image"
          src={img}
          alt={props.imgAlt ? props.imgAlt : "Product Image"}
        />

        <div className="product-details">
          <div className="product-name">{props.prodName}</div>
          <div className="product-description">{props.prodDescription}</div>
          </div>  
          
          <span className="product-pricing-details">
            <span className="product-price">Rs. {props.productPrice}</span>
            <span className="product-discount">Rs.{props.productDiscount}</span>
          </span>
          
          <span className="product-interact">
            <span className="product-favourite-btn">❤️</span>
            <span className="add-cart-btn">🛒</span>
          </span>
         
        
      </div>
    </>
  );
}
