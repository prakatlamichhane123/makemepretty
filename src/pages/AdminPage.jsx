import "./AdminPage.css"

export default function AdminPage(){
    return(
        <>
        <div className="admin-page-container">
            <div className="home-page-btn">Home</div>
            <div className="welcome-admin-text">Welcome, Admin</div>
            <div className="admin-buttons">
                <div className="one">
            <div className="add-product-btn admn-btns">
                <span className="text">

                Add Products
                </span>
                
                </div>
            <div className="view-orders-btn admn-btns">
                <span className="text">
                            View Orders
                </span>
                </div>

                </div>
                <div className="two">
            <div className="view-users-btn admn-btns">
                <span className="text">
                        View Users
                </span>
                </div>
            <div className="admin-settings-btn admn-btns">
                <span className="text">

                Settings
                </span>
                </div>

                </div>
            
            </div>
        </div>
        </>
    )
}