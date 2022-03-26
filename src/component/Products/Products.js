import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

import Modal from "react-modal";

import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import RandomModel from "../RandomModel/RandomModel";

import "./Products.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("public.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //================Alert==============

  //===========button Onclick listener========
  const handleAddToCart = (selectedProduct) => {
    const newCart = [...cart, selectedProduct];
    const addedName = cart.find(
      (product) => product.name === selectedProduct.name
    );
    if (addedName) {
      alert("Product All Ready Collect !!");
    } else if (cart.length === 4) {
      alert("Please Help me");
    } else {
      setCart(newCart);
    }
  };
  //===============Remove Product===========
  const removeItem = () => {
    setCart([]);
  };
  //==============Random Cart show=====
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  Modal.setAppElement("#root");
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
        <button onClick={openModal} className="btn btn-warning my-2">
          Random Choose Product
        </button>
        <button className="btn btn-info" onClick={removeItem}>
          All Remove Product
        </button>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <RandomModel cart={cart}></RandomModel>
          <button className="btn btn-primary" onClick={closeModal}>
            Close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default Products;
