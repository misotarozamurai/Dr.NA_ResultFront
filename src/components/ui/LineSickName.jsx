import React, { Component } from 'react'
// ----- config -----
import { DISPLAY_RESULT_SICK_NAME } from 'config/text'
// ----- JSX -----
import DrIcon from 'components/layouts/DrIcon'
import Time from 'components/layouts/Time'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

class LineSickName extends Component {
  render() {
    return (
      <div className={Style.display_message}>
        <DrIcon />
        <div className={Style.display_text_box}>
          <p className={Style.name}>{process.env.REACT_APP_NAME}</p>
          <div className={Style.line_area}>
            {SickNameElement(this.props.name, this.props.sick)}
            <Time />
          </div>
        </div>
      </div>
    );
  }
}

const SickNameElement = (name, sick) => {
  const replace_name = DISPLAY_RESULT_SICK_NAME.nameline.replace('{name}', name);
  let replace_sick = DISPLAY_RESULT_SICK_NAME.sickline.replace('{sick}', sick);
  replace_sick = replace_sick.replace('{name}', name);
  return (
    <p className={Style.display_text_line}>
      {replace_name}<br />
      {replace_sick}
    </p>
  );
}

export default LineSickName;