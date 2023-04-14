import React from "react";
import "./Cartitem.css";
const Cartitem = (props) => {
  const price = `$${props.price}`;
  return (
    <>
      <li className="ms-4 mt-2 d-flex justify-content-between align-items-center">
        <div className="mt-2">
          <h3>{props.name}</h3>

          <p className="price">{price}</p>
          <p className="description">X{props.amount}</p>
        </div>

        <div>
          <button onClick={props.onremove} className="cart-item-button">
            -
          </button>
          <button onClick={props.onadd} className="mt-1 cart-item-button">
            +
          </button>
        </div>
      </li>
      <hr className="line mx-4"></hr>
    </>
  );
};

export default Cartitem;
