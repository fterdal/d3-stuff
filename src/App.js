import React from "react"
import "./App.css"

function App() {
  return (
    <div className="App">
      <svg height="240" width="720">
        <g>
          <circle cx="40" cy="60" r="10"></circle>
          <circle cx="80" cy="60" r="10"></circle>
          <circle cx="120" cy="60" r="10"></circle>
        </g>
        <g>
          <rect x="40" y="120" height="20" width="20"></rect>
          <rect x="80" y="120" height="20" width="20"></rect>
          <rect x="120" y="120" height="20" width="20"></rect>
        </g>
      </svg>
    </div>
  )
}

export default App
