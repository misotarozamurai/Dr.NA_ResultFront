import React, { Component } from 'react'
import { connect } from 'react-redux'
// ----- JSX -----
import Header from 'components/layouts/Header'
import LineUserName from 'components/ui/LineUserName'
import GetResultContainer from 'containers/GetResultContainer'
import LineLastMessage from 'components/ui/LineLastMessage'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

class Result extends Component {
  render() {
    return (
      <div className={Style.result_page}>
        <Header dateTime={this.props.time}/>
        <div className={Style.message_area}>
          <LineUserName />
          <GetResultContainer />
          <LineLastMessage />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const length = state.result.length;
  const current_state = state.result[length - 1];
  const time = current_state.data.jsonObj['datatime'];
  return {time: time};
}

export default connect(mapStateToProps)(Result);