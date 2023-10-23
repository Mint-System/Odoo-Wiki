import { defaultTheme } from 'vuepress'
import { plausiblePlugin } from './plausible'
import { defineUserConfig } from 'vuepress'
import sidebar from './sidebar'
import { searchPlugin } from '@vuepress/plugin-search'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'


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
        // searchPlugin({
        //     maxSuggestions: 20
        // }),
        docsearchPlugin({
            appId: '3RXF11ZPBA',
            apiKey: '541477132dec8df8d1b72f17c60b8a7a',
            indexName: 'odoo-org',
        }),
        plausiblePlugin({
            'domain': 'odoo-wiki.org'
        })
    ],
})