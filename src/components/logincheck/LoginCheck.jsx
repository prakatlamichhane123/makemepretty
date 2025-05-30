import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function LoginCheck(to) {
    const [cookies] = useCookies(["token"]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
     const navigate = useNavigate();
     
    
    useEffect(() => {
      if(!cookies.token) {
        setIsLoggedIn(false)
        navigate("/"+to);
      }else{
        setIsLoggedIn(true)
      }
    }, [cookies]);

  return {isLoggedIn}
  
}