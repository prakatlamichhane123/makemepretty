import "./AdminPage.css"
import { NavLink } from "react-router-dom"

export default function AdminPage(){
    return(
        <>
        <div className="admin-page-container">
              <NavLink to="/" >
              
            <div className="home-page-btn">Home</div>
              </NavLink>
            <div className="welcome-admin-text">Welcome, Admin</div>
            <div className="admin-buttons">
                <div className="one">
            <div className="add-product-btn admn-btns">
                <NavLink to="/addproduct" >
                <span className="text">

                Add Products
                </span>
                </NavLink>
                </div>
               <NavLink to="/Orders" >
            <div className="view-orders-btn admn-btns">
                <span className="text">
                            View Orders
                </span>
                </div>
               
               </NavLink>

                </div>
                <div className="two">
            <div className="view-users-btn admn-btns">
                <span className="text">
                        View Users
                </span>
                </div>
           

                </div>
            
            </div>
        </div>
        </>
    )
}