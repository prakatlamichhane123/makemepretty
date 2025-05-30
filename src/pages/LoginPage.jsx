import LoginForm from "../components/loginform/LoginForm";
import "./LoginPage.css";
import welcomescreen from "../assets/WelcomeScreen.png";
import LoginCheck from "../components/logincheck/LoginCheck";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
     const navigate = useNavigate();
    // LoginCheck();
           const {isLoggedIn} = LoginCheck("login");
     
 
       useEffect(()=>{
            console.log(isLoggedIn)
         if(isLoggedIn==true){
             navigate('/')
         }
       },[isLoggedIn]);
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/products")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setProducts(data);
  //     });
  // }, []);
  return (
    <>
      <div className="login-page-container">
        <div className="login-page-left-content">
          <img
            className="login-page-welcome-screen"
            src={welcomescreen}
          
          />
        </div>
        <div className="login-bar-right-content">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
