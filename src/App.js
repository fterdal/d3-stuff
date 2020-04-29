import React from 'react';
import './App.css';

const voteTallies = {
  apple: 18,
  orange: 12,
  pear: 10,
  banana: 9,
  mango: 6,
};

function App() {
  return (
    <div className="App">
      <svg style={{ border: '1px solid black' }} height="240" width="720">
        {Object.entries(voteTallies).map(([cand, tally], candIdx) => {
          // console.log('cand', cand);
          // console.log('tally', tally);
          return (
            <g key={cand}>
              {new Array(tally).fill('s').map((_, tallyIdx) => (
                <rect
                  key={tallyIdx}
                  x={tallyIdx * 25}
                  y={candIdx * 25}
                  height="20"
                  width="20"
                ></rect>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default App;
