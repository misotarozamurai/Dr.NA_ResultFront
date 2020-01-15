import React from 'react'
import logo from 'images/top/top_logo.png'
import title from 'images/top/top_title.png'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='logo'/>
      <img src={title} alt='logo title'/>
    </div>
  );
}

export default Logo;