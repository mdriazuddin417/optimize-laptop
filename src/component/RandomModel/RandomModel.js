import React, { useEffect, useState } from "react";

const RandomModel = ({ cart }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

    setProduct(cart[randomNumber]);
  }, [cart]);

  return (
    <div className="cart bg-info bg-opacity-10 p-3">
      <img src={product?.picture} alt="" />
      <h4>{product?.name}</h4>
    </div>
  );
};

export default RandomModel;
