import React, { useEffect, useState } from 'react'

function UseStateComponent() {
  let count = 0

  const [count1, setCount1] = useState(0)

  const handleIncrement = () => {
    // count++
    setCount1(prev => prev + 1)
    console.log(count1);
  }
  useEffect(() => {
    console.log(count1, 'Inside useEffect');
  }, [count])
  return (
    <div>
      AbC
      <h1>{count1}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default UseStateComponent
