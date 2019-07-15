import { FETCH_DILEMMAS, ADD_DILEMMA } from '../actions/actionTypes';

const initialState = {
  items: [],
  item: {}
};

const dilemmaReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DILEMMAS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_DILEMMA:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  } 
}

export default dilemmaReducer;

