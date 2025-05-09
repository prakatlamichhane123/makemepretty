import "./HomePage.css";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import Productcard from "../components/prodcard/Productcard";
import { products } from "../../public/beautyprop.json";
import { products2 } from "../../public/biglist.json";

export default function HomePage() {
  return (
    <>
      <div className="hero">

          <div className="home-top-image-container">
            <img className="top-image img1" src={img1} alt="" srcset="" />
            <img className="top-image img2" src={img2} alt="" srcset="" />
            <img className="top-image img3" src={img3} alt="" srcset="" />
          </div>

        <div className="info-text">Mega Discount Sale</div>
        <div className="home-product-list-container">

        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>
        <Productcard prodName="Roc Multi Correxion?" prodDescription="Hydrate & Plump Night Capsules" productPrice ="1,750" productDiscount ="3,500"/>

     
        
        </div>














        {/* <div className="search-bar">
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
        </div> */}
      </div>
    </>
  );
}
