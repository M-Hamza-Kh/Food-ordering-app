import React from "react";
import picture from "../../Pictures/meals.jpg";
import "./Layout.css";
import Cartbutton from "./Cartbutton";
const Layout = (props) => {
  return (
    <>
      <div className="bg- top-div">
        <div className="container ">
          <div className="row ">
            <div className="col-12  d-flex align-items-center justify-content-between my-2">
              <h1 className="text-light">ReactMeals</h1>
              <Cartbutton showcart={props.showcart}></Cartbutton>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img className="img-1 " src={picture} alt="not available"></img>
      </div>
    </>
  );
};

export default Layout;
