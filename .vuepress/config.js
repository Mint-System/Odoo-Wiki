const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')
const { sitemapPlugin } = require("vuepress-plugin-sitemap2");

module.exports = {
    lang: 'en-US',
    title: 'Odoo Wiki',
    description: 'Eine einfache und umfassende Odoo-Dokumentation.',
    theme: defaultTheme({
        logo: '/icon.png',
        repo: 'mint-system/odoo-wiki',
        docsBranch: '14.0',
        editLink: false,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Topics', link: '/topics' },
            { text: 'Glossary', link: '/glossary' },
            { text: 'Mint System', link: 'https://www.mint-system.ch' }
        ]
    }),
    plugins: [
        searchPlugin(), 
        sitemapPlugin({
            hostname: 'https://www.odoo-wiki.org/'
          }),
    ],
}
