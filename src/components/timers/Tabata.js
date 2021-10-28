import React from "react";
import XY from "./XY";
import TabataTimer from "../../utils/TabataTimer";

class Tabata extends React.Component {
  render() {
        const rest = (times)=> {
        const data = {
          ...times,
        }
        if(times.num < 1){
          times.num = 1
        }
        console.log(times.num);

    }
    return (
      <div>
        <TabataTimer onChangedNumber={rest}></TabataTimer>
        <XY></XY>
      </div>
    )
  }
}

export default Tabata;
