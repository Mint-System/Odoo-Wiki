import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { slimsearchPlugin } from '@vuepress/plugin-slimsearch'
import { plausiblePlugin } from './plausible'
import { mermaidPlugin } from './mermaid'
import { shikiPlugin } from '@vuepress/plugin-shiki'
// import sidebar from './sidebar'
import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  bundler: viteBundler(),
  lang: 'de-CH',
  title: 'Odoo Wiki',
  description: 'Eine einfache und umfassende Odoo-Dokumentation.',
  head: [['link', { rel: 'icon', href: '/icon.png' }]],
  theme: defaultTheme({
    logo: '/icon.png',
    repo: 'mint-system/odoo-wiki',
    docsBranch: 'main',
    editLink: false,
    navbar: [
      { text: 'Home', link: '/' },
      {
        text: 'Chat',
        link: 'https://matrix.to/#/!KrqriCmWfsDJxdWNtE:mint-system.ch?via=mint-system.ch&via=matrix.org',
      },
    ],
  }),
  plugins: [
    slimsearchPlugin({
        indexContent: true,
        suggestion: false,
        sortStrategy: "total"
    }),
    // searchPlugin({
    //   maxSuggestions: 10,
    // }),
    plausiblePlugin({
      domain: 'odoo-wiki.org',
    }),
    mermaidPlugin(),
    shikiPlugin({
      theme: 'catppuccin-latte',
      langs: [
        'bash',
        'yml',
        'yaml',
        'json',
        'css',
        'html',
        'xml',
        'groovy',
        'py',
        'python',
        'sql',
        'powershell',
        'txt',
        'csv',
        'mermaid',
        'md',
        'markdown',
        'toml',
        'php',
      ],
    }),
  ],
})
