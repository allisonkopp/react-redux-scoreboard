import { SET_NAME } from '../actionTypes';

const initialState = { name: 'John Doe' };

//every reducer has 2 arguments
const notes = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default notes;
