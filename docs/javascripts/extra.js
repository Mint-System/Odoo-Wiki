// Plausible analytics
// Replicates the previous Vuepress plugin (@mint-system/plugin-plausible),
// which injected the Plausible script with data-domain = odoo-wiki.org.
;(function () {
  if (document.querySelector('script[data-domain="odoo-wiki.org"]')) {
    return
  }
  var script = document.createElement('script')
  script.defer = true
  script.dataset.domain = 'odoo-wiki.org'
  script.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(script)
})()

// Mermaid diagrams
// Replicates the previous Vuepress plugin (@mint-system/plugin-mermaid).
// Zensical/MkDocs renders ` ```mermaid ` fences as <pre class="mermaid">;
// mermaid is loaded on demand whenever such a block is present.
var mermaid = window.mermaid
if (!mermaid) {
  mermaid = {
    load: function (callback) {
      var script = document.createElement('script')
      script.src =
        'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js'
      script.onload = function () {
        callback(window.mermaid)
      }
      document.head.appendChild(script)
    },
  }
}

if (window.document$) {
  document$.subscribe(function () {
    if (document.querySelector('pre.mermaid')) {
      var run = function (api) {
        api.initialize({ startOnLoad: true, theme: 'default' })
        if (api.run) {
          api.run()
        } else if (api.contentLoaded) {
          api.contentLoaded()
        }
      }
      if (window.mermaid && window.mermaid.run) {
        run(window.mermaid)
      } else {
        mermaid.load(function (api) {
          run(api)
        })
      }
    }
  })
}
