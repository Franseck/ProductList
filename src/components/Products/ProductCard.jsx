import React from "react";

const ProductCard = ({ image, price, title }) => {
  return (
    <div>
      <div className="card">
        <img width="200px" src={image} alt="" />
        <h3>{price}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProductCard;
