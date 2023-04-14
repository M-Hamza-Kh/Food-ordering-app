import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
const Backdrop = () => {
  return <div className="hel">hhh</div>;
};
const Modaloverlay = (props) => {
  return (
    <div className="">
      <div>{props.children}</div>
    </div>
  );
};
const portalelement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop></Backdrop>, portalelement)}
      {ReactDOM.createPortal(
        <Modaloverlay>{props.children}</Modaloverlay>,
        portalelement
      )}
    </>
  );
};

export default Modal;
