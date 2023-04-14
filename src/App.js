import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Layout from "./Components/Layout/Layout";
import Meals from "./Components/Meals/Meals";
import Cardprovider from "./Components/Store/Cardprovider";
function App(props) {
  const [cartishown, setcartisshown] = useState(false);

  const showcarthandler = () => {
    setcartisshown(true);
  };
  const hidecarthandler = () => {
    setcartisshown(false);
  };
  return (
    <Cardprovider>
      {cartishown && <Cart hidecart={hidecarthandler}></Cart>}
      <Layout showcart={showcarthandler}></Layout>
      <Meals></Meals>
    </Cardprovider>
  );
}

export default App;
