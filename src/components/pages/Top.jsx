import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// ----- config -----
import { RESULT_PAGE } from 'config/route'
// ----- JSX -----
import Logo from 'components/layouts/Logo'
import TopSendName from 'components/ui/TopSendName'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

class Top extends Component {
  handleClick = () => {
    this.props.history.push(RESULT_PAGE);
  };
  
  render() {
    return (
      <div className={Style.top_page}>
        <Logo />
        <TopSendName transition={this.handleClick}/>
      </div>
    );
  }
}

export default withRouter(Top);