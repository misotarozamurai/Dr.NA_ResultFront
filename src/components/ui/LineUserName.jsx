import React from 'react'
import { getNameText } from 'redux/selectors/name'
import { connect } from 'react-redux'
// ----- config -----
import { DISPLAY_NAME_TEXT } from 'config/text'
// ----- JSX -----
import DrIcon from 'components/layouts/DrIcon'
import Time from 'components/layouts/Time'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

const LineUserName = ({name}) => {
  // Append username to string
  const replace_line = () => DISPLAY_NAME_TEXT.replace('{name}', name);

  // Return paragraph at each line break
  const lines = replace_line().split('<br>').map((line) => {
    return (<p key={line}>{line}</p>)
  });

  return (
    <div className={Style.display_message}>
      <DrIcon />
      <div className={Style.display_text_box}>
        <p className={Style.name}>{process.env.REACT_APP_NAME}</p>
        <div className={Style.line_area}>
          <div className={Style.display_text_line}>{lines}</div>
          <Time />
        </div>
      </div>
    </div>
  );
}

const MapStateToProps = state => {
  const name = getNameText(state);
  return {name};
}

export default connect(MapStateToProps)(LineUserName);