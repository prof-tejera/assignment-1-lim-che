import React, { useState } from "react";
import './Xytimer.css';

const Xytimer = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

    const numberChangeHandler = (event) => {
        setEnteredNumber(event.target.value);
    };


  const submitHandler = (event) => {
    event.preventDefault();
    const repeat = {
      num: parseInt(enteredNumber),
    };
    props.onChangedNumber(repeat);
    setEnteredNumber("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        min="0"
        max="9"
        step="1"
        value={enteredNumber}
        onChange={numberChangeHandler}
      />
      <button> Repeat</button>
    </form>
  );
};

export default Xytimer;
