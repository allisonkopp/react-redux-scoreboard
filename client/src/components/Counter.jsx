import React from 'react';

const Counter = ({ score }) => (
  <div className="counter">
    <button className="counter-action decrement">-</button>
    <div className="counter-score">{score}</div>
    <button className="counter-action increment">+</button>
  </div>
);

export default Counter;
