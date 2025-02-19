import "./Productcard.css";
import Button from "../buttons/Button";

export default function Productcard(props) {
  const imgadd =
    "https://www.cleanbeauty.com/cdn/shop/files/Shot5_CR_SparklingSugar100_Shot5_CR_SparklingSugar100_0192_square.jpg?v=1708102212&width=1500";
  return (
    <>
      <div className="product-card-container">
        <img
          className="product-image"
          src={imgadd}
          alt={props.imgAlt ? props.imgAlt : "Product Image"}
        />
        <span className="product-name">Perfume</span>
        <div className="product-extra-container">
          <Button>Buy</Button>
          <span className="product-favourite-btn">❤️</span>
          <span className="add-cart-btn">🛒</span>
        </div>
      </div>
    </>
  );
}
