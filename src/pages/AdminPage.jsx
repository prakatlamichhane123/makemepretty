import FavouriteCard from "../components/favouritescard/FavouritesCard";
import "./AdminPage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import LoginCheck from "../components/logincheck/LoginCheck";
import { Navigate } from "react-router-dom";

export default function AdminPage() {
  const [products, setProducts] = useState([]);
  const [cookies] = useCookies(["token"]);
  LoginCheck()
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
  <div className="admin-container">
    <div className="admin-left-panel">
      <div className="mmp-admin-text">MMP-ADMIN</div>
      <div className="admin-btns">
        <div className="admin-product-btn admin-button">Products</div>
        <div className="admin-add-product-btn admin-button" onClick={() => Navigate("/addproduct")}>Add Products</div>
        <div className="admin-orders-btn admin-button">Orders</div>
      </div>
    </div>
    <div className="admin-right-panel">
      <div className="right-top-panel">
        <div className="admin-product-list">
          Product List
        </div>
      </div>
      <div className="right-bottom-panel">
        {
          products.map((product) => (
            <FavouriteCard
              key={product.id}
              title={product.prodname}
              description={product.proddesc}
              price={product.price}
            />
          ))
        }
      </div>
    </div>
  </div>
  );
}
