import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { getNameText } from 'redux/selectors/name'
// ----- config -----
import { TOP_PAGE } from 'config/route'

const PrivateRoute = ({ name, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => 
        // Get authentication status
          name!=='' ? (
          // If the UserName has been entered, returns the component passed to PrivateRoute.
          <Component {...props} />
        ) : (
          // Redirect to Top page
          <Redirect
            to={TOP_PAGE}
          />
        )
      }
    />
  );
}

const MapStateToProps = state => ({
  name: getNameText(state)
})

export default connect(MapStateToProps)(PrivateRoute);