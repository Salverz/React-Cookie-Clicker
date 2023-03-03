import React from "react";
import { useState } from "react";

const Clicker = (props) => {

    const [state, setState] = useState({
        cost: 15
        // numberPurchased: 0
    })

    // const increasePrice = () => {
    //     setState({
    //         ...state,
    //         cost: Math.floor(state.cost * Math.pow(1.15, state.numberPurchased))
    //     })
    // }


    // const incrementNumberPurchased = () => {
    //     setState({
    //         ...state,
    //         numberPurchased: state.numberPurchased + 1
    //     })
    //     increasePrice();
    //     console.log(state.numberPurchased, "purchased")
    // }
    
    const purchaseClicker = () => {
        if (props.totalCookies < state.cost) {
            console.log("Not enough cookies to purchase a clicker!");
        } else {
            props.spendCookies(state.cost);
            props.increaseCPS(1);
            // incrementNumberPurchased();
        }
    }

    return (
        <div id="clicker">
            <h3>Clicker: 1 CPS</h3>
            <button onClick={purchaseClicker}>Purchase ({state.cost} cookies)</button>
        </div>
    )
}

export default Clicker;