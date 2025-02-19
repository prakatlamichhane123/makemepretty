import "./HomePage.css";
import Navbar from "../components/navbar/Navbar";
import Productcard from "../components/prodcard/Productcard";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <span className="search">Search</span>
        <div className="yml-container">
          <span className="yml-text">You May Like 🌹</span>
          <div className="yml-product-list">
            <Productcard imgAlt="Perfume" />
            <Productcard imgAlt="Perfume" />
          </div>
        </div>
        <div className="trending-container">
          <span className="trending-text">Current Trends 👗 </span>
          <div className="trending-product-list">
            <Productcard imgAlt="Perfume" />
            <Productcard imgAlt="Perfume" />
          </div>
        </div>
      </div>
    </>
  );
}
