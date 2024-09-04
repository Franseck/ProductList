import React from "react";
import "../Header/navbar.scss"

const Header = ({ categories, handleCategories }) => {
  return (
    <div className="contH1">
      <h1>Product List</h1>
      <div className="contH2">
      {categories.map((item)=>(
          <button onClick={handleCategories} >{item.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
