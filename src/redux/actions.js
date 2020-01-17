import { INPUT_SEND_NAME } from 'redux/actionTypes'
import { GET_RESULT_REQUEST, GET_RESULT_SUCCESS, GET_RESULT_FAILURE } from 'redux/actionTypes'

export const inputSendName = text => ({
  type: INPUT_SEND_NAME,
  name: text,
});

export const getResultRequest = () => ({
  type: GET_RESULT_REQUEST,
});

export const getResultSuccess = json => ({
  type: GET_RESULT_SUCCESS,
  result: json,
  receivedAt: Date.now(),
});

export const getResultFailure = error => ({
  type: GET_RESULT_FAILURE,
  error
});