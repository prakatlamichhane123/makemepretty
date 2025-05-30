import "./Productcard.css";
import usePostRequest from "../../hooks/usePostRequest";
import img from "../../assets/prodimg.png"
// import { useState , useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


export default function Productcard(props) {
  const { data, hasError, errorMessage, isLoading, postRequest } = usePostRequest();
  const navigate = useNavigate()
    const [cookies] = useCookies();
  const cartData={
   'product_id' : props.id,
    'user_id' : cookies.user_id
  }
     
   const clickHandler =() => {
       postRequest('cart',cartData);

   }

   const seeDetailsClickHandler=()=>{
        navigate('/productdetail/'+props.id)
   }
  return (
    <>
      <div className="product-card-container">
        <div className="product-top-section">
         {props.inSale && <div className="product-insale">Sale</div> } 
          <img 
          className="product-image"
          src={img}
        />
        </div>


        <div className="product-bottom-section">
          <div className="details-display">
              <div className="product-catagory-display">{props.catagory}</div>
              <div className="product-name-display">{ props.prodName}</div>
              <div className="product-description-display">{props.prodDescription}</div>
              <div className="product-price-display">RS.{props.productPrice}</div>
          
          </div>
          <div className="product-card-utils">
          <div className="see-details"
          onClick={seeDetailsClickHandler}
          >See Details</div>
          <div className="add-to-cart-btn"
          onClick={()=>clickHandler(props.id)}
          >Add to Cart</div>
          </div>
          
        </div>

       
        
 
      </div>
    </>
  );
}

