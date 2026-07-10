import { defineClientConfig } from 'vuepress/client'
import { defineSearchConfig } from '@vuepress/plugin-slimsearch/client'

const { domain = undefined } = __PLAUSIBLE_OPTIONS__

// A snippet is an array of tokens: plain strings, or ['mark', matchedText] tuples.
const flattenSnippet = (snippet) =>
  snippet.map((word) => (Array.isArray(word) ? word[1] : word)).join('')

defineSearchConfig({
  combineWith: 'AND',
  resultsFilter: (results, query) => {
    const phrase = query.trim().toLowerCase()
    if (!phrase.includes(' ')) return results // single word — no phrase check needed

    return results
      .map((result) => {
        const matchedContents = result.contents
          .map((item) => {
            const matchedSnippets = item.display.filter((snippet) =>
              flattenSnippet(snippet).toLowerCase().includes(phrase),
            )
            return matchedSnippets.length
              ? { ...item, display: matchedSnippets }
              : null
          })
          .filter(Boolean)

        return matchedContents.length
          ? { ...result, contents: matchedContents }
          : null
      })
      .filter(Boolean)
  },
})

export default defineClientConfig({
  enhance({ router }) {
    if (!__VUEPRESS_SSR__) {
      var script = document.createElement('script')
      script.defer = true
      script.dataset.domain = domain
      script.src = 'https://plausible.io/js/script.js'
      document.getElementsByTagName('head')[0].appendChild(script)
    }
  },
})