import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { plausiblePlugin } from './plausible'
import sidebar from './sidebar'

export default defineUserConfig({
    bundler: viteBundler(),
    lang: 'de-CH',
    title: 'Odoo Wiki',
    description: 'Eine einfache und umfassende Odoo-Dokumentation.',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],
    theme: defaultTheme({
        logo: '/icon.png',
        repo: 'mint-system/odoo-wiki',
        docsBranch: 'master',
        editLink: false,
        navbar: [
            { text: 'Home', link: '/' },
            { text: 'Glossary', link: '/glossary' },
            { text: 'OCA Apps', link: 'https://odoo-community.org/shop' },
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
            apiKey: '541477132dec8df8d1b72f17c60b8a7a',
            indexName: 'odoo-org',
        }),
        plausiblePlugin({
            'domain': 'odoo-wiki.org'
        })
    ],
})