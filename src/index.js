import React from 'react'
import { App } from 'App'

window.jQuery = window.$ = require('jquery')

let commits

if (typeof document !== 'undefined') {
  $.ajax({
    url: 'https://api.github.com/repos/tomvalorsa/countries_game/commits'
  }).done(data => {
    commits = data.map(d => d.sha.substring(0, 6))
    React.render(<App commits={commits} />, document.body)
  })
}