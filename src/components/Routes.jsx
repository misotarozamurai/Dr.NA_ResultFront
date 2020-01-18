import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
// ----- config -----
import * as routes from 'config/route'
// ----- JSX -----
import Top from 'components/pages/Top'
import Result from 'components/pages/Result'
import PrivateRoute from 'components/PrivateRoute'


// ----- Screen transition -----
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={routes.TOP_PAGE} exact component={Top}/>
          <PrivateRoute path={routes.RESULT_PAGE} exact component={Result}/>
          <Route exact component={Top}/>
        </Switch>
      </Router>
    );
  }
}