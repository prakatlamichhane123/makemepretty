import "./SignupForm.css";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SignupForm(prop) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies([""]);
  const navigate = useNavigate();
  const handleSignup = async () => {
    const inputData = {
      name: username,
      password: password,
      password_confirmation: retypePassword,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        inputData
      );
      console.log("Response:", response);
      if (response.data.status === true) {
        setError("Signup successful");
        console.log("Signup successful");
        navigate("/login");
      } else {
        console.log("Signup failed");
        setError("Please fill all the fields correctly");
      }
    } catch (error) {
      setError("Please fill all the fields correctly");
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <div className="signup-form-container">
        <h2 className="logo">MakeMePretty 🌸</h2>
        <div className="welcome-text-container">
          <span className="welcome-first">Welcome</span>
          <span className="welcome-second">Please Create Your Account!</span>
        </div>

        <div className="login-area">
          <input
            type="text"
            className="username-box signup-input-field"
            name="username-box"
            id="username-box"
            placeholder="Username / Email / Phone"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="password-box signup-input-field"
            name="password-box"
            id="password-box"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="password-box signup-input-field"
            name="retype-password-box"
            id="retypr-password-box"
            placeholder="Confirm Password"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
          />
          <div className="error-message">{error && <span>{error}</span>}</div>

          <button
            type="submit"
            className="signup-btn"
            name="signup-btn"
            id="signup-btn"
            onClick={handleSignup}
          >
            Signup
          </button>
        </div>

        <div className="other-utils">
          <span className="util-login-text">
            Already Have An Account ?{" "}
            <a href="#" className="util-login-btn">
              Login!
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
