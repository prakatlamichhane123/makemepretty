import SignupForm from "../components/signupform/SignupForm";
import "./SignupPage.css";
import welcomescreen from "../assets/WelcomeScreen.png";


export default function SignupPage() {
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
  