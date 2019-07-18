import { FETCH_DILEMMAS, ADD_DILEMMA, UPDATE_DILEMMA, FETCH_DILEMMA } from './actionTypes';
import dilemmas from "../../apis/config";

export const fetchDilemmas = () => async dispatch => {
  const response = await dilemmas.get("/dilemmas");
  dispatch({ type: FETCH_DILEMMAS, payload: response.data });
};

export const createDilemma = postDilemma => async dispatch => {
  const response = await dilemmas.post("/dilemmas", postDilemma);
  dispatch({ type: ADD_DILEMMA, payload: response.data });
};

export const updateDilemma = updateDilemma => async dispatch => {
  const response = await dilemmas.put(`/dilemmas/${updateDilemma.id}`, updateDilemma);
  dispatch({ type: UPDATE_DILEMMA, payload: response.data });
};

export const fetchDilemma = id => async dispatch => {
  const response = await dilemmas.get(`/dilemmas/${id}`);
  dispatch({ type: FETCH_DILEMMA, payload: response.data });
};
