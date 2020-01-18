import React from 'react'
import ReactDOM from 'react-dom'
// ----- Redux -----
import { Provider } from "react-redux"
import store from './redux/store'
// ----- App -----
import App from 'components/App'
// ----- Style -----
import 'stylesheet/style.module.sass'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);
