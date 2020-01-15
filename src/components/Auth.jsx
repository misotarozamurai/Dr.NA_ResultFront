import React from 'react'
import { getNameText } from 'redux/selectors'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// ----- Redirect if name not entered -----
const Auth = ({name}) => (name ? name : <Redirect to={'/'}/>)

const MapStateToProps = state => {
  const name = getNameText(state);
  return {name};
}

export default connect(MapStateToProps)(Auth);