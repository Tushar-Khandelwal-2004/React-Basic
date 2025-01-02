import { useState } from "react"
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

function App() {
  const [count,setCount]=useState(1);
  const prev=usePrev(count);
  return(
    <div>
      <p>The current value is {count}</p>
      <button onClick={()=>{setCount(c=>c+1)}}>Increase</button>
      <p>The previous value was {prev}</p>
    </div>
  )
}

export default App
