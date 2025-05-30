import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
import useGetRequest from "../../hooks/useGetRequest";
import profilepicimg from "../../assets/profilepicimg.png"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { data, hasError, errorMessage, isLoading, getRequest } = useGetRequest();
  const [isAuthShown,setIsAuthShown] = useState(true);
  const [hidden,setHidden] = useState(true);
  const [cookie, setCookie ,removeCookie] = useCookies();
  const navigate = useNavigate()
  
  useEffect(() => {

          getRequest('profile');
  },[]);
   const logoutHandler = ()=>{
    removeCookie('token', { path: '/', domain: 'localhost' });
    removeCookie('user_id', { path: '/', domain: 'localhost' });
    removeCookie('isAdmin', { path: '/', domain: 'localhost' });
    navigate('/login')

   }
  const profileClickHandler = ()=>{
    if(hidden){
      setHidden(false)
    }else{
      setHidden(true)
    }
  }

  useEffect(()=>{
      
     if(data.status==true){
              setCookie('user_id',data.data.id,{path:'/'})
              setCookie('is_admin',data.data.isAdmin,{path:'/'})
              setIsAuthShown(false)
            }else{
              setIsAuthShown(true)
            }
      
  },[data])

  return (
    
      <div className="nav-container">
        <nav className="navbar">
            <div className="placeholder"></div>

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
            <div className="placeholder"></div>

            <li>
              <NavLink to="/explore" className="nav-link">
                Explore
              </NavLink>
            </li>
          </ul>
         { isAuthShown===true?(
               <div className="auth-links">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-link">
              Register
            </NavLink>
            <div className="placeholder"></div>
          </div>
         ):(<>
            <div className="placeholder"></div>
            <div className="placeholder"></div>
             </>
         )}
         
               <div className="nav-profile-details">
             {isLoading|hasError? <div className="profile-name">Guest</div> : <div className="profile-name">{data.data?.name}</div>}        
             {isLoading|hasError?  <img className="profile-picture" onClick={profileClickHandler} src={profilepicimg} />:<img onClick={profileClickHandler} className="profile-picture" src={profilepicimg}/> }
             {/*src={data.data?.profilePicture} */}
        </div>
           <NavLink to="/cart" className="nav-link cart-btn">
              🛒
            </NavLink>
            <div className="placeholder"></div>
        </nav>
        
        
        { hidden?(
             <div className="setting-bar-box hidden" >
                <button onClick={logoutHandler} type="button" className="logout-btn">Logout</button>
                {cookie.is_admin?(  <NavLink to="/admin" ><button type="button" className="logout-btn">Admin</button></NavLink>):(<></>)}
       </div>
        ): (<div className="setting-bar-box" >
                <button onClick={logoutHandler} type="button" className="logout-btn">Logout</button>
                {cookie.is_admin?( <NavLink to="/admin" ><button  type="button" className="logout-btn">Admin</button></NavLink>):(<></>)}

        </div>)}

       
    
      </div>
  );
}