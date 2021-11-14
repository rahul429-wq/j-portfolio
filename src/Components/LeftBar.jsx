import React from "react";
import "./css/Left.css";
import LeftCard from "./LeftCard";
import Links from "./Links";
const LeftBar = () => {
  return (
    <div className="LeftBar ">
      <LeftCard />
      <Links />
      <ul
        className="abcd"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        <li>
          <a href="#">
            <i class="fa fa-wifi"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
