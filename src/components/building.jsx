import React, { useState, useEffect } from "react";

const Building = (props) => {
    const [state, setState] = useState({
        cost: props.initialCost,
        numberPurchased: 0,
        buildingCPS: props.buildingCPS
    });

    const incrementNumberPurchased = () => {
        setState({
            ...state,
            numberPurchased: state.numberPurchased + 1
        });
    };

    // Increse the price each time a building is purchased
    useEffect(() => {
        setState(prevState => ({
            ...prevState,
            cost: Math.ceil(props.initialCost * Math.pow(1.15, state.numberPurchased))
        }));
    }, [state.numberPurchased, props.initialCost]);
    
    const purchaseBuilding = () => {
        if (props.totalCookies < state.cost) {
            console.log(`Not enough cookies to purchase a ${props.name}!`);
        } else {
            props.spendCookies(state.cost);
            props.increaseCPS(props.buildingCPS);
            incrementNumberPurchased();
        }
    };

    return (
        <div id={props.name}>
            <h3>{props.name}: {Math.round(props.buildingCPS * 10) / 10} CPS</h3>
            <button onClick={purchaseBuilding}>Purchase ({state.cost} cookies)</button>
        </div>
    );
};

export default Building;