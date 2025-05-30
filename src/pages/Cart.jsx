
// import { useEffect, useState } from "react";
// import "./Cart.css";
// import useGetRequest from "../hooks/useGetRequest";
// import usePostRequest from "../hooks/usePostRequest";
// import CartCards from "../components/cartcards/CartCards";
// import { useCookies } from "react-cookie";

// export default function Cart() {




//   const {
//     data: cartdata,
//     isLoading: cartIsLoading,
//     getRequest: cartGetRequest,
//   } = useGetRequest();

//   const {
//     data: productData,
//     isLoading: productIsLoading,
//     getRequest: productGetRequest,
//   } = useGetRequest();

//   const {
//     data: postData,
//     isLoading: postIsLoading,
//     postRequest: postGetRequest
//   } = usePostRequest();

//   const [totalPrice, setTotalPrice] = useState(0);
//   const [orderData, setOrderData] = useState({
//         'user_id':"",
//         'total_amount':"0",
//         'status':"pending",
//         [
//         ]
//   });
// 1
//   const [cookie] = useCookies()

//   const [isOrderSuccess,setIsOrderSuccess] = useState(false);

//   useEffect(() => {
//     cartGetRequest("cart");
//     productGetRequest("products");
//   }, []);

//   useEffect(() => {
//     if (!cartdata?.data || !productData?.data) return;

//     let total = 0;

//     cartdata.data.forEach((cartItem) => {
//       const product = productData.data.find((p) => p.id === cartItem.product_id);
//       if (product) {
//         total += product.price;
//       }
//     });
   
//     setTotalPrice(total);
//   }, [cartdata, productData]);

//    const buyHandler = ()=>{
//             setIsOrderSuccess(false)

//             setOrderData({
//                 'user_id':cookie.user_id,
//                 'total_amount':totalPrice,
//                  'status':"pending",
//             })
//             postGetRequest('order',orderData)

//             if(postData?.data?.status == true){
//                 setIsOrderSuccess(true)
//             }else{
//                 setIsOrderSuccess(false)
//             }

//     }

//   if (cartIsLoading || productIsLoading) {
//     return <div className="loadingggg">Loading...</div>;
//   }

//   return (
    
    
    
//     <div className="cart-container">
//       {cartdata?.data?.map((cartItem, index) => {
//         const product = productData?.data?.find((p) => p.id === cartItem.product_id);
//         return (
//           product && (
//             <CartCards
//               key={index}
//               producttitle={product.prodname}
//               productdecription={product.proddesc}
//               price={product.price}
//             />
//           )
//         );
//       })}

//       <div className="cart-buy-container">
//         <div className="c-b-container">
//             <div className="cart-total">Total Price: Rs. {totalPrice}</div>
            
//             <div className="enjoy">Enjoy Your Free Delivery</div>
//             <div className="add-to-cart-btn" onClick={buyHandler}>Buy</div>

//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import "./Cart.css";
import useGetRequest from "../hooks/useGetRequest";
import usePostRequest from "../hooks/usePostRequest";
import CartCards from "../components/cartcards/CartCards";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { data: cartdata, isLoading: cartIsLoading, getRequest: cartGetRequest } = useGetRequest();
  const { data: productData, isLoading: productIsLoading, getRequest: productGetRequest } = useGetRequest();
  const {  data: orderData , isLoading: isOrderLoading,postRequest } = usePostRequest(); 

  const [totalPrice, setTotalPrice] = useState(0);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [cookie] = useCookies(["user_id"]);
  const navigate = useNavigate();
   const [address,setAddress] = useState("");
   const [phone,setPhone] = useState("");

   const addressHandler=(e)=>{
              setAddress(e.target.value)
            }
      const phoneHandler=(e)=>{
              setPhone(e.target.value)
            }

  useEffect(() => {
    cartGetRequest("cart");
    productGetRequest("products");
  }, []);

  useEffect(() => {
    if (!cartdata?.data || !productData?.data) return;

    let total = 0;

    cartdata.data.forEach((cartItem) => {
      const product = productData.data.find((p) => p.id === cartItem.product_id);
      if (product) {
        total += product.price;
      }
    });

    setTotalPrice(total);
  }, [cartdata, productData]);

  const buyHandler =  () => {
     setIsOrderSuccess(false);

    if (!cookie.user_id || totalPrice === 0) {
      alert("User not logged in or cart is empty.");
      return;
    }

    const payload = {
      user_id: cookie.user_id,
      total_amount: totalPrice,
      status: "pending",
      address: address,
      number : phone,
      products: [1,2]
    };

    try {
      postRequest("order", payload);
     if(orderData?.status==true){
      alert("Your Order Is Placed")
      navigate("/buy");
     }
    } catch (error) {
      console.error("Order error:", error);
      alert("Something went wrong while placing the order.");
    }
  };

  if (cartIsLoading || productIsLoading) {
    return <div className="loadingggg">Loading...</div>;
  }

  return (
    <div className="cart-container">
      {cartdata?.data?.map((cartItem, index) => {
        const product = productData?.data?.find((p) => p.id === cartItem.product_id);

        
        return (
          product && (
            <CartCards
              key={index}
              producttitle={product.prodname}
              productdecription={product.proddesc}
              price={product.price}
              quantity={cartItem.quantity}
            />
          )
        );
      })}

      <div className="cart-buy-container">
        <div className="c-b-container">
          <div className="cart-total">Total Price: Rs. {totalPrice}</div>
          <div className="enjoy">Enjoy Your Free Delivery</div>
          <div className="enjoy"><input type="text" value={address} placeholder="Your Address" onChange={addressHandler}/></div>
          <div className="enjoy"><input type="text" value={phone} placeholder="Your PhoneNumber" onChange={phoneHandler}/></div>
          
          <div className="enjoy"><select name="method" id="method" defaultChecked="--Methods--">
            <option value="home-delivery">HomeDelivery</option>
            <option value="pick-up-point">Pick-up-Point</option>
            </select></div>
          <div className="add-to-cart-btn-buy" onClick={buyHandler}>Buy</div>
          {isOrderSuccess && <div className="order-success">✅ Order Placed Successfully!</div>}
        </div>
        
      </div>  
    </div>
  );
}
