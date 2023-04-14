import React from "react";

const Cardcontext = React.createContext({
  items: [],
  totalamount: 0,
  additem: (item) => {},
  removeitem: (item) => {},
});
export default Cardcontext;
