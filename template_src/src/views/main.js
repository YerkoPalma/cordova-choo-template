var html = require('choo/html')

var TITLE = 'src - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy w-100 vh-100 dt">
      <main class="pa3 cf bg-washed-red vh-100 dtc v-mid tc">
        <div id="touche" class="bg-washed-blue shadow-1 center pa3 br3 w5 h5"></div>
      </main>
    </body>
  `
}
