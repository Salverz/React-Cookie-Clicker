import React from "react";

const Clicker = (props) => {

    let cost = 10;

    const purchaseClicker = () => {
        props.increaseCPS(1);
        if (props.totalCookies >= cost) {
            props.increaseCPS(1);
            props.spendCookies(cost);
        } else {
            console.log("Not enough cookies to purchase a clicker!");
        }
    }

    return (
        <div id="clicker">
            <h3>Clicker: 1CPS</h3>
            <button onClick={purchaseClicker}>Purchase ({cost} cookies)</button>
        </div>
    )
}

export default Clicker;