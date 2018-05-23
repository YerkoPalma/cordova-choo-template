var html = require('choo/html')
var TITLE = 'ChooCordova - Main'
module.exports = view
function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <div class="sans-serif">
      <article class="vh-100 dt w-100 bg-washed-red">
        <div class="dtc v-mid tc gray ph3 ph4-l">
          <img src="assets/img/logo.png" class="mw-100">
          <h1 class="f1 f2-m f-subheadline-l fw6 tc">Choo choo!</h1>
        </div>
      </article>
    </div>
  `
}
