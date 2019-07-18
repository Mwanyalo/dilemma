import comments from "../../apis/comments";
import replies from "../../apis/comments";
import {
  CREATE_COMMENT,
  EDIT_COMMENT,
  FETCH_COMMENT,
  FETCH_COMMENTS,
  DELETE_COMMENT,
  CREATE_REPLY,
  FETCH_REPLIES,
  FETCH_REPLY,
} from "./actionTypes";

export const createComment = formValues => async dispatch => {
  const response = await comments.post("/comments", formValues);
  dispatch({ type: CREATE_COMMENT, payload: response.data });
};

export const fetchComments = () => async dispatch => {
  const response = await comments.get("/comments");

  dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

export const fetchComment = id => async dispatch => {
  const response = await comments.get(`/comments/${id}`);

  dispatch({ type: FETCH_COMMENT, payload: response.data });
};

export const editComment = (id, formValues) => async dispatch => {
  const response = await comments.put(`/comments/${id}`, formValues);

  dispatch({ type: EDIT_COMMENT, payload: response.data });
};

export const deleteComment = id => async dispatch => {
  await comments.delete(`/comments/${id}`);

  dispatch({ type: DELETE_COMMENT, payload: id });
};
export const increment = () => ({ type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });

//fetching replies//
export const createReply = (comment, id) => async dispatch => {
  const response = await comments.put(`/comments/${id}`, comment);
  dispatch({ type: CREATE_REPLY, payload: response.data });
};

export const fetchReplies = () => async dispatch => {
  const response = await replies.get("/replies");

  dispatch({ type: FETCH_REPLIES, payload: response.data });
};

export const fetchReply = Fid => async dispatch => {
  const response = await replies.get(`/replies/${Fid}`);

  dispatch({ type: FETCH_REPLY, payload: response.data });
};
