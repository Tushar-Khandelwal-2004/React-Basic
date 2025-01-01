import { useState } from "react"
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [count,setCount]=useState(1);
  const {loading ,data}=useFetch("https://jsonplaceholder.typicode.com/posts/"+count);
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div>
      <button onClick={()=>setCount(1)}>1</button>
      <button onClick={()=>setCount(2)}>2</button>
      <button onClick={()=>setCount(3)}>3</button>
      <button onClick={()=>setCount(4)}>4</button>
      {data.title}
    </div>
  )
}

export default App
