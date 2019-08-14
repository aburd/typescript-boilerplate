import React, { useState } from 'react'

export default function App() {
  const [clickedCount, setClickedCount] = useState(0)
  function handleClickedCount() {
    setClickedCount(clickedCount + 1)
  }
  return (
    <div className="container">
      <h2>You have clicked the button {clickedCount} times</h2>
      <button onClick={handleClickedCount}>Click Me</button>
    </div>
  )
}