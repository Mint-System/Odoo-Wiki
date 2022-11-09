const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
const { plausiblePlugin } = require('./plausible')
const sidebar = require('./sidebar')

module.exports = {
    lang: 'de-CH',
    title: 'Odoo Wiki',
    description: 'Eine einfache und umfassende Odoo-Dokumentation.',
    theme: defaultTheme({
        logo: '/icon.png',
        repo: 'mint-system/odoo-wiki',
        docsBranch: '14.0',
        editLink: false,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Glossary', link: '/glossary' },
            { text: 'Mint System', link: 'https://www.mint-system.ch/odoo' }
        ],
        sidebar: {
            'glossary': [
                {
                    text: 'Glossary',
                    collapsible: false,
                },
            ],
            '/': [
                {
                    text: 'Home',
                    collapsable: false,
                    children: sidebar,
                },
            ]
        }
    }),
    plugins: [
        searchPlugin({
            maxSuggestions: 10
        }),
        plausiblePlugin({
            'domain': 'odoo-wiki.org'
        })
    ],
    extendsMarkdown: (md) => {
        md.use(require('markdown-it-include'))
    },
}
