import React, { useState } from "react";
import logo from "../../assets/images/urban-hive.png";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button";
import { BsShop, BsCart2 } from "react-icons/bs";
import { BiHome } from "react-icons/bi";

function Navbar() {
  const [activeIcon, setActiveIcon] = useState("");

  const location = useLocation();
  const isHomeActive = location.pathname === "/";
  const isShopActive = location.pathname === "/shop";
  const isCartActive = location.pathname === "/cart";

  const handleClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <nav className=" bg-[#222831] font-semibold text-[#EEEEEE] flex items-center justify-between px-16 py-4 sticky top-0 z-10">
      <div className="logo">
        <Link to="/" title="Urban Hive">
          <img src={logo} alt="" className="h-10" />
        </Link>
      </div>
      <div className="nav-links flex justify-center items-center gap-12">
        <Link
          to="/"
          className="nav-home"
          title="Home"
          onClick={() => handleClick("home")}>
          <BiHome
            className={`text-[#c3c9c9] text-2xl transform duration-150 ${
              isHomeActive || activeIcon === "home"
                ? "text-white scale-125"
                : "hover:scale-125"
            }`}
          />
        </Link>
        <Link
          to="/shop"
          className="nav-shop"
          title="Shop"
          onClick={() => handleClick("shop")}>
          <BsShop
            className={`text-[#c3c9c9] text-xl transform duration-300 ${
              isShopActive || activeIcon === "shop"
                ? "text-white scale-125"
                : "hover:scale-125"
            }`}
          />
        </Link>
      </div>
      <div className="cart-login flex justify-center items-center gap-12">
        <Link
          to="/cart"
          className="nav-cart"
          title="Cart"
          onClick={() => handleClick("cart")}>
          <BsCart2
            className={`text-[#c3c9c9] text-xl transform duration-300 ${
              isCartActive || activeIcon === "cart"
                ? "text-white scale-125"
                : "hover:scale-125"
            }`}
          />
        </Link>
        <Link to="/login">
          <Button Button_Name="Login" class_button="login-btn" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
