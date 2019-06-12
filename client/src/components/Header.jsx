import React from 'react';
import { Stats, Stopwatch } from '.';

const Header = props => {
  return (
    <div className="header">
      <Stats />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </div>
  );
};

export default Header;
