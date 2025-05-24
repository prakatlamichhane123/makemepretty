import "./AddProducts.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import LoginCheck from "../components/logincheck/LoginCheck";

export default function AdminPage() {
  const [cookies] = useCookies(["token"]);
  LoginCheck()
  const [error,setError]= useState("")
  const [product, setProduct] = useState({
    prodname: '',
    proddesc: '',
    prodimg: '',
    price: '',
    discount: '',
    finalprice: '',
    inStock: false
  });

  useEffect(() => {
    const price = parseFloat(product.price) || 0;
    const discount = parseFloat(product.discount) || 0;
    const final = price - (price * discount / 100);
    setProduct(prev => ({
      ...prev,
      finalprice: final.toFixed(2)
    }));
  }, [product.price, product.discount]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = () => {
    const fetchData = async () => {

    const data = {
      prodname: product.prodname,
      proddesc: product.proddesc,
      prodimg: product.prodimg,
      price: product.price,
      discount: product.discount,
      finalprice: parseInt(product.finalprice),
      inStock: product.inStock
    };
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/products", data,{
          headers: {
            Authorization: "Bearer " + cookies.token,
            Accept: "application/json",
          },
        });
        console.log("Response:", response);
        if (response.data.status === true) {
          const data = response.data;
          console.log("Data:", data);
          setError("Success adding Product")

        } else {
          console.log("Fetch Failed");
          setError("Error adding Product")
        }
      } catch (error) {
        console.error("Error getting data:", error);
          setError("Error adding Product")

      }
    };

    fetchData();

  };
  
   


  return (
  <div className="admin-container">
    <div className="admin-left-panel">
      <div className="mmp-admin-text">MMP-ADMIN</div>
      <div className="admin-btns">
        <div className="admin-product-btn admin-button">Products</div>
        <div className="admin-add-product-btn admin-button">Add Products</div>
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
           <div className="form-container">
      <div className="form-group">
        <label>Product Name:</label>
        <input name="prodname" value={product.prodname} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea name="proddesc" value={product.proddesc} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Image URL:</label>
        <input name="prodimg" value={product.prodimg} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Price ($):</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Discount (%):</label>
        <input type="number" name="discount" value={product.discount} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Final Price ($):</label>
        <input name="finalprice" value={product.finalprice} readOnly />
      </div>
      <div className="form-group checkbox-group">
        <label>
          <input
            type="checkbox"
            name="inStock"
            checked={product.inStock}
            onChange={handleChange}
          />
          In Stock
        </label>
      </div>
      <div className="form-group">
        <button onClick={handleSubmit}>Submit Product</button>
      </div>
      <div>{error}</div>
    </div>
      </div>
    </div>
  </div>
  );
}
