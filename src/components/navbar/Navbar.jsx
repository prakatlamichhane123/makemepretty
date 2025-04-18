import { NavLink } from "react-router-dom";
import "./Navbar.css";
import  {useState}  from "react";


export default function Navbar() {
    const [heartHover,setHeartHover]=useState(false);
    
   
  return (
    <>
      <div className="nav-container">
        <span className="Logo">MakeMePretty 💅</span>
        <div className="route-btn-container">
         <NavLink className='link-router' to={'/'}><span className="home-btn">HOME&nbsp;🏠</span></NavLink>
         <NavLink className='link-router' to={'/explore'}>  <span className="explore-btn"><span>EXPLORE</span></span></NavLink>
        </div>
        <div className="extras-container">
            <span className="favourite-btn" onMouseOver={()=>setHeartHover(!heartHover)} onMouseOut={()=>setHeartHover(false)} >
                {heartHover?"💜":"❤️"}
            </span>
            <span className="cart-btn">🛒</span>
        </div>
        
      </div>
    
    </>

  );
  
}
