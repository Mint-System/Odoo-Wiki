import { defaultTheme } from 'vuepress'
import { plausiblePlugin } from './plausible'
import { defineUserConfig } from 'vuepress'
import sidebar from './sidebar'
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
        docsearchPlugin({
            appId: '3RXF11ZPBA',
            apiKey: 'b330afb7ebfc6bf1635a5906f7781e36',
            indexName: 'odoo-org',
            searchParameters: {
              facetFilters: ['tags:v2'],
            },
        }),
        plausiblePlugin({
            'domain': 'odoo-wiki.org'
        })
    ],
})