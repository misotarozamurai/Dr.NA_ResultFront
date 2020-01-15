import React, { Component } from 'react'
// import Logo from 'components/layouts/Logo'
import { withRouter } from 'react-router-dom'
import { RESULT_PAGE } from 'config/route'
import TopSendName from 'components/ui/TopSendName'

class Top extends Component {

  handleClick = () => {
    this.props.history.push(RESULT_PAGE);
  };
  
  render() {
    return (
      <div className="top_page">
        {/* <Logo /> */}
        <TopSendName transition={this.handleClick}/>
      </div>
    );
  }
}

export default withRouter(Top);