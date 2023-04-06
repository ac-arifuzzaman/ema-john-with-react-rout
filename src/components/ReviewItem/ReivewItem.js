import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReivewItem = ({ product, handleDeleteItem }) => {
  const { id, img, name, price, quantity, shipping } = product;
  return (
    <div className="orders-item-container">
      <div className="img-container">
        <img src={img} alt="arif" />
      </div>
      <div className="review-item-details">
        <div className="item-details">
          <p>{name}</p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div>
          <button
            onClick={() => handleDeleteItem(id)}
            className="delete-btn-wrapper"
          >
            <FontAwesomeIcon className="delete-btn" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReivewItem;
