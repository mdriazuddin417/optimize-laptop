import React, { useEffect, useState } from "react";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("public.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => console.log(product))}
      </div>
      <div className="cart-container"></div>
    </div>
  );
};

export default Products;
