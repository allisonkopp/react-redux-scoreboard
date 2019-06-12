import React from 'react';
import { Icon, Counter } from '.';

const Player = ({ player: { id, score, name } = {} }) => (
  <div className="player">
    <div className="player-name">
      <a className="remove-player">✖</a>
      <Icon />
      {name}
    </div>
    <div className="player-score">
      <Counter />
    </div>
  </div>
);

export default Player;
