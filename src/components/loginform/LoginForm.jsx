import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function LoginForm(prop) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies([""]);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const inputData = {
      name: username,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        inputData
      );
      console.log("Response:", response);
      if (response.data.status === true) {
        setCookie("token", response.data.token, { path: "/" });
        setError("Login successful");
        console.log("Login successful");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        console.log("Login failed");
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Invalid username or password");
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <div className="login-form-container">
        <h2 className="logo">MakeMePretty 🌸</h2>
        <div className="welcome-text-container">
          <span className="welcome-first">Welcome Back</span>
          <span className="welcome-second">Please Login To Your Account</span>
        </div>

        <div className="login-area">
          <input
            type="text"
            className="username-box login-input-field"
            name="username-box"
            id="username-box"
            placeholder="Username/Phone"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="password-box login-input-field"
            name="password-box"
            id="password-box"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <a href="#" className="forgot-password">
            Forgot password?
          </a>
          <div className="error-message">{error && <span>{error}</span>}</div>

          <input
            type="button"
            value="Login"
            className="login-btn"
            name="login-btn"
            id="login-btn"
            onClick={handleLogin}
          />
        </div>

        <div className="other-utils">
          <span className="util-signup-text">
            Dont Have Account ?{" "}
            <a href="#" className="util-signup-btn">
              Signup!
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
