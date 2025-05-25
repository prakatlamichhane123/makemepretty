import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useEffect } from "react";
import useGetRequest from "../../hooks/useGetRequest";

export default function Navbar() {
  const { data, hasError, errorMessage, isLoading, getRequest } = useGetRequest();

  useEffect(() => {
          getRequest('profile');
  },[]);

  return (
    
      <div className="nav-container">
        <nav className="navbar">
          <div className="logo">
            <NavLink to="/" className="mmp-logo">
              <span className="mmp-logo-icon">🌸</span> <span className="mmp-logo-text">MakeMePretty</span>
            </NavLink>
          </div>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/explore" className="nav-link">
                Explore
              </NavLink>
            </li>
          </ul>
          <div className="auth-links">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-link">
              Register
            </NavLink>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
          </div>
               <div className="nav-profile-details">
             {isLoading? <div className="profile-name">Loading...</div> : <div className="profile-name">{data.data?.name}</div>}        
            <img className="profile-picture" src={data.data?.profilePicture} />
        </div>
        </nav>
    
      </div>
  );
}