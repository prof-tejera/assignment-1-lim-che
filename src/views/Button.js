import './Button.css';

const Button = (props) => {

    return (
      <div>
        {props.state === 0 ? (
          <button className="button" onClick={props.start}>
            Start
          </button>
        ) : (
          ""
        )}

        {props.state === 1 ? (
          <div>
            <button className="button" role="button" onClick={props.stop}>
              Stop
            </button>
            <button className="button" role="button" onClick={props.reset}>
              Reset
            </button>
          </div>
        ) : (
          ""
        )}

        {props.state === 2 ? (
          <div>
            <button className="button" onClick={props.resume}>
              Resume
            </button>
            <button className="button" onClick={props.reset}>
              Reset
            </button>
          </div>
        ) : (
          ""
        )}

        {/* 
        <button onClick={props.start}>Start</button>
        <button onClick={props.stop}>Stop</button>
        <button onClick={props.resume}>Resume</button>
        <button onClick={props.reset}>Reset</button> */}
      </div>
    );
}

export default Button;