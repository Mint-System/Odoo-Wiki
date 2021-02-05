
module.exports = {
    title: 'Odoo Handbuch',
    description: 'Odoo Handbuch',
    themeConfig: {
        sidebar: 'auto'
    },
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        'vuepress-plugin-mermaidjs',
        'plausible-analytics',
        '@vuepress/back-to-top',
        'sitemap': {
            hostname: 'https://odoo-erp.ch/'
        },
    ]
}
