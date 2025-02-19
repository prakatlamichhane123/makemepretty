import "./Navbar.css";
import  {useState}  from "react";


export default function Navbar() {
    const [heartHover,setHeartHover]=useState(false);
    
   
   
  return (
    <>
      <div className="nav-container">
        <span className="Logo">MakeMePretty 💅</span>
        <div className="route-btn-container">
          <span className="home-btn">HOME&nbsp;🏠</span>
          <span className="explore-btn"><span>EXPLORE</span><span className="explore-eye">&nbsp;👀</span></span>
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
