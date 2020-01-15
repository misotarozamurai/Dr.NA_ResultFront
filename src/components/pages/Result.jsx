import React from 'react'
import { getNameText } from 'redux/selectors'
import { connect } from 'react-redux'

const Result = ({name}) => {
  console.log(name)
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

const MapStateToProps = state => {
  const name = getNameText(state);
  return {name};
}

export default connect(MapStateToProps)(Result);