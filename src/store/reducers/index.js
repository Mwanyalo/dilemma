import { combineReducers } from 'redux';
import dilemmaReducer from './dilemmaReducer';
import userReducer from './userReducer';

export default combineReducers({
  dilemmas: dilemmaReducer,
  user: userReducer
});