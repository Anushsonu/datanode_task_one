import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Home = ({ name }) => {
  // const [myName, setName] = useState("Anush");
  return (
    <div className="text-6xl border border-black py-40">
      Home page created by <span>{name}</span>
    </div>
  );
};

export default Home;
