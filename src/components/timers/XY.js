import React from "react";
import Countdown from "./Countdown";
import Xytimer from "../../utils/Xytimer";

class XY extends React.Component {
  render() {
    const repeat = (times)=> {
        const data = {
          ...times,
        }
        console.log(times);
        return times;
    }
    return (
      <div>
        <Xytimer onChangedNumber={repeat} />
        <Countdown></Countdown>
      </div>
    )
  }
}

export default XY;
