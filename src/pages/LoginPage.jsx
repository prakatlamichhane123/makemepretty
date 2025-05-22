import LoginForm from "../components/loginform/LoginForm";
import "./LoginPage.css";
import welcomescreen from "../assets/WelcomeScreen.png";

export default function LoginPage() {
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
            alt=""
            srcset=""
          />
        </div>
        <div className="login-bar-right-content">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
