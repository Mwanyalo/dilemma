import _ from "lodash";
import { CREATE_REPLY, FETCH_REPLIES, FETCH_REPLY } from "../actions/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_REPLIES:
      return { ...state, ..._.mapKeys(action.payload, "Fid") };
    case FETCH_REPLY:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_REPLY:
      return { ...state, [action.payload.id]: action.payload };
    // case EDIT_COMMENT:
    //   return { ...state, [action.payload.id]: action.payload };
    // case DELETE_COMMENT:
    //   return _.omit(state, action.payload);
    default:
      return state;
  }
};
