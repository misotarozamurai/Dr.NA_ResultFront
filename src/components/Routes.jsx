import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
// ----- config -----
import * as routes from 'config/route'
// ----- JSX -----
import PrivateRoute from 'components/PrivateRoute'
import Top from 'components/pages/Top'
import Result from 'components/pages/Result'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

// ----- Screen transition -----
export default class Routes extends Component {
  render() {
    return (
      <div className={Style.wrapper}>
        <Router>
          <Switch>
            <Route path={routes.TOP_PAGE} exact component={Top}/>
            <PrivateRoute path={routes.RESULT_PAGE} component={Result}/>
            <Route exact component={Top}/>
          </Switch>
        </Router>
      </div>
    );
  }
}