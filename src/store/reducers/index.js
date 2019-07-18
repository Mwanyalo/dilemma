import { combineReducers } from 'redux';
import dilemmaReducer from './dilemmaReducer';
import { reducer as formReducer } from "redux-form";
import userReducer from './userReducer';
import commentReducer from "./commentReducer";
import replyReducer from './replyReducer';

export default combineReducers({
  dilemmas: dilemmaReducer,
  form: formReducer,
  comments: commentReducer,
  replies: replyReducer,
  user: userReducer
});