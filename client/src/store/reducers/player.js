import { ADD_PLAYER, REMOVE_PLAYER, UPDATE_PLAYER_SCORE, SELECT_PLAYER } from '../actionTypes';
import { data } from '../../data';

const initialState = {
  players: data,
  selectedPlayerId: -1 //Not necessary
};

const player = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PLAYER: {
      const newPlayer = {
        id: state.players.length + 1,
        name: payload.name,
        age: payload.age,
        score: 0
      };
      const newPlayerList = [...state.players, newPlayer];
      return { ...state, players: newPlayerList };
    }

    case REMOVE_PLAYER: {
      const filteredPlayerList = state.players.filter(player => player.id !== payload.id);
      return { ...state, players: filteredPlayerList };
    }

    case UPDATE_PLAYER_SCORE: {
      const updatedPlayerList = state.players.map(player =>
        player.id === payload.id ? { ...player, score: player.score + payload.change } : player
      );
      return { ...state, players: updatedPlayerList };
    }

    case SELECT_PLAYER:
      return { ...state, selectedPlayerId: payload.id };

    default:
      return state;
  }
};

export default player;
