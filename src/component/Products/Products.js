import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("public.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (selectedProduct) => {
    const newCart = [...cart, selectedProduct];
    const addedName = cart.find(
      (product) => product.name === selectedProduct.name
    );
    if (addedName) {
      alert("Not a alow ");
    } else {
      setCart(newCart);
    }
  };
  return (
    <div className="shop-container">
      <div className="product-container cols-lg-8">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container ">
        <h3>Selected Product: {cart.length}</h3>
        {cart.map((product) => (
          <Cart key={product.id} product={product}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Products;
