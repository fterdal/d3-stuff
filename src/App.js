import React from 'react';
import './App.css';

function App() {
  const voteTallies = {
    apple: 18,
    orange: 12,
    pear: 10,
    banana: 9,
    mango: 6,
  };
  const colorForCand = (cand) => {
    return {
      apple: 'red',
      orange: 'orange',
      pear: 'lightgreen',
      banana: 'yellow',
      mango: 'pink',
    }[cand]
  }

  const totalVotes = Object.values(voteTallies).reduce(
    (total, current) => total + current,
    0
  );
  const numCandidates = Object.keys(voteTallies).length;
  const winThreshold = Math.ceil(totalVotes / 2);
  console.log(winThreshold);
  return (
    <div className="App">
      <svg style={{ border: '1px solid black' }} height="240" width="720">
        {Object.entries(voteTallies).map(([cand, tally], candIdx) => (
          <g key={cand}>
            {new Array(tally).fill('').map((_, tallyIdx) => (
              <rect
                key={tallyIdx}
                x={tallyIdx * 25}
                y={candIdx * 25}
                height="20"
                width="20"
                fill={colorForCand(cand)}
                stroke="black"
              ></rect>
            ))}
          </g>
        ))}
        <line
          x1={winThreshold * 25}
          y1="0"
          x2={winThreshold * 25}
          y2="240"
          stroke="black"
          strokeDasharray="4"
        />
      </svg>
    </div>
  );
}

export default App;
