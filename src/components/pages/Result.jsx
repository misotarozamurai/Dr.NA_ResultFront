import React, { Component } from 'react'
import { getNameText } from 'redux/selectors/name'
import { connect } from 'react-redux'

class Result extends Component {
  render() {
    return (
      <div>
        <p className='user_name'>ユーザー：{this.props.name}</p>
        <p className='user_name'>日付：{this.props.data.datatime}</p>
        <p className='user_name'>脈平均：{this.props.data.pulse.avg}</p>
        <p className='user_name'>病名：{this.props.data.sick.name}</p>
        <p className='user_name'>説明：{this.props.data.sick.message}</p>
      </div>
    );
  }
}

const MapStateToProps = state => state.name

export default connect(MapStateToProps)(Result);