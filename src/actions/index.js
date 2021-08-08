import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";
import streams from "../api/streams";
/* ACTION CREATORS */

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

/*STREAMS ACTIONS */
const createStreamAction = (stream) => {
  return {
    type: CREATE_STREAM,
    payload: stream,
  };
};

const fetchStreamsAction = (streams) => {
  return {
    type: FETCH_STREAMS,
    payload: streams,
  };
};
const fetchStreamAction = (stream) => {
  return {
    type: FETCH_STREAM,
    payload: stream,
  };
};
const editStreamAction = (stream) => {
  return {
    type: EDIT_STREAM,
    payload: stream,
  };
};
const deleteStreamAction = (streamID) => {
  return {
    type: DELETE_STREAM,
    payload: streamID,
  };
};

//STREAMS action creators

//create
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams", { ...formValues, userId });
  dispatch(createStreamAction(response.data));
  history.push("/");
};

//fetch multiples
export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");
  dispatch(fetchStreamsAction(response.data));
};

//fetch one
export const fetchStream = (streamID) => async (dispatch) => {
  const response = await streams.get(`/streams/${streamID}`);
  dispatch(fetchStreamAction(response.data));
};

//edit one
export const editStream = (streamID, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${streamID}`, formValues);
  dispatch(editStreamAction(response.data));
};
//delete one
export const deleteStream = (streamID) => async (dispatch) => {
  await streams.delete(`/streams/${streamID}`);
  dispatch(deleteStreamAction(streamID));
};
