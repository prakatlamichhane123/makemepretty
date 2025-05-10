import "./ExplorePage.css";
import Productcard from "../components/prodcard/Productcard";



export default function ExplorePage() {
  return (
    <>
      <div className="search-bar">
        <input className="search-box" placeholder="Looking For Somthing ? 👀" />
        <span className="search-emoji">🔍</span>
      </div>

      <div className="yml-container">
        <span className="yml-text">You May Like 🌹</span>
        <div className="yml-product-list">
          <Productcard
            prodName="Roc Multi Correxion?"
            prodDescription="Hydrate & Plump Night Capsules"
            productPrice="1,750"
            productDiscount="3,500"
          />
          <Productcard
            prodName="Roc Multi Correxion?"
            prodDescription="Hydrate & Plump Night Capsules"
            productPrice="1,750"
            productDiscount="3,500"
          />
          <Productcard
            prodName="Roc Multi Correxion?"
            prodDescription="Hydrate & Plump Night Capsules"
            productPrice="1,750"
            productDiscount="3,500"
          />
          <Productcard
            prodName="Roc Multi Correxion?"
            prodDescription="Hydrate & Plump Night Capsules"
            productPrice="1,750"
            productDiscount="3,500"
          />
        </div>
      </div>
      <div className="trending-container">
        <span className="trending-text">Current Trends 👗 </span>
        <div className="trending-product-list">
          <Productcard
            prodName="Roc Multi Correxion?"
            prodDescription="Hydrate & Plump Night Capsules"
            productPrice="1,750"
            productDiscount="3,500"
          />
          <Productcard
            prodName="Roc Multi Correxion?"
            prodDescription="Hydrate & Plump Night Capsules"
            productPrice="1,750"
            productDiscount="3,500"
          />
          <Productcard
            prodName="Roc Multi Correxion?"
            prodDescription="Hydrate & Plump Night Capsules"
            productPrice="1,750"
            productDiscount="3,500"
          />
          <Productcard
            prodName="Roc Multi Correxion?"
            prodDescription="Hydrate & Plump Night Capsules"
            productPrice="1,750"
            productDiscount="3,500"
          />
        </div>
      </div>
    </>
  );
}
