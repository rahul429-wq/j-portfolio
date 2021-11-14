import React from "react";
import "./css/Left.css";
import LeftCard from "./LeftCard";
import Links from "./Links";
const LeftBar = () => {
  return (
    <div className="LeftBar ">
      <LeftCard />
      <Links />
    </div>
  );
};

export default LeftBar;
