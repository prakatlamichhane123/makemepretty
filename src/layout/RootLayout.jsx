import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer/footer";
export default function RootLayout(){
    const location = useLocation();
    
    

    if((location.pathname).toLowerCase() == '/login' || (location.pathname).toLowerCase() == '/signup'){
        return (<Outlet/>) 
    }else{
        return (
            <>
            <Navbar/>
            <Outlet/>     
            <Footer/> 
            </>
        )
    }

           
        
}