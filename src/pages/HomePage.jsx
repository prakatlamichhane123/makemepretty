import "./HomePage.css";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import Productcard from "../components/prodcard/Productcard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products", {
          headers: {
            Authorization: "Bearer " + cookies.token,
            Accept: "application/json",
          },
        });
        console.log("Response:", response);
        if (response.status === 200) {
          const data = response.data;
          console.log("Data:", data);
          setProducts(data);
        } else {
          console.log("Fetch Failed");
        }
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };
    fetchData();
  }, []);

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
          {products.map((product) => (
            <Productcard
              key={product.id}
              prodName={product.prodname}
              prodDescription={product.proddesc}
              productPrice={product.finalprice}
              productDiscount={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
