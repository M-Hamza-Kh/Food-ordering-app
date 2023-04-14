import React from "react";
import "./Cartbutton.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import Cardcontext from "../Store/Cardcontext";
const Cartbutton = (props) => {
  const cardctx = useContext(Cardcontext);
  const numberofcarditems = cardctx.items.reduce((number, item) => {
    return number + item.amount;
  }, 0);
  return (
    <button onClick={props.showcart}>
      <span className="text-light">
        <FaShoppingCart />
      </span>
      <span className="ms-2 text-light"> YourCart</span>
      <span className="ms-2 thirdspan">{numberofcarditems}</span>
    </button>
  );
};

export default Cartbutton;
