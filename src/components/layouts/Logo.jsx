import React from 'react'
// ----- images -----
import Logo from 'images/top/top_logo.png'
import Title from 'images/top/top_title.png'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

export default () => {
  return (
    <figure className={Style.logo}>
      <img src={Logo} alt='logo' className={Style.logo_img}/>
      <img src={Title} alt='logo title'/>
    </figure>
  );
}