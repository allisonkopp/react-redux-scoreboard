import { combineReducers, createStore } from 'redux';
import { notes } from './reducers';

const rootReducer = combineReducers({ notes });
const store = createStore(rootReducer);

export default store;
