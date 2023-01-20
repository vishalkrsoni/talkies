import React, { useState, useEffect } from "react";
import "./Nav.css";
import AppLogo from "../../LogoImages/mylogo.png";
import AppAvatar from "../../LogoImages/avatar1.jpg";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={AppLogo} alt="" />
        <img className="nav__avatar" src={AppAvatar} alt="" />
      </div>
    </div>
  );
};

export default Nav;
