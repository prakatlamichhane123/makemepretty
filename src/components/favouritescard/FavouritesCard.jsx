import "./FavouritesCard.css";
import prodimg from "../../assets/prodimg.png";
export default function FavouriteCard() {
  return (
    <>
      <div className="favourites-card-upper-bar"></div>
      <div className="favourite-card-container">
        <div className="favourite-product-details">
          <img src={prodimg} className="favourite-product-image" />
          <span className="favourite-product-texts">
            <span className="favourite-product-title">
              Roc Multi Correxion? Hydrate & Plump Night Capsules
            </span>
            <span className="favourite-product-desc">
              Hydrate & Plump Night Capsules
            </span>
          </span>
        </div>
        <div className="favourite-product-price">Rs.1750</div>
        <div className="favourite-product-actions">
          <div className="favourite-addtocart-btn">Add to Cart</div>
          <div className="favourite-remove-btn">Remove</div>
        </div>
      </div>
    </>
  );
}
