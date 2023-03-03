import './App.css';
import { useState, useCallback } from 'react';
import Counter from "./components/counter";

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

  const increment = () => {
    setState({
      ...state,
      totalCookies: state.totalCookies + state.cookiesPerSecond / 100
    })
  }

  const increaseCPS = (increaseAmount) => {
    setState({
      ...state,
      cookiesPerSecond: state.cookiesPerSecond + increaseAmount
    })
  }

  return (
    <div className="App">
      <Counter totalCookies={state.totalCookies} cps={state.cookiesPerSecond} increment={increment} increaseCPS={increaseCPS}/>
    </div>
  );
}

export default App;
