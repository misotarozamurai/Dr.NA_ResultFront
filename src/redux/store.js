import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from 'redux/reducers'
import { getResult } from 'redux/selectors/result'

const middlewares = [];

if(process.env.NODE_ENV !== 'production') {
  const logger = createLogger({
    diff: true,
    collapsed:true,
  });
  middlewares.push(logger)
}

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, ...middlewares)
);

store.dispatch(getResult());
  
export default store;