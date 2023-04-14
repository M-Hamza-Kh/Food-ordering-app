import React, { useState } from "react";
import Input from "../../UI/Input";
import { useRef } from "react";
const Mealitemform = (props) => {
  const [error, seterror] = useState(false);
  const ampuntinputref = useRef();
  const submithandler = (event) => {
    event.preventDefault();
    const enteredamount = ampuntinputref.current.value;
    const enteredamountnumber = +enteredamount;
    console.log(enteredamount);
    if (
      enteredamount.trim().length === 0 ||
      enteredamountnumber < 1 ||
      enteredamount > 5
    ) {
      seterror(true);
      return;
    }
    props.onaddtocart(enteredamountnumber);
  };

  return (
    <>
      <form className="" onSubmit={submithandler}>
        <Input
          ref={ampuntinputref}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button className=" button">+ Add</button>
      </form>
      {error && <p>please write greater than 1 and less than 5 </p>}
    </>
  );
};

export default Mealitemform;
