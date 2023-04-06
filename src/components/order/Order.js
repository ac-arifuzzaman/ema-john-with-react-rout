import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReivewItem from "../ReviewItem/ReivewItem";

const Order = () => {
  const { products, initialCard } = useLoaderData();
  const [cart, setCart] = useState(initialCard);

  const handleDeleteItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReivewItem
            key={product.id}
            product={product}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Order;
