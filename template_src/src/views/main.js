var html = require('choo/html')

var TITLE = 'src - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <section class="fl mw6 w-50-m w-third-l pa3 center">
          <h2>1.</h2>
          <p>
            Welcome to your new Choo application.
            We're very happy you've made it this far.
          </p>

          <p>
            You're now in control of your own Choo app. The moment you decide to
            deploy it, it'll work offline and on any device.
          </p>

          <br>
        </section>

      </main>
    </body>
  `
}
