import React, { useEffect,  } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function LoginCheck() {
    const [cookies] = useCookies(["token"]);
    //const [isLoggedIn, setIsLoggedIn] = useState(false);
     const navigate = useNavigate();
     
    
    useEffect(() => {
      if(!cookies.token) {
        navigate("/login");
      }
    }, []);

  
}