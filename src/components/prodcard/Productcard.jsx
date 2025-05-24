import "./Productcard.css";
import img from "../../assets/prodimg.png";
import axios from "axios";
import { Cookies } from "react-cookie";

export default function Productcard(props) {
  const cookies = new Cookies();
  const data={
    prodname:props.prodName,
    proddesc:props.prodDescription,
    prodimg:'img1',
    price:props.productPrice
  }
   const clickHandler = async () => {
      try {
        const response =  await axios.post("http://127.0.0.1:8000/api/favourites",data, {
          headers: {
            Authorization: "Bearer " + cookies.token,
            Accept: "application/json",
          },
        });
        console.log("Response:", response);
        if (response.status === 200) {
          const data = response.data;
          console.log("Data:", data);
        } else {
          console.log("Fetch Failed");
        }
      } catch (error) {
        console.error("Error getting data:", error);
      }
  };
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
           <span className="product-favourite-btn" onClick={clickHandler} >❤️</span>
          </span>
         
        
      </div>
    </>
  );
}
