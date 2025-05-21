import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [heartHover, setHeartHover] = useState(false);
  const cashamt = 1000;

  return (
    <>
      <div className="nav-container">
        <h2 className="Logo">MakeMePretty 🌸</h2>
        <div className="route-btn-container">
          <NavLink className="link-router" to={"/"}>
            <span className="home-btn">HOME&nbsp;🏠</span>
          </NavLink>
          <NavLink className="link-router" to={"/explore"}>
            <span className="explore-btn">
              <span>EXPLORE</span>
            </span>
          </NavLink>
        </div>
        <div className="extras-container">
          <span className="cash">
            🎟️<span className="cash-amt">{cashamt}</span>
          </span>
          <NavLink className="link-router" to={"/favourite"}>
            <span
              className="favourite-btn"
              onMouseOver={() => setHeartHover(!heartHover)}
              onMouseOut={() => setHeartHover(false)}
            >
              {heartHover ? "💜" : "❤️"}
            </span>
          </NavLink>
          <NavLink className="link-router" to={"/cart"}>
            <span className="cart-btn">🛒</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}
