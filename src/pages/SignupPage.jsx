import SignupForm from "../components/signupform/SignupForm";
import "./SignupPage.css";
import welcomescreen from "../assets/WelcomeScreen.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LoginCheck from "../components/logincheck/LoginCheck";

export default function SignupPage() {
   const navigate = useNavigate();
    // LoginCheck();
           const {isLoggedIn} = LoginCheck("signup");

       useEffect(()=>{
            console.log(isLoggedIn)
         if(isLoggedIn==true){
             navigate('/')
         }
       },[isLoggedIn]);
  return (
    <>
      <div className="login-page-container">
        <div className="login-page-left-content">
            <img className="login-page-welcome-screen" src={welcomescreen} alt="" srcset="" />
        </div>
        <div className="login-bar-right-content">
          <SignupForm/>
        </div>
      </div>
    </>
  );
}
  