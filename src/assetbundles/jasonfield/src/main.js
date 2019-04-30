__webpack_public_path__ = 'http://localhost:8080/' // eslint-disable-line

import Vue from 'vue'

import './components'
import './app.scss'

Vue.config.productionTip = false

var checkExistence = setInterval(function() {
  if (window.JasonField) {
    if (window.JasonField != '{}') {
      for (const key of Object.keys(window.JasonField)) {
        new Vue({
          el: `#${window.JasonField[key].namespace || window.JasonField.id}`,
          delimiters: ['${', '}'],
          data: {
            readonly: null,
            allowRawEditing: null,
          },
        })
      }
    }
    clearInterval(checkExistence)
  }
}, 100)
