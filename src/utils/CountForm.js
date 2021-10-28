import React, { useState } from "react";
import './CountForm.css';

const CountForm = (props) => {
  const [enteredHour, setEnteredHour] = useState("");
  const [enteredMinute, setEnteredMinute] = useState("");
  const [enteredSecond, setEnteredSecond] = useState("");


  const hourChangeHandler = (event) => {
    setEnteredHour(event.target.value);
  };
  const minuteChangeHandler = (event) => {
    setEnteredMinute(event.target.value);
  };
  const secondChangeHandler = (event) => {
    setEnteredSecond(event.target.value);
  };


  const submitHandler = (event) => {
    event.preventDefault();
    const timeData = {

      sec: parseInt(enteredSecond),
      min: parseInt(enteredMinute),
      hr: parseInt(enteredHour),
    };

    props.times(timeData);//times is the method name passed in timeData
    setEnteredHour("");
    setEnteredMinute("");
    setEnteredSecond("");

  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Hour</label>
        <input
          type="number"
          value={enteredHour}
          min="0"
          step="1"
          max="99"
          defaultValue={1}
          placeholder={0}
          onChange={hourChangeHandler}
        />
      </div>
      <div>
        <label>Min</label>
        <input
          type="number"
          value={enteredMinute}
          min="0"
          step="1"
          max="60"
          defaultValue={1}
          placeholder={0}
          onChange={minuteChangeHandler}
        />
      </div>
      <div>
        <label>Sec</label>
        <input
          type="number"
          value={enteredSecond}
          min="0"
          step="1"
          max="60"
          defaultValue={1}
          placeholder={0}
          onChange={secondChangeHandler}
        />
      </div>

      <button type="submit" className="button" formAction={submitHandler}>
        SET
      </button>
    </form>
  );
};

export default CountForm;
