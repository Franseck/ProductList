import React from "react";
import ProductCard from "./ProductCard";
import {products , categories} from "../../helper/data"
import Header from "../Header/Header"
import {useState} from "react"
import "./product.scss";
import { Form } from "react-bootstrap";


const Product = () => {
const [search, setSearch] = useState("")
const [filter,setFilter]=useState ("all")
  const handleSearch = (e)=>{
    setSearch(e.target.value.toLowerCase())
  }
  const handleCategories = (e)=>{
    setFilter(e.target.textContent.toLowerCase())
  }
  const filtered= products.filter((item)=>(filter === "all" || item.category.toLowerCase() === filter  ) && item.title.toLowerCase().includes(search))
  return (
    <div>

    <Form.Control
    className="area"
        placeholder="Search Product..."
        type="search"
              onChange={handleSearch}
      />
    <Header handleCategories={handleCategories} categories={categories} />


    <div className="product-list">
    {filtered.map((product)=>(
            <ProductCard {...product} key={product.id} />
          ))
            
          }

      
    </div>
    </div>
  );
};

export default Product;
