import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import "./RootLayout.css"
export default function RootLayout(){

    const location = useLocation();


    if((location.pathname).toLowerCase() == '/login' || (location.pathname).toLowerCase() == '/signup' || (location.pathname).toLowerCase() == '/admin'){
        return (<Outlet/>) 
    }else{
        return (
            <>
            <Navbar />
            <Outlet />
            <div className="foooter">
            <Footer /> 
            </div>
            </>
        )
    }
        
}