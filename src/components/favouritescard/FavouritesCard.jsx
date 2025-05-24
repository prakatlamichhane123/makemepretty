import "./FavouritesCard.css";
import prodimg from "../../assets/prodimg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function FavouriteCard(props) {
          const navigate = useNavigate();

  const buyHandle= ()=>{
    const data={

    }
     const fetchData = async () => {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/orderplaced",data, {
          headers: {
            Authorization: "Bearer " + cookies.token,
            Accept: "application/json",
          },
        });
        console.log("Response:", response);
        if (response.data.status === true) {
          const data = response.data;
          console.log("Data:", data);
          navigate("/buy");
        } else {
          console.log("Fetch Failed");
          alert("Server Error Please Come Back Later")
        }
      } catch (error) {
        console.error("Error getting data:", error);
          alert("Server Error Please Come Back Later")

      }
    };
    fetchData();
  } 

  
  return (
    <>
      <div className="favourites-card-upper-bar"></div>
      <div className="favourite-card-container">
        <div className="favourite-product-details">
          <img src={prodimg} className="favourite-product-image" />
          <span className="favourite-product-texts">
            <span className="favourite-product-title">{props.title}</span>
            <span className="favourite-product-desc">{props.description}</span>
          </span>
        </div>
        <div className="favourite-product-price">Rs.{props.price}</div>
        <div className="favourite-product-actions">
          <div className="favourite-remove-btn action-btn" onClick={buyHandle}>Buy💵</div>
        </div>
      </div>
    </>
  );
}
