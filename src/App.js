import './App.css';
import { useState } from 'react';
import Counter from "./components/counter";
import BuildingRack from './components/buildingRack';

function App() {
  const [state, setState] = useState({
    totalCookies: 0,
    cookiesPerSecond: 0
  });

  // For increasing the cookie count on clicks
  const increment = () => {
    setState({
      ...state,
      totalCookies: state.totalCookies + 1
    });
  };

  // For increasing the cookie count each second
  const timeIncrement = () => {
    setState({
      ...state,
      totalCookies: state.totalCookies + state.cookiesPerSecond / 100
    });
  };

  // For increasing the CPS
  const increaseCPS = (increaseAmount) => {
    setState(prevState => ({
      ...prevState,
      cookiesPerSecond: prevState.cookiesPerSecond + increaseAmount
    }));
  };

  // Used to spend cookies
  const spendCookies = (cost) => {
    setState({
      ...state,
      totalCookies: state.totalCookies - cost
    });
  };

  return (
    <div className="App">
      <Counter
        totalCookies={state.totalCookies}
        cps={state.cookiesPerSecond}
        increment={increment}
        increaseCPS={increaseCPS}
        timeIncrement={timeIncrement}
      />
      <BuildingRack
        totalCookies={state.totalCookies}
        increaseCPS={increaseCPS}
        spendCookies={spendCookies}
      />
    </div>
  );
}

export default App;
