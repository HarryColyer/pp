import React, { useState } from "react";
import { Link } from "react-router-dom";
import { List, CaretDown } from "react-bootstrap-icons";

import logo from "../images/pp-ele-logo.png";
import "../App";
import img from "../images/the-current.png";
import imgText from "../images/text.png";

function NavigationBar() {
  const [clicked, setClick] = useState(false);
  const [isToggled, setToggle] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isMouseOn, setIsMouseOn] = useState(false);

  const handleNavToggle = () => {
    setClick(!clicked);
  };

  const handleSubNavToggle = () => {
    setToggle(!isToggled);
  };

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsShown(false);
    }, 1000);
  };

  return (
    <nav className="nav shadow-sm">
      <div className="nav-brand">
        <Link to="/" className="d-flex flex-row align-items-center">
          <img src={logo} alt="" className="logo" />
          <div className="nav-logo-2 sm-none">
            <img src={imgText} alt="" />
            <img src={img} alt="" />
          </div>
        </Link>
      </div>
      <div className={clicked ? "nav-links toggled" : "nav-links"}>
        <Link onClick={() => setClick(false)} to="/" className="custom-hover">
          Home
        </Link>
        <Link onClick={() => setClick(false)} to="/about" className="custom-hover">
          About
        </Link>
        <Link onClick={() => setClick(false)} to="/services" className="custom-hover">
          Services
        </Link>
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleSubNavToggle}
          className="custom-hover"
        >
          EV Charging <CaretDown />
        </Link>
          <div
            onMouseEnter={() => setIsMouseOn(true)}
            onMouseLeave={() => setIsMouseOn(false)}
            className={`sub-links ${isToggled ? "toggled" : ""} ${
              isMouseOn ? "hovered" : ""
            } ${isShown ? "hovered" : ""}`}
          >
            <Link onClick={() => setClick(false)} to="/evcharging">Installation</Link>
            <Link onClick={() => setClick(false)} to="/olev">OLEV Grant</Link>
          </div>
        <Link onClick={() => setClick(false)} to="/landlords" className="custom-hover">
          Landlords
        </Link>
          <Link  to="/contact" onClick={() => setClick(false)}><button className="my-btn">Contact Us</button></Link>

      </div>
      <List onClick={handleNavToggle} className="nav-toggle" />
    </nav>
  );
}
export default NavigationBar;
