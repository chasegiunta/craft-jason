import Vue from 'vue'

__webpack_public_path__ = 'http://localhost:8080/' // eslint-disable-line

import './components'
import './app.css'

Vue.config.productionTip = false

window.addEventListener(
  'build',
  function(e) {
    new Vue({
      el: `#${e.detail}`,
      delimiters: ['${', '}'],
      data: {
        readonly: null,
        allowRawEditing: null,
      },
    })
  },
  false,
)
