import { useState, useEffect } from "react";

function App() {
  let [counterValue, setCounter] = useState(true);
  useEffect(function () {
    setInterval(function () {
      setCounter(counterValue => !counterValue);
    }, 5000);
  }, []);
  return <div>
    {counterValue && <Counter></Counter>}
  </div>
}
function Counter() {
  // let count=0;
  const [count, setCount] = useState(0);

  useEffect(function () {
    let clock=setInterval(IncreaseCount, 1000);
    return function(){
      clearInterval(clock);
    }
  }, []);

  function IncreaseCount() {
    setCount(count => count + 1);
  }


  return <div>
    <h1>{count}</h1>
    <button onClick={IncreaseCount}>Increase Count!!</button>
  </div>
}
export default App
