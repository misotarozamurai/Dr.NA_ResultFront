import React from 'react'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

export default () => {
  return (
    <time dateTime={getTime()} className={Style.time}>{getTime()}</time> 
  );
}

const getTime = () => {
  const now = new Date();
  return now.getHours() + ':' + ("0" + now.getMinutes()).slice(-2); 
}