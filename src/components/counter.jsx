import React, { useEffect, useRef } from "react";

const Counter = (props) => {
    
    const increaseCPS = () => {
        props.increaseCPS(1);
    }

    // Prevent the useEffect hook from calling whenever it updates
    const intervalRef = useRef(null);

    // Increase the number of cookies by CPS every second
    useEffect(() => {
        intervalRef.current = setInterval(props.timeIncrement, 10);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [props.timeIncrement]);

    return (
        <div id="counter">
            <h1>Total cookies: {Math.floor(props.totalCookies)}</h1>
            <h2>CPS: {props.cps}</h2>
            <button onClick={increaseCPS}>Increase CPS by 1</button>
            <button onClick={props.increment}>Cookie!</button>
        </div>
    )
}

export default Counter;