import React from 'react';
import { connect } from 'react-redux';
import { REMOVE_PLAYER, SELECT_PLAYER } from '../store/actionTypes';
import { Icon, Counter } from '.';

const Player = ({ players = [], removePlayer, selectPlayer, player: { id, score, name } = {} }) => {
  const highScore = Math.max(...players.map(p => p.score));
  return (
    <div className="player">
      <div className="player-name" onClick={selectPlayer({ id })}>
        <a className="remove-player" onClick={removePlayer({ id })}>
          ✖
        </a>
        <Icon isHighScore={highScore === score} />
        {name}
      </div>
      <div className="player-score">
        <Counter id={id} score={score} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ player }) => ({ ...player });

const mapDispatchToProps = dispatch => ({
  removePlayer: payload => _ => dispatch({ type: REMOVE_PLAYER, payload }),
  selectPlayer: payload => _ => dispatch({ type: SELECT_PLAYER, payload })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
