import React from "react";
import { useContext } from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
import Cardcontext from "../Store/Cardcontext";
import Cartitem from "./Cartitem";
const Cart = (props) => {
  const ctx = useContext(Cardcontext);
  const totalamount = `$${ctx.totalamount.toFixed(2)}`;
  const deleteorderbutt = ctx.items.length > 0;
  const onremoveitemhandler = (id) => {
    console.log("id remove", id);
    ctx.removeitem(id);
  };
  const onadditemhandler = (item) => {
    console.log(item);
    ctx.additem(item);
  };
  const Cartitems = (
    <ul>
      {ctx.items.map((item) => {
        // return <li className="list-unstyled itemname ">{item.name}</li>;
        return (
          <Cartitem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onremove={onremoveitemhandler.bind(null, item.id)}
            onadd={onadditemhandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal>
      <div className="parent-div container-fluid d-flex justify-content-center  ">
        <div className="upwarddiv ">
          {Cartitems}
          <div className="d-flex justify-content-between divtotapric ">
            <span className="tota">total amount</span>
            <span className=" pric">{totalamount}</span>
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button className="buttclose mb-1" onClick={props.hidecart}>
              close
            </button>
            {deleteorderbutt && (
              <button className="buttorder mb-1">order</button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
