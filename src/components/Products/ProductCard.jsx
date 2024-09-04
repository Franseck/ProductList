import React from "react";
import { useState } from "react";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({ image, price, title }) => {
  const[heart, setHeart]=useState(false)
  const handleFavorite =()=>{setHeart(!heart)}
  return (
    <div>
      <div className="card">
                    <div className="price">
     <MdFavorite className={heart ? "heartRed": ""} size={30} onClick={handleFavorite} />
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
