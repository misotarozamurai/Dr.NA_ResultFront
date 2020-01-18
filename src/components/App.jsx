import React from 'react'
// ----- JSX -----
import Routes from 'components/Routes'
import Footer from 'components/layouts/Footer'
// ----- style -----
import Style from 'stylesheet/style.module.sass'

export default () => {
  return (
    <div className={Style.app}>
      <Routes />
      <Footer />
    </div>
  );
}