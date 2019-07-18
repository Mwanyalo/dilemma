import { FETCH_DILEMMAS, ADD_DILEMMA, UPDATE_DILEMMA, FETCH_DILEMMA } from '../actions/actionTypes';

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
        items: [
          ...state.items,
          action.payload
        ]
      };
    case UPDATE_DILEMMA:
      const index = state.items.findIndex((item) => item.id === action.payload.id)
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          action.payload,
          ...state.items.slice(index + 1),
        ]
      };
    case FETCH_DILEMMA:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  } 
}

export default dilemmaReducer;

