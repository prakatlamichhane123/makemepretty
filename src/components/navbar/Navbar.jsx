import { Link } from "react-router-dom";
import "./Navbar.css";
import  {useState}  from "react";


export default function Navbar() {
    const [heartHover,setHeartHover]=useState(false);
    
   
   
  return (
    <>
      <div className="nav-container">
        <span className="Logo">MakeMePretty 💅</span>
        <div className="route-btn-container">
         <Link className='link-router' to={'/'}><span className="home-btn">HOME&nbsp;🏠</span></Link>
         <Link className='link-router' to={'/explore'}>  <span className="explore-btn"><span>EXPLORE</span></span></Link>
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
