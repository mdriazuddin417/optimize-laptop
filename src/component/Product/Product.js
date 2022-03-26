import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Product.css";
const Product = ({ product, handleAddToCart }) => {
  const { id, picture, name, price } = product;
  return (
    <div className="product">
      <img src={picture} alt="" className="mb-2" />
      <h4>{name}</h4>
      <h5 className="py-3">Price: ${price}</h5>
      <button
        onClick={() => {
          handleAddToCart(product);
        }}
        className="btn-cart btn btn-success "
      >
        Add To Cart <FaShoppingCart />
      </button>
    </div>
  );
};

export default Product;
