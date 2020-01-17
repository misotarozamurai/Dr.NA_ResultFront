import {INPUT_SEND_NAME} from 'redux/actionTypes'

const initialState = {
  name: ''
};

export default (state = initialState, action) => {
  switch(action.type) {
    case INPUT_SEND_NAME:
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
}