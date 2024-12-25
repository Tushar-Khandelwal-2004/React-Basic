import { useState , useEffect} from "react";

function App() {
  return <div>
    <Counter></Counter>
  </div>
}
function Counter() {
  // let count=0;
  const [count, setCount] = useState(0);

  useEffect(function(){
    setInterval(IncreaseCount,1000);
  },[]);

  function IncreaseCount() {
    setCount(count => count+1); 
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={IncreaseCount}>Increase Count!!</button>
  </div>
}
export default App
