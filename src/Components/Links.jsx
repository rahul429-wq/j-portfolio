import React from "react";
import "./css/Left.css";
const Links = () => {
  // const numbers = ["About", "My Skills", "Work", "Blog", "Contact"];
  // const listItems = numbers.map((number) => <li>{number}</li>);
  // const secs = ["sec-1", "sec-2", "sec-3", "sec-4", "sec-5"];
  // const SecsItems = secs.map((number) => <li>{number}</li>);
  return (
    <div className="Links">
      <ul>
        <li>
          <a href="#sec-1">About</a>
        </li>
        <li>
          <a href="#sec-2">My Skill</a>
        </li>
        <li>
          <a href="#sec-3">Work</a>
        </li>
        <li>
          <a href="#sec-4">Blog</a>
        </li>
        <li>
          <a href="#sec-5">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
