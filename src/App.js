import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import SignUp from "./components/pages/signUp/SignUp";
import LogIn from "./components/pages/logIn/LogIn";
import Home from "./components/pages/home/Home";
import NavBar from "./components/pages/navBar/NavBar";
import Footer from "./components/pages/footer/Footer";
import AddToCartButton from "./components/pages/addToCartButton/AddToCartButton";
import Products from "./components/pages/products/Products";
import Filters from "./components/pages/filters/Filters";
import LogOutButton from "./components/pages/logOutButton/LogOutButton";
import AuthRoute from "./components/pages/authRoute/AuthRoute";
import NoAuthRoute from "./components/pages/noAuthRoute/NoAuthRoute";
import ProductDetailPage from "./components/pages/productsDetailPage/ProductDetailPage";

import { useSelector, useDispatch } from "react-redux";
import CartPage from "./components/pages/cartPage/CartPage";
import Loader from "./components/pages/loader/Loader";
import ContactUs from "./components/pages/contactUs/ContactUs";
import AboutUs from './components/pages/aboutUs/AboutUs';

// export const history = createBrowserHistory();
function App() {
  const isAuthenticate = useSelector((state) => state.user.isAuthenticate);
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="appContainer">
          {isAuthenticate && 
              <NavBar />
         }
        {isAuthenticate &&
            <Filters/>
             } 
          <div className="mainContent">
            {isAuthenticate &&
               <Loader />
             }
            <Routes>
              {/* <Route path="/signUp" element={<SignUp />} /> */}
              <Route path="/" element={<NoAuthRoute><LogIn /></NoAuthRoute>} />
              <Route exact path="/products" element={<AuthRoute><Products /></AuthRoute>} />
              <Route path="/home" element={<Home />} />
              <Route path="/addToCartPage" element={<CartPage />} />
              <Route exact path="/:productId" element={<ProductDetailPage />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              {/* <Route path="/logOutButton" element={<LogOutButton />} /> */}
            </Routes>
            </div>
         
          {isAuthenticate && 
              <Footer />
          }
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
