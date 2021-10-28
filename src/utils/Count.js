import React, { useState } from "react";
import CountForm from "./CountForm";
import CountDownDisplay from "../views/CountDownDisplay";
import Button from "../views/Button";


const Count = (props) => {
  const [time, setTime] = useState({sec: 0, min: 0, hr: 1});
  const [interval, setI] = useState();
  const [state, setState] = useState(0);

  const start = () => {
    run();
    setState(1); //start
    setI(setInterval(run, 1000));
  };

  let newSec = time.sec,
    newMin = time.min,
    newHr = time.hr;

  const run = () => {
    if (newSec === 0 && newMin ===0 && newHr === 0){
        return stop();
    }
    if (newMin <= 0) {
      newHr--;
      newMin = 60;
    }
    if (newSec <= 0) {
      newMin--;
      newSec = 60;
    }

    newSec--;
    return setTime({
      sec: newSec,
      min: newMin,
      hr: newHr,
    });
  };

  const stop = () => {
    clearInterval(interval);
    clearInterval(setI);
    setState(2); //stop
  };

  const reset = () => {
    clearInterval(interval);
    clearInterval(setI);
    setState(0); //initiate
    setTime({ milisec: 0, sec: 0, min: 0, hr: 0 })
  };

    const resume = () => start();


    const countDown = (data) => {
        reset();
     const timesdata = {
         ...data
     }
     
     console.log(data);
     setTime(data);
     start();
    }

      


  return (
    <div>
      <div>
        <CountForm times={countDown}/>
        <CountDownDisplay time={time} />
        <Button  state={state} reset={reset} stop={stop} start={start} resume={resume} />
      </div>

    </div>
  );
};


export default Count;