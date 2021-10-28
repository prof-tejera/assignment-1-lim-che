

const Display = (props)=> {
    const hr = () =>{
        if(props.time.hr === 0){
            return '';
        }
        else {
            return <span>{(props.time.hr >= 10)? props.time.hr : '0' + props.time.hr}</span>
        }
    }

    return (
      <div>
        {hr()}
        <span>{props.time.min >= 10 ? props.time.min : "0" + props.time.min}:</span>
        
        <span>{props.time.sec >= 10 ? props.time.sec : "0" + props.time.sec}:</span>
   
        <span>{props.time.milisec >= 10 ? props.time.milisec : "0" + props.time.milisec}</span>
      </div>
    );
}

export default Display;