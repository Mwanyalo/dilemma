import { FETCH_USER } from '../actions/actionTypes';

const initialState = {
  item: {}
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  } 
}

export default userReducer;

