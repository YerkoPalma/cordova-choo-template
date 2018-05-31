var css = require('sheetify')
var choo = require('choo')

css('tachyons')
css('native-toast/dist/native-toast.css')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('choo-cordova'))
app.use(require('choo-touch')('#touche', {
  drag: function (event) {
    if (!window.ticking) {
      requestAnimationFrame(function () {
        var el = document.querySelector('#touche')
        window.transform.translate = {
          x: window.origin.x + event.deltaX,
          y: window.origin.y + event.deltaY
        }
        var value = [
          'translate(' + window.transform.translate.x + 'px, ' + window.transform.translate.y + 'px)'
        ]
  
        value = value.join(' ')
        el.style.webkitTransform = value
        el.style.mozTransform = value
        el.style.transform = value
        window.ticking = false
      })
      window.ticking = true
    }
  }
}))
app.use(require('./stores/mobile'))

app.route('/', require('./views/main'))

module.exports = app.mount('body')
