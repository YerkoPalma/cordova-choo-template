var toast = require('native-toast')

module.exports = store

function store (state, emitter) {
  window.origin = {}

  emitter.on('deviceready', function () {
    toast({
      message: `${state.cordova.platformId} device ready`,
      position: 'top',
      square: true
    })
    var el = document.querySelector('#touche')
    var body = document.body
    window.origin.x = Math.round((body.offsetWidth - el.offsetWidth) / 2)
    window.origin.y = Math.round((body.offsetHeight - el.offsetHeight) / 2)
    emitter.emit('reset')
  })
  emitter.on('reset', function () {
    if (!window.ticking) {
      requestAnimationFrame(function () {
        var el = document.querySelector('#touche')
        window.transform = {
          translate: { x: window.origin.x, y: window.origin.y },
          scale: 1,
          angle: 0,
          rx: 0,
          ry: 0,
          rz: 0
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
  })
}
