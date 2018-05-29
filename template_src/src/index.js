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
app.use(require('choo-touch')('#touche'))
app.use(require('./stores/mobile'))

app.route('/', require('./views/main'))

module.exports = app.mount('body')
