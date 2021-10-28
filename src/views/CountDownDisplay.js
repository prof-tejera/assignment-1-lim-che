import React from 'react';
import CountForm from '../utils/CountForm';

const Display = (props) => {
        // const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
        // const [[hrs, mins, secs], setTime] = React.useState([
        //   hours,
        //   minutes,
        //   seconds,
        // ]);

        // const tick = () => {
        //   if (hrs === 0 && mins === 0 && secs === 0) reset();
        //   else if (mins === 0 && secs === 0) {
        //     setTime([hrs - 1, 59, 59]);
        //   } else if (secs === 0) {
        //     setTime([hrs, mins - 1, 59]);
        //   } else {
        //     setTime([hrs, mins, secs - 1]);
        //   }
        // };

        // const reset = () =>
        //   setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

        // React.useEffect(() => {
        //   const timerId = setInterval(() => tick(), 1000);
        //   return () => clearInterval(timerId);
        // });

        // const timesInput = (data) =>{
        //     const timedata = {
        //         ...data,
        //     }
        //     props.onAddTimeData(data);
        // }

        // return (
        //   <div>
        //   <CountForm times={timesInput}/>
        //     <p>{`${hrs.toString().padStart(2, "0")}:${mins
        //       .toString()
        //       .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</p>
        //   </div>
        // );
  return (
    <div>
      <span>{props.time.hr >= 10 ? props.time.hr : "0" + props.time.hr}:</span>

      <span>
        {props.time.min >= 10 ? props.time.min : "0" + props.time.min}:
      </span>

      <span>
        {props.time.sec >= 10 ? props.time.sec : "0" + props.time.sec}
      </span>

      {/* <p>Hours</p>
      <p>Minutes</p>
      <p>Seconds</p>
      <input type="number" id="hours" max="99" min="0" value="0"></input>
      <p>:</p>
      <input type="number" id="minutes" max="99" min="0" value="0"></input>
      <p>:</p>
      <input type="number" id="seconds" max="99" min="0" value="0"></input>
      <button id="start" >
        Start
      </button>
      <button id="reset">
        Reset
      </button> */}
    </div>
  );
};

export default Display;
