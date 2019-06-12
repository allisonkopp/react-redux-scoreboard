import React from 'react';
import { Player } from '.';

const Players = ({ players = [] }) => (
  <div className="players">
    {players.map(player => (
      <Player />
    ))}
  </div>
);

export default Players;
