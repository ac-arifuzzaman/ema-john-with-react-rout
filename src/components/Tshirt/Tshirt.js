import React from "react";
import "./Tshirt.css";

const Tshirt = ({ tshirt, handleAdToCart }) => {
  const { picture, name, price } = tshirt;
  return (
    <div className="tshirts">
      <img src={picture} alt="tshirt" />
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button onClick={() => handleAdToCart(tshirt)}>Buy this</button>
    </div>
  );
};

export default Tshirt;
