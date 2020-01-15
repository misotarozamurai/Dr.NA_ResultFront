import { SEND_NAME } from 'redux/actionTypes'

export const inputName = text => ({
  type: SEND_NAME,
  name: text
});