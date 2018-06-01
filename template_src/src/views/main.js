var html = require('choo/html')
var css = require('sheetify')

var animate = css`
  :host {
    transition: all 0.3s;
  }
`

module.exports = view

function view (state, emit) {
  return html`
    <body class="code lh-copy w-100 vh-100">
      <main class="pa3 cf bg-washed-red vh-100">
        <div 
          id="touche" 
          data-recognize="pan tap" 
          data-panstart="drag" 
          data-panmove="drag" 
          data-panend="reset"
          data-tap="toggle"
          class="${animate} bg-washed-blue shadow-1 center pa3 br3 w4 h4 absolute"></div>
      </main>
    </body>
  `
}
