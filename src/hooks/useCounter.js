import { useState } from "react"

export function useCounter() {
  const [count, setCount] = useState(0);
  function Increase() {
    setCount(c => c + 1);
  }
  return {
    count: count,
    Increase: Increase
  }
}