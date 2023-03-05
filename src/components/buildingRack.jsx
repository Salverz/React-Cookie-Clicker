import React from "react";
import Building from "./building";

const BuildingRack = (props) => {
    const buildings = [
        {name: "Clicker", initialCost: 15, buildingCPS: 0.1},
        {name: "Grandma", initialCost: 100, buildingCPS: 1},
        {name: "Farm", initialCost: 1100, buildingCPS: 8},
        {name: "Mine", initialCost: 12000, buildingCPS: 47},
        {name: "Factory", initialCost: 130000, buildingCPS: 260},
        {name: "Bank", initialCost: 1400000, buildingCPS: 1400},
        {name: "Temple", initialCost: 20000000, buildingCPS: 7800},
        {name: "Wizard Tower", initialCost: 330000000, buildingCPS: 44000},
        {name: "Shipment", initialCost: 5100000000, buildingCPS: 260000},
        {name: "Alchemy Lab", initialCost: 75000000000, buildingCPS: 1600000},
        {name: "Portal", initialCost: 1000000000000, buildingCPS: 10000000},
        {name: "Time Machine", initialCost: 14000000000000, buildingCPS: 65000000},
        {name: "Antimatter Condenser", initialCost: 170000000000000, buildingCPS: 430000000},
        {name: "Prism", initialCost: 2100000000000000, buildingCPS: 2900000000},
        {name: "Chancemaker", initialCost: 26000000000000000, buildingCPS: 21000000000},
        {name: "Fractal Engine", initialCost: 310000000000000000, buildingCPS: 150000000000},
        {name: "Javascript Console", initialCost: 71000000000000000000, buildingCPS: 1100000000000},
        {name: "Idleverse", initialCost: 12000000000000000000000, buildingCPS: 8300000000000},
        {name: "Cortex Baker", initialCost: 1900000000000000000000000, buildingCPS: 64000000000000}
    ];

    return (
        <div id="buildingRack">
            {buildings.map((building) => (
                <Building
                    totalCookies={props.totalCookies}
                    increaseCPS={props.increaseCPS}
                    spendCookies={props.spendCookies}
                    name={building.name}
                    initialCost={building.initialCost}
                    buildingCPS={building.buildingCPS}
                />
            ))}
        </div>
    );
};

export default BuildingRack;