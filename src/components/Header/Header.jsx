import React from "react";

const Header = ({ categories }) => {
  return (
    <div className="contH1">
      <h1>Product List</h1>
      <div className="contH2">
        {categories.map((item) => (
          <button>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
