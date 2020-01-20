import React from 'react'
import ReactDOM from 'react-dom'
// ----- Redux -----
import { Provider } from "react-redux"
import store from './redux/store'
// ----- App -----
import App from 'components/App'
// ----- Style -----
import 'stylesheet/style.module.sass'

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);

// ---------------- iPhone バウンス対策？ ----------------

let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // window resize
  window.addEventListener('resize', () => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// スクロールを抑止する関数
const preventScroll = event => {
  // li要素だけは、タップイベントに反応したいので、抑止しない。
  if (event.touches[0].target.tagName.toLowerCase() === "li") {return;}
  // preventDefaultでブラウザ標準動作を抑止する。
  event.preventDefault();
}

// タッチイベントの初期化
document.addEventListener("touchstart", preventScroll, false);
document.addEventListener("touchmove", preventScroll, false);
document.addEventListener("touchend", preventScroll, false); 
// ジェスチャーイベントの初期化
document.addEventListener("gesturestart", preventScroll, false);
document.addEventListener("gesturechange", preventScroll, false);
document.addEventListener("gestureend", preventScroll, false);