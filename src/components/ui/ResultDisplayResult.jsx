import React, { Component } from 'react'
// ----- JSX -----
import LineAvg from 'components/ui/LineAvg'
import LineSickName from 'components/ui/LineSickName'
import LineSickMessage from 'components/ui/LineSickMessage'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

class ResultDisplayResult extends Component {  
  render() {
    return (
      <div className={Style.inner_message_area}>
        <LineAvg avg={this.props.data.pulse.avg} />
        <LineSickName 
          name={this.props.name}
          sick={this.props.data.sick.name}
        />
        <LineSickMessage message={this.props.data.sick.message} />
      </div>
    );
  }
}

export default ResultDisplayResult