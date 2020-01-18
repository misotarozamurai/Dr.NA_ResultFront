// ----- Text for display -----
// Top Page
export const INPUT_NAME = {
  label: 'ニックネームを入力してボタンを押してください。', 
  placeholder: 'ニックネームを入力'
}

export const BUTTON_SEND = 'Send Name'

// Result Page
export const DISPLAY_NAME_TEXT = '{name}さん、DNA診断お疲れ様でした！<br>私から結果の方をお伝えするね。'
export const DISPLAY_RESULT_AVG = {
  avg: '脈の平均は、{avg}bpm だったよ。',
  standard: '一般的には基準値だね！',
  slow: '一般的には遅い数値かな。',
  early: '一般的には早い数値だよ。'
}
export const DISPLAY_RESULT_SICK_NAME = {
  nameline: '{name}さんに投与したナノマシンが解析した結果、',
  sickline: '{name}さんは、将来的に{sick}になると診断されました。'
}

export const DISPLAY_LAST_MESSAGE = 
  '今回のナノマシン投与で、<br>'+
  '{name}さんのDNAをナノマシンが修復して{sick}にかかる心配はいらなくなったよ！<br>'+
  'これからも定期的な診断は忘れないでね。<br>'+
  'またね！';