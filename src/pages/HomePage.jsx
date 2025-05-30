import Productcard from '../components/prodcard/Productcard';
import './HomePage.css';
import useGetRequest from '../hooks/useGetRequest'; 
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
export default function HomePage() {

      const {data , hasError,errorMessage,isLoading,getRequest } = useGetRequest()
      useEffect(()=>{
         getRequest('products') 
      },[]);
     
  return (
    
    <div className="home-page-container">

      <div className="home-page-welcome-container">
          <div className="discover-your">Discover Your</div>
          <div className="natural-beauty">Natural Beauty</div>
          <div className="description-text">Premium beauty and cosmetic products curated for the modern woman.</div>
          <div className="description-text">Enhance your natural radiance with our exclusive collection.</div>
          <div className="home-page-welcome-buttons">
               <NavLink to="/explore" ><button className="welcome-explore-button">Explore</button></NavLink>
              <NavLink to="/contactus" ><button className="welcome-contactus-button">Contact Us</button></NavLink>
          </div>
          <div className="home-catagorys-display">
            <div className="home-catagory-text">
                Shop By Catagory
            </div>
            <div className="catagories-container">
            <div className="home-catagory-skincare ctg">
              <div className="outer-circle">
                <div className="inner-circle"></div>
                </div>
                <div className="cata-text">Skincare</div>
            </div>
            <div className="home-catagory-makeup ctg">
              <div className="outer-circle">
                <div className="inner-circle"></div>
                </div>
                <div className="cata-text">Makeup</div>
            </div>
            <div className="home-catagory-fragnance ctg">
              <div className="outer-circle">
                <div className="inner-circle"></div>
                </div>
                <div className="cata-text">Fragnance</div>
            </div>
            <div className="home-catagory-hair ctg">
              <div className="outer-circle">
                <div className="inner-circle"></div>
                </div>
                <div className="cata-text">Hair</div>
            </div>
           
            </div>
          </div>
          <div className="products-container">
            
            

            {
            
            
            isLoading?<div className="loading">Loading......</div>:data.data.map((product,i) => ( <Productcard key={i} id={product.id} prodImg={"prodimg.png"} prodName={product.prodname} prodDescription={product.proddesc} productPrice={product.price} catagory={product.catagory}/>))

}
             
          </div>


      </div>

    </div>
  );
}