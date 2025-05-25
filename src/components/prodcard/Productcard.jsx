import "./Productcard.css";
import img from "../../assets/prodimg.png";
import { Cookies } from "react-cookie";
import usePostRequest from "../../hooks/usePostRequest";
import { useEffect } from "react";
export default function Productcard(props) {
  const cookies = new Cookies();
  const { data, hasError, errorMessage, isLoading, postRequest } = usePostRequest();

  const data1={
    prodname:props.prodName,
    proddesc:props.prodDescription,
    prodimg:props.imgSrc,
    price:props.productPrice
  }
   const clickHandler =() => {
     postRequest('favourite',data1);
   }

  return (
    <>
      <div className="product-card-container">
        <div className="product-top-section">
          <div className="product-insale">Sale</div>
          <img
          className="product-image"
          src={img}
        />
        </div>


        <div className="product-bottom-section">
          <div className="details-display">
              <div className="product-catagory-display">Skincare</div>
              <div className="product-name-display">{props.prodName}</div>
              <div className="product-description-display">{props.prodDescription}</div>
              <div className="product-price-display">RS.{props.productPrice}</div>
          
          </div>
          <div className="add-to-cart-btn">Add to Cart</div>
        </div>

       
        
 
      </div>
    </>
  );
}

//<span className="product-favourite-btn" onClick={clickHandler} >❤️</span>


//  <div className="product-bottom-section">

          
//         <div className="product-details">
//           <div className="product-name">{props.prodName}</div>
//           <div className="product-description">{props.prodDescription}</div>
//           </div>  
          
//           <span className="product-pricing-details">
//             <span className="product-price">Rs. {props.productPrice}</span>
//             <span className="product-discount">Rs.{props.productDiscount}</span>
//           </span>
          
//           <span className="product-interact">
//           </span>
         
       

//         </div>