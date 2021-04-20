
module.exports = {
    title: 'Odoo Handbuch',
    description: 'Odoo Handbuch',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "icon.png"}],
    ],
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Topics', link: '/topics' },
            { text: 'Glossary', link: '/glossary' }
        ]
    },
    plugins: [
        'fulltext-search',
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        'vuepress-plugin-mermaidjs',
        'plausible-analytics',
        '@vuepress/back-to-top',
        [
            'vuepress-plugin-sitemap',
            {
                hostname: 'https://odoo-erp.ch'
            }
        ]
    ],
}
