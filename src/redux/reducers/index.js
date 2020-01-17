import { combineReducers } from 'redux'
import name from 'redux/reducers/name'
import result from 'redux/reducers/result'

export default combineReducers({name, result});