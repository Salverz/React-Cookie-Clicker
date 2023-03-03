import './App.css';
import { useState, useCallback } from 'react';
import Counter from "./components/counter";
import Clicker from "./components/clicker";

function App() {
  const [state, setState] = useState({
    totalCookies: 0,
    cookiesPerSecond: 1
  });

  // const increment = useCallback(() => {
  //   setState({
  //     ...state,
  //     totalCookies: state.totalCookies + state.cookiesPerSecond
  //   })
  // }, [state]);

  // For increasing the cookie count on clicks
  const increment = () => {
    setState({
      ...state,
      totalCookies: state.totalCookies + 1
    })
  }

  const timeIncrement = () => {
    setState({
      ...state,
      totalCookies: state.totalCookies + state.cookiesPerSecond / 100
    })
  }

  const increaseCPS = (increaseAmount) => {
    console.log("increasing CPS by", increaseAmount);
    setState({
      ...state,
      cookiesPerSecond: state.cookiesPerSecond + increaseAmount
    })
    console.log("the CPS is now", state.cookiesPerSecond);
  }

  const spendCookies = (cost) => {
    setState({
      ...state,
      totalCookies: state.totalCookies - cost
    })
  }

  return (
    <div className="App">
      <Counter totalCookies={state.totalCookies} cps={state.cookiesPerSecond} increment={increment} increaseCPS={increaseCPS} timeIncrement={timeIncrement}/>
      <Clicker totalCookies={state.totalCookies} increaseCPS={increaseCPS} spendCookies={spendCookies}/>
    </div>
  );
}

export default App;
