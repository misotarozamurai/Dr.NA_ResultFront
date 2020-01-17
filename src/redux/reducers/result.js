import { GET_RESULT_REQUEST, GET_RESULT_SUCCESS, GET_RESULT_FAILURE } from 'redux/actionTypes'

const initialState = {
  isFetching: false,
  data: ''
};

export default (state = [initialState], action) => {
  switch(action.type) {
    case GET_RESULT_REQUEST:
      return [
        ...state,
        {
          isFetching: true,
          data: []
        }
      ]
    case GET_RESULT_SUCCESS:
      return [
        ...state,
        {
          isFetching: false,
          data: action.result,
          receivedAt: action.receivedAt
        }
      ]
    case GET_RESULT_FAILURE:
      return [
        ...state,
        {
          isFetching: false,
          error: action.error
        }
      ]
    default: 
      return state;
  }
}