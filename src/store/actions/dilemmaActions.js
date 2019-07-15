import { FETCH_DILEMMAS, ADD_DILEMMA } from './actionTypes';
import dilemmas from "../../apis/config";

export const fetchDilemmas = () => async dispatch => {
  const response = await dilemmas.get("/dilemmas");
  dispatch({ type: FETCH_DILEMMAS, payload: response.data });
};

export const createDilemma = postDilemma => async dispatch => {
  const response = await dilemmas.post("/dilemmas", postDilemma);
  dispatch({ type: ADD_DILEMMA, payload: response.data });
};