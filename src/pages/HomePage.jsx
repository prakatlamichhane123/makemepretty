import "./HomePage.css";
import Navbar from "../components/navbar/Navbar";
import Productcard from "../components/prodcard/Productcard";
import { products } from "../../public/beautyprop.json";
import { products2 } from "../../public/biglist.json";

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="search-bar">
          <input className="search-box" placeholder="Looking For Somthing ? 👀"/>
          <span className="search-emoji">🔍</span>
        </div>

        <div className="yml-container">
          <span className="yml-text">You May Like 🌹</span>
          <div className="yml-product-list">
            {products.map((prods) => (
              <Productcard
                key={prods.id}
                imgAlt="Perfume"
                prodname={prods.name}
              />
            ))}
          </div>
        </div>
        <div className="trending-container">
          <span className="trending-text">Current Trends 👗 </span>
          <div className="trending-product-list">
            {products.map((prods) => (
              <Productcard
                key={prods.id}
                imgAlt="Perfume"
                prodname={prods.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
