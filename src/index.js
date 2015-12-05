import React from 'react'
import { App } from 'App'

window.jQuery = window.$ = require('jquery')

let commits

if (typeof document !== 'undefined') {
  $.ajax({
    url: 'https://api.github.com/repos/tomvalorsa/football_manager_app/commits'
  }).done(commits => {
    React.render(<App commits={commits} />, document.body)
  })
}