import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// ----- config -----
import { RESULT_PAGE } from 'config/route'
// ----- JSX -----
import Logo from 'components/layouts/Logo'
import TopSendName from 'components/ui/TopSendName'
import Footer from 'components/layouts/Footer'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

const height = { 
  // Subtract footer height
  height: document.body.clientHeight - 35
};

class Top extends Component {
  handleClick = () => {
    this.props.history.push(RESULT_PAGE);
  };
  
  render() {
    return (
      // <div className={`${Style.wrapper} ${Style.top_page}`}>
      <div className={Style.wrapper}>
        <div className={`${Style.main} ${Style.top_page}`} style={height}>
          <Logo />
          <TopSendName transition={this.handleClick}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Top);