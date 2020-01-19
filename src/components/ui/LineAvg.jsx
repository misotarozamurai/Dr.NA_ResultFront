import React, { Component } from 'react'
// ----- config -----
import { DISPLAY_RESULT_AVG } from 'config/text'
// ----- JSX -----
import DrIcon from 'components/layouts/DrIcon'
import Time from 'components/layouts/Time'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

class LineAvg extends Component {
  render() {
    return (
      <div className={Style.display_message}>
        <DrIcon />
        <div className={Style.display_text_box}>
          <p className={Style.name}>{process.env.REACT_APP_NAME}</p>
          <div className={Style.line_area}>
            {AvgElement(this.props.avg)}
            <Time />
          </div>
        </div>
      </div>
    );
  }
}

const AvgElement = avg => {
  return (
    <p className={Style.display_text_line}>
      {DISPLAY_RESULT_AVG.avg.replace('{avg}', avg)}<br />
      {AvgResult(avg)}
    </p>
  );
}

const AvgResult = avg => {
  if(avg <= 59) {
    return DISPLAY_RESULT_AVG.slow;
  } else if(91 <= avg) {
    return DISPLAY_RESULT_AVG.early;
  }
  return DISPLAY_RESULT_AVG.standard;
}

export default LineAvg;