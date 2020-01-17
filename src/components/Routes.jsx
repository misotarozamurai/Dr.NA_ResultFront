import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'

import * as routes from 'config/route'

// import Auth from 'components/Auth'
import Top from 'components/pages/Top'
import Result from 'container/GetResultContainer'

// ----- Screen transition -----
export default class Routes extends Component {
  render() {
    return (
      <div className='wrapper'>
        <Router>
          <Switch>
            <Route path={routes.TOP_PAGE} exact component={Top}/>
            <Route path={routes.RESULT_PAGE} exact component={Result}/>
            <Route exact component={Top}/>
          </Switch>
        </Router>
      </div>
    );
  }
}