/* global cordova */
module.exports = store

var events = store.events = {
  DEVICE_READY: 'deviceready',
  PAUSE: 'pause',
  RESUME: 'resume',
  BACK_BUTTON: 'backbutton',
  MENU_BUTTON: 'menubutton',
  SEARCH_BUTTON: 'searchbutton',
  START_CALL_BUTTON: 'startcallbutton',
  END_CALL_BUTTON: 'endcallbutton',
  VOLUME_DOWN_BUTTON: 'volumedownbutton',
  VOLUME_UP_BUTTON: 'volumeupbutton',
  ACTIVATED: 'activated'
}

function store (state, emitter) {
  state.cordova = {}
  document.addEventListener(events.DEVICE_READY, () => {
    emitter.emit(events.DEVICE_READY)
    Object.keys(cordova).forEach(key => {
      if (cordova.hasOwnProperty(key) && typeof cordova[key] !== 'function') {
        state.cordova[key] = cordova[key]
      }
    })
  }, false)
  
  document.addEventListener(events.PAUSE, () => {
    emitter.emit(events.PAUSE)
  }, false)
  
  document.addEventListener(events.RESUME, () => {
    // iOS hack
    setTimeout(() => {
      emitter.emit(events.RESUME)
    }, 0)
  }, false)
  
  document.addEventListener(events.BACK_BUTTON, () => {
    emitter.emit(events.BACK_BUTTON)
  }, false)
  
  document.addEventListener(events.MENU_BUTTON, () => {
    emitter.emit(events.MENU_BUTTON)
  }, false)
  
  document.addEventListener(events.SEARCH_BUTTON, () => {
    emitter.emit(events.SEARCH_BUTTON)
  }, false)
  
  document.addEventListener(events.START_CALL_BUTTON, () => {
    emitter.emit(events.START_CALL_BUTTON)
  }, false)
  
  document.addEventListener(events.END_CALL_BUTTON, () => {
    emitter.emit(events.END_CALL_BUTTON)
  }, false)
  
  document.addEventListener(events.VOLUME_DOWN_BUTTON, () => {
    emitter.emit(events.VOLUME_DOWN_BUTTON)
  }, false)
  
  document.addEventListener(events.VOLUME_UP_BUTTON, () => {
    emitter.emit(events.VOLUME_DOWN_BUTTON)
  }, false)
  
  document.addEventListener(events.ACTIVATED, args => {
    emitter.emit(events.ACTIVATED, args)
  }, false)
}
