import React from "react";
import "./css/Left.css";
const Links = () => {
  const numbers = ["About", "My Skills", "Work", "Blog", "Contact"];
  const listItems = numbers.map((number) => <li>{number}</li>);
  return (
    <div className="Links">
      <ul>
        <li>{listItems}</li>
      </ul>
    </div>
  );
};

export default Links;
