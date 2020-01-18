import React from 'react'
// ----- images -----
import Logo from 'images/top/top_logo.png'
import Title from 'images/top/top_title.png'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

export default () => {
  return (
    <div className={Style.logo}>
      <img src={Logo} alt='logo'/>
      <img src={Title} alt='logo title'/>
    </div>
  );
}