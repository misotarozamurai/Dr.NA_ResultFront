import React, { Component } from 'react'
// ----- images -----
import LogoTitle from 'images/header/logo_title.png'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

export default class Header extends Component {
  render() {
    return (
      <header className={Style.header}>
        <img src={LogoTitle} alt="App Title" className={Style.header_title}/>
        <time dateTime={this.props.dateTime} className={Style.data_time}>
          {this.props.dateTime.replace(/-/g, '/')}
        </time>
      </header>
    );
  }
}