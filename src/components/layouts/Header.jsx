import React, { Component } from 'react'
// ----- images -----
import LogoTitle from 'images/header/logo_title.png'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

export default class Header extends Component {
  render() {
    return (
      <header className={Style.header}>
        <div className={Style.header_item}>
          <img src={LogoTitle} alt="App Title" className={Style.header_title}/>
          <p  className={Style.date_time}>診断日：
            <time dateTime={this.props.dateTime}>
              {this.props.dateTime.replace(/-/g, '/')}
            </time>
          </p>
        </div>
      </header>
    );
  }
}