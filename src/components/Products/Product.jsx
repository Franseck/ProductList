import React from "react";
import ProductCard from "./ProductCard";
import "./product.scss";

const Product = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Product;
