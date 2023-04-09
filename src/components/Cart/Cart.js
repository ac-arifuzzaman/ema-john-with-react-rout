import React from "react";

const Cart = ({ cart, handleRemoveItem }) => {
  return (
    <div>
      <h2>This is cart::{cart.length}</h2>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
