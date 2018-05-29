var toast = require('native-toast')

module.exports = store

function store (state, emitter) {
  state.totalClicks = 0

  emitter.on('deviceready', function () {
    toast({
      message: `${state.cordova.platformId} device ready`,
      position: 'top',
      square: true
    })
  })
}
