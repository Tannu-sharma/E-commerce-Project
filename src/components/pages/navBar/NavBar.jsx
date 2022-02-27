import React from "react";
import { useNavigate } from "react-router-dom";
import './navBar.css';
import AddToCartButton from '../addToCartButton/AddToCartButton';
import LogOutButton from '../logOutButton/LogOutButton';
import Logo from '../ecommerceLogo/Logo';
import SearchBox from "../searchBox/SearchBox";

function NavBar() {
  let navigate = useNavigate();
  function handleClick(value) {
    navigate(value);
  }
  return (
    <nav className="navigation">
      <Logo />
     
      <div>
        <ul>
          <li onClick={() => handleClick("/products")}>Home</li>
        </ul>
      </div>
      <SearchBox />
      <AddToCartButton />
      <LogOutButton />
    </nav>
  );
}

export default NavBar;
