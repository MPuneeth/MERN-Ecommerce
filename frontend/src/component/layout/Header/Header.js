import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import logo from "../../../images/logo.png";
import {FaUserAlt} from "react-icons/fa";
import {MdAddShoppingCart, MdSearch} from "react-icons/md";

const options = {
     burgerColor: "orange",
     burgerColorHover: "#eb4034",
    logo,
     logoWidth: "20vmax",
    //navColor1: "rgba(0,0,0,0,4)",
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
    profileIconUrl: "/login",
    //searchIconUrl: "frontend\src\component\layout\search.png", 
    profileIconColor: "rgba(35, 35, 35,0.8)",
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
    profileIconMargin: "1vmax",
    profileIcon:true,
    ProfileIconElement: FaUserAlt,
    cartIcon:true,
    CartIconElement: MdAddShoppingCart,
    searchIcon:true,
    SearchIconElement: MdSearch  
}

const Header = () => {
    return <ReactNavbar {...options} />;
  };

export default Header