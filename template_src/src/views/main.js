var html = require('choo/html')
var css = require('sheetify')

var animate = css`
  :host {
    transition: all 0.3s;
  }
`

var TITLE = 'src - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy w-100 vh-100">
      <main class="pa3 cf bg-washed-red vh-100">
        <div 
          id="touche" 
          data-recognize="pan" 
          data-panstart="drag" 
          data-panmove="drag" 
          class="${animate} bg-washed-blue shadow-1 center pa3 br3 w5 h5 absolute"></div>
      </main>
    </body>
  `
}
