import React from 'react'
// ----- JSX -----
import Routes from 'components/Routes'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

export default () => {
  return (
    <div className={Style.app}>
      <Routes />
    </div>
  );
}