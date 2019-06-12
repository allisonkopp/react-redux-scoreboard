import { combineReducers, createStore } from 'redux';
import { notes, player } from './reducers';

const rootReducer = combineReducers({ notes, player });
const store = createStore(rootReducer);

export default store;
