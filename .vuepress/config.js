import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { plausiblePlugin } from './plausible'
import { defineUserConfig } from 'vuepress'
import sidebar from './sidebar'


export default defineUserConfig({
    lang: 'de-CH',
    title: 'Odoo Wiki',
    description: 'Eine einfache und umfassende Odoo-Dokumentation.',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],
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
            maxSuggestions: 20
        }),
        plausiblePlugin({
            'domain': 'odoo-wiki.org'
        })
    ],
})