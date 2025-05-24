import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

export default function Navbar() {
  const [heartHover, setHeartHover] = useState(false);
  const cashamt = 1000;
  const [userData, setUserData] = useState();
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/profile", {
          headers: {
            Authorization: "Bearer " + cookies.token,
            Accept: "application/json",
          },
        });
        console.log("Response:", response);
        if (response.data.status === true) {
          const data = response.data.data;
          setUserData(data);
          console.log("User Data:", userData);  
          console.log("Data:", data);

        } else {
          console.log("Fetch Failed");
        }
      } catch (error) {
        console.error("Error getting data:", error);

      }}
      fetchData();
  }, []);

  return (
    <>
      <div className="nav-container">
        <h2 className="Logo">MakeMePretty 🌸</h2>
        <div className="route-btn-container">
          <NavLink className="link-router" to={"/"}>
            <span className="home-btn">HOME&nbsp;🏠</span>
          </NavLink>
          <NavLink className="link-router" to={"/explore"}>
            <span className="explore-btn">
              <span>EXPLORE</span>
            </span>
          </NavLink>
        </div>
        <div className="extras-container">
          <span className="cash">
            <span className="UserName">{userData?.name}</span>
            🎟️<span className="cash-amt">{userData?.usercash}</span>
          </span>
          <NavLink className="link-router" to={"/favourite"}>
            <span
              className="favourite-btn"
              onMouseOver={() => setHeartHover(!heartHover)}
              onMouseOut={() => setHeartHover(false)}
            >
              {heartHover ? "💜" : "❤️"}
            </span>
          </NavLink>
          <NavLink className="link-router" to={"/cart"}>
          </NavLink>
        </div>
      </div>
    </>
  );
}
