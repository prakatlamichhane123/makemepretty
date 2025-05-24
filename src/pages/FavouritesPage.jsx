import { useEffect, useState } from "react";
import "./FavouritesPage.css";
import FavouriteCard from "../components/favouritescard/FavouritesCard";
import axios from "axios";
import { useCookies } from "react-cookie";
import LoginCheck from "../components/logincheck/LoginCheck";

export default function FavouritesPage() {
  const [favourites, setFavourites] = useState([]);
  const [cookies] = useCookies(["token"]);
  LoginCheck()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/favourites",
          {
            headers: {
              Authorization: "Bearer " + cookies.token,
              Accept: "application/json",
            },
          }
        );
        console.log("Response:", response);
        if (response.data.status === true) {
          const data = response.data.data;
          console.log("Data:", data);
          setFavourites(data);
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
    <div className="favourite-container">
      <div className="favourite-title">
        Your Favourites ({favourites.length} Items)
      </div>
      <div className="favourites-upper-bar"></div>
      <div className="favourite-list-heading">
        <div className="favourite-products-title">Products</div>
        <div className="favourite-price-title">Price</div>
        <div className="favourite-action-title">Action</div>
      </div>
      {favourites.map((item) => (
        <FavouriteCard
          key={item.id}
          title={item.prodname}
          description={item.proddesc}
          price={item.price}
        />
      ))}

      <div className="favourites-card-lower-bar"></div>
    </div>
  );
}
