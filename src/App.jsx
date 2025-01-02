import { useState } from "react"
import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  function sendDatatobackend() {
    fetch("api.amazon.com/search")
  }
  const debouncedfn = useDebounce(sendDatatobackend, 200);
  return (
    <div>
      <input type="text" name="" id="" onChange={debouncedfn} />

    </div>
  )
}

export default App
