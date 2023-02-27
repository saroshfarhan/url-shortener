import React from "react";
import logo from "../assets/logo.svg";
function Footer() {
  return (
    <div className="bg-neutral_very_dark_violet py-8">
      <div className="container flex items-start justify-between px-3 text-white lg:mx-auto lg:px-[6rem]">
        <img src={logo} alt="shortly logo" className="invert" />
        <h1>Footer</h1>
      </div>
    </div>
  );
}

export default Footer;
