import { FETCH_DILEMMAS, ADD_DILEMMA } from './actionTypes';
import axios from 'axios';

export const fetchDilemmas = () => dispatch => {
  axios.get('http://localhost:3004/questions')
  .then(res => {
    const dilemmas =  res.data
      dispatch({
        type: FETCH_DILEMMAS,
        payload: dilemmas
      })
  })
  .catch(error =>{
   console.log(error)
  })
};

export const createDilemma = postDilemma => dispatch => {
  fetch('http://localhost:3004/questions', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postDilemma)
  })
    .then(res => res.json())
    .then(dilemma =>
      dispatch({
        type: ADD_DILEMMA,
        payload: dilemma
      })
    );
};