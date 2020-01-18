import React from 'react'
// ----- images -----
import Icon from 'images/icon/icon.png'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

export default () => {
  return (
    <div className={Style.icon}>
      <img src={Icon} alt='Icon' />
    </div>
  );
}