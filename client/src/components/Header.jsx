import React from 'react';
import { Stats, Stopwatch } from '.';

const Header = ({ players = [] }) => {
  const totalScore = players.reduce((acc, { score }) => acc + score, 0);
  const totalPlayers = players.length;
  return (
    <div className="header">
      <Stats totalPlayers={totalPlayers} totalScore={totalScore} />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </div>
  );
};

export default Header;
