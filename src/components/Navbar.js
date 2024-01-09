import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-evenly text-blue-500 text-[3rem] bg-gray-300">
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/services"}>Services</Link>
    </div>
  );
};

export default Navbar;
