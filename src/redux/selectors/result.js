import axios from 'axios'
import { getResultRequest, getResultSuccess, getResultFailure } from 'redux/actions'

export const getResult = () => {
  return (dispatch) => {
    dispatch(getResultRequest());
    const res = axios.get(process.env.REACT_APP_API_URI)
      .then(res => {
        dispatch(getResultSuccess(res.data));
      })
      .catch(err => {
        dispatch(getResultFailure(err));
      });
  }
}