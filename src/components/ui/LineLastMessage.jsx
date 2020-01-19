import React from 'react'
import { getNameText } from 'redux/selectors/name'
import { connect } from 'react-redux'
// ----- config -----
import { DISPLAY_LAST_MESSAGE } from 'config/text'
// ----- JSX -----
import DrIcon from 'components/layouts/DrIcon'
import Time from 'components/layouts/Time'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

const LineLastMessage = ({user, sick}) => {
  // Append user name & sick name to string
  const replace_line = () => {
    let line = DISPLAY_LAST_MESSAGE.replace('{name}', user);
    line = line.replace('{sick}', sick);
    return line;
  }

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

const MapStateToProps = (state) => {
  // Get User Nmae
  const user = getNameText(state);
  // Get Sick Nmae
  const length = state.result.length;
  const current_state = state.result[length - 1];
  const sick = current_state.data.jsonObj['sick']['name'];
  return {user, sick};
}

export default connect(MapStateToProps)(LineLastMessage);