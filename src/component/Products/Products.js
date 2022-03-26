import React, { useEffect, useState } from "react";

import Cart from "../Cart/Cart";

import Product from "../Product/Product";
import RandomModal from "../RandomModal/RandomModal";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("public.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //===========button Onclick listener========
  const handleAddToCart = (selectedProduct) => {
    const newCart = [...cart, selectedProduct];
    const addedName = cart.find(
      (product) => product.name === selectedProduct.name
    );
    if (addedName) {
      alert("Not a alow ");
    } else if (cart.length === 4) {
      alert("Please Help me");
    } else {
      setCart(newCart);
    }
  };

  //==============Random Cart show=====
  const handleBtn = () => {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    if (randomNumber <= cart.length - 1) {
      console.log(cart.length);
      console.log(randomNumber);
      console.log(cart[randomNumber]);
      <RandomModal cart={cart[randomNumber]}></RandomModal>;
    } else if (cart.length < 1) {
      alert("please enter a valid product");
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
        <h3 className="my-5 text-center">Selected Product: {cart.length}</h3>

        {cart.map((product) => (
          <Cart key={product.id} product={product}></Cart>
        ))}
        <button onClick={handleBtn} className="btn btn-warning my-2">
          Random Choose Product
        </button>
        <button className="btn btn-info">All Remove Product</button>
      </div>
    </div>
  );
};

export default Products;
