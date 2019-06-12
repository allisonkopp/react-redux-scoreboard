import React from 'react';
import { connect } from 'react-redux';
import { UPDATE_PLAYER_SCORE } from '../store/actionTypes';

const Counter = ({ id, score, updateScore }) => (
  <div className="counter">
    <button className="counter-action decrement" onClick={updateScore({ id, change: -1 })}>
      -
    </button>
    <div className="counter-score">{score}</div>
    <button className="counter-action increment" onClick={updateScore({ id, change: 1 })}>
      +
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  updateScore: payload => _ => dispatch({ type: UPDATE_PLAYER_SCORE, payload })
});

export default connect(
  null,
  mapDispatchToProps
)(Counter);
