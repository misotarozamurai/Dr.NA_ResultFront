import React, { Component } from 'react'
// ----- JSX -----
import DrIcon from 'components/layouts/DrIcon'
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
        <p className={Style.display_text_line}>{message}。</p>
      </div>
    </div>
  );
}

export default LineSickMessage;