import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { MdAccountCircle, MdSearch } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import logo from "../../../images/logo.png";

const options = {
  burgerColor: "#eb4034",
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  navColor1: "white",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIcon:true, // this is added
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  ProfileIconElement: MdAccountCircle, // this is added
  searchIcon:true,  // this is added
  searchIconColor: "rgba(35, 35, 35,0.8)",
  SearchIconElement:MdSearch,  // this is added
  cartIcon:true,  // this is added
  cartIconColor: "rgba(35, 35, 35,0.8)",
  CartIconElement:FiShoppingBag,  // this is added
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return (
    <ReactNavbar 
      {...options} 
      
    />
  );
};

export default Header;
