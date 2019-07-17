import { FETCH_USER } from './actionTypes';
import user from "../../apis/config";

export const fetchUser = () => async dispatch => {
  const response = await user.get("/user");
  dispatch({ type: FETCH_USER, payload: response.data });
};