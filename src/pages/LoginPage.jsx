import LoginForm from "../components/loginform/LoginForm";
import "./LoginPage.css";
import welcomescreen from "../assets/WelcomeScreen.png";


export default function LoginPage() {
  return (
    <>
      <div className="login-page-container">
        <div className="login-page-left-content">
            <img className="login-page-welcome-screen" src={welcomescreen} alt="" srcset="" />
        </div>
        <div className="login-bar-right-content">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
