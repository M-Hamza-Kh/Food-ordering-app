import React, { useReducer } from "react";
import Cardcontext from "./Cardcontext";

const Cardprovider = (props) => {
  const initialstate = {
    items: [],
    totalamount: 0,
  };
  const reducer = (state, action) => {
    if (action.type === "add") {
      const updatedtotalamount =
        state.totalamount + action.item.price * action.item.amount;
      const existingcartitemindex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingcartitem = state.items[existingcartitemindex];
      let updateditems;

      if (existingcartitem) {
        const updateditem = {
          ...existingcartitem,
          amount: existingcartitem.amount + action.item.amount,
        };

        updateditems = [...state.items];

        updateditems[existingcartitemindex] = updateditem;
      } else {
        updateditems = state.items.concat(action.item);
      }

      return {
        items: updateditems,
        totalamount: updatedtotalamount,
      };
    }
    if (action.type === "remove") {
      const index = state.items.findIndex((item) => item.id === action.id);
      const existingItem = state.items[index];
      const minusTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = state.items.map((item, i) => {
          if (i === index) {
            return updatedItem;
          }
          return item;
        });
      }
      return {
        items: updatedItems,
        totalamount: minusTotalAmount,
      };
    }
    return initialstate;
  };
  const [cardstate, dispatchcard] = useReducer(reducer, initialstate);
  const additemhandler = (item) => {
    dispatchcard({ type: "add", item: item });
  };
  const removeitemhandler = (id) => {
    dispatchcard({ type: "remove", id: id });
  };
  const cardcontext = {
    items: cardstate.items,
    totalamount: cardstate.totalamount,
    additem: additemhandler,
    removeitem: removeitemhandler,
  };
  return (
    <Cardcontext.Provider value={cardcontext}>
      {props.children}
    </Cardcontext.Provider>
  );
};

export default Cardprovider;
