import React from "react";
import "./Input.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id} className="me-1">
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className=" my-1 inputstyle  me-4 "
      ></input>
    </div>
  );
});

export default Input;
