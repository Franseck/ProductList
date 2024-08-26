import React from "react";
import ProductCard from "./ProductCard";

const Product = ({ products }) => {
  return (
    <div>
      {products.map((item) => (
        <ProductCard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Product;
