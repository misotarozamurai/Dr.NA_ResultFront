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
        <p dateTime={this.props.dateTime}>{this.props.dateTime}</p>
      </header>
    );
  }
}