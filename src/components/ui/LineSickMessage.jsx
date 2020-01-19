import React, { Component } from 'react'
// ----- JSX -----
import DrIcon from 'components/layouts/DrIcon'
import Time from 'components/layouts/Time'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

class LineSickMessage extends Component {
  render() {
    return (
      <div>
        {this.props.message.split('。').map( line=> {
          return(DisplayElement(line));
        })}
      </div>
    );
  }
}

const DisplayElement = message => {
  if(!message) return
  return (
    <div className={Style.display_message} key={message}>
      <DrIcon />
      <div className={Style.display_text_box}>
        <p className={Style.name}>{process.env.REACT_APP_NAME}</p>
        <div className={Style.line_area}>
          <p className={Style.display_text_line}>{message}。</p>
          <Time />
        </div>
      </div>
    </div>
  );
}

export default LineSickMessage;