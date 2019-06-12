import React from 'react';
import { Player } from '.';

const Players = ({ players = [] }) => (
  <div className="players">
    {players.map(player => (
      <Player player={player} />
    ))}
  </div>
);

export default Players;
