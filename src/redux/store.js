import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'redux/reducers'
import { getResult } from 'redux/selectors/result'

const logger = createLogger({
  diff: true,
  collapsed:true,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

store.dispatch(getResult());
  
export default store;