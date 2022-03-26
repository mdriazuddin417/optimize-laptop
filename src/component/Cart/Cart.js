import React from "react";
import "./Cart.css";
const Cart = ({ product }) => {
  const { name, picture } = product;

  return (
    <div className="cart">
      <img src={picture} alt="" />
      <h5>{name}</h5>
    </div>
  );
};

export default Cart;
