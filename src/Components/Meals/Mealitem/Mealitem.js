import React from "react";
import Mealitemform from "./Mealitemform";
import "./Mealitemform.css";
import "./Mealitem.css";
import { useContext } from "react";
import "../../Store/Cardcontext";
import Cardcontext from "../../Store/Cardcontext";
const Mealitem = (props) => {
  const ctx = useContext(Cardcontext);
  const price = `$${props.price.toFixed(2)}`;
  const onaddtocarthandler = (amount) => {
    ctx.additem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <>
      <li className="ms-4 mt-2 d-flex justify-content-between align-items-center">
        <div className="mt-2">
          <h3>{props.name}</h3>
          <p className="description">{props.description}</p>
          <p className="price">{price}</p>
        </div>

        <div>
          <Mealitemform onaddtocart={onaddtocarthandler}></Mealitemform>
        </div>
      </li>
      <hr className="line mx-4"></hr>
    </>
  );
};

export default Mealitem;
