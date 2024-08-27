import React from "react";

const ProductCard = ({ image, price, title }) => {
  return (
    <div>
      <div className="card">
        <div className="price">
         <h3>{price}</h3>
</div>
        <img src={image} alt="" />
       <div className="card-title">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
