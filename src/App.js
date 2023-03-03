import './App.css';
import { useState, useCallback, useEffect } from 'react';
import Counter from "./components/counter";
import Clicker from "./components/clicker";

function App() {
  const [state, setState] = useState({
    totalCookies: 0,
    cookiesPerSecond: 1
  });

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
    setState(prevState => ({
      ...prevState,
      cookiesPerSecond: prevState.cookiesPerSecond + increaseAmount
    }));
  }


  // useEffect(() => {
  //   console.log("the CPS is now", state.cookiesPerSecond);
  //   // console.log("increaseCPS prop:", increaseCPS);
  // }, [state.cookiesPerSecond]);

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
