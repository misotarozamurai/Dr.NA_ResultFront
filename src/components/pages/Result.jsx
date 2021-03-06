import React, { Component } from 'react'
import { connect } from 'react-redux'
// ----- JSX -----
import Header from 'components/layouts/Header'
import LineUserName from 'components/ui/LineUserName'
import GetResultContainer from 'containers/GetResultContainer'
import LineLastMessage from 'components/ui/LineLastMessage'
import Footer from 'components/layouts/Footer'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

// const height = {
//   // Subtract header and footer height
//   height: document.body.clientHeight - 85 
// };

class Result extends Component {
  render() {
    return (
      <div className={`${Style.wrapper} ${Style.result_wrapper}`}>
        <Header dateTime={this.props.time}/>
        <section className={` ${Style.main} ${Style.result_page}` }>
          {/* <div className={`${Style.message_area} ${Style.scroll}`} style={height}> */}
          <div className={Style.message_area}>
            <LineUserName />
            <GetResultContainer />
            <LineLastMessage />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const length = state.result.length;
  const current_state = state.result[length - 1];
  const time = current_state.data.jsonObj['datetime'];
  return {time: time};
}

export default connect(mapStateToProps)(Result);