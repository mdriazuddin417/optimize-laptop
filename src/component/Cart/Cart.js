import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Cart.css";
const Cart = ({ product }) => {
  const { name, picture } = product;

  return (
    <div className="cart">
      <img src={picture} alt="" />
      <h6>{name}</h6>
      <RiDeleteBin6Line className="fs-4 text-danger" />
    </div>
  );
};

export default Cart;
