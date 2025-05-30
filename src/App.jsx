import "./App.css";
import ExplorePage from "./pages/ExplorePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Cart from "./pages/Cart.jsx";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

 import LoginPage from "./pages/LoginPage.jsx";
 import SignupPage from "./pages/SignupPage.jsx";
 import RootLayout from "./layout/RootLayout.jsx";
 import PageNotFound from "./pages/PageNotFound.jsx";
 import AdminPage from "./pages/AdminPage.jsx";
 import AddProducts from "./pages/AddProducts.jsx";
 import ProductDetail from "./pages/ProductDetail.jsx";
 import Buy from "./pages/Buy.jsx";
import Orders from "./pages/Orders.jsx";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout  />}> 
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addproduct" element={<AddProducts />} /> 
        <Route path="/buy" element={<Buy/>} /> 
        <Route path="/orders" element={<Orders/>} /> 
        <Route path="*" element={<PageNotFound />} />
        <Route path="/productdetail/:id" element={<ProductDetail/>} /> 

      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
