
const Xyview = ()=> {
    return (
        <div>
            <p id="hour-label" class="label">Hours</p>
            <p id="min-label" class="label">Minutes</p>
            <p id="sec-label" class="label">Seconds</p>
        <input id="hour" type="number" max="99" min="0" value="0" />
        <p >:</p>
        <input id="minute" type="number" max="60" min="0" value="0" class="time"/>
        <p id="p2" class="semicolon">:</p>
        <input id="sec" type="number" max="60" min="0" value="0" class="time"/>
        <button id="start" class="btn">Start</button>
        <button id="reset" class="btn">Reset</button>
        </div>
    )
}

export default Xyview;