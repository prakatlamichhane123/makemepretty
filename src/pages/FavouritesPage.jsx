import { useEffect, useState } from "react";
import "./FavouritesPage.css";
import FavouriteCard from "../components/favouritescard/FavouritesCard";

export default function FavouritesPage() {
  const [totalFavourites, setTotalFavourites] = useState();
  useEffect(() => {
    setTotalFavourites(7);
  }, []);
  return (
    <div className="favourite-container">
      <div className="favourite-title">
        Your Favourites ({totalFavourites} Items)
      </div>
      <div className="favourites-upper-bar"></div>
      <div className="favourite-list-heading">
        <div className="favourite-products-title">Products</div>
        <div className="favourite-price-title">Price</div>
        <div className="favourite-action-title">Action</div>
      </div>
      <FavouriteCard />
      <FavouriteCard />
      <FavouriteCard />
      <FavouriteCard />
      <FavouriteCard />
      <FavouriteCard />
      <FavouriteCard />
      <div className="favourites-card-lower-bar"></div>
    </div>
  );
}
