import React from "react";
import "../Header/navbar.scss"

const Header = ({ categories }) => {
  return (
    <div className="contH1">
      <h1>Product List</h1>
      <div className="contH2">
        {categories.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
