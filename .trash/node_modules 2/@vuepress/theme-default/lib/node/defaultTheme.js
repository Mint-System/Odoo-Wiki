"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTheme = void 0;
const plugin_active_header_links_1 = require("@vuepress/plugin-active-header-links");
const plugin_back_to_top_1 = require("@vuepress/plugin-back-to-top");
const plugin_container_1 = require("@vuepress/plugin-container");
const plugin_external_link_icon_1 = require("@vuepress/plugin-external-link-icon");
const plugin_git_1 = require("@vuepress/plugin-git");
const plugin_medium_zoom_1 = require("@vuepress/plugin-medium-zoom");
const plugin_nprogress_1 = require("@vuepress/plugin-nprogress");
const plugin_palette_1 = require("@vuepress/plugin-palette");
const plugin_prismjs_1 = require("@vuepress/plugin-prismjs");
const plugin_theme_data_1 = require("@vuepress/plugin-theme-data");
const utils_1 = require("@vuepress/utils");
const utils_2 = require("./utils");
const defaultTheme = ({ themePlugins = {}, ...localeOptions } = {}) => {
    (0, utils_2.assignDefaultLocaleOptions)(localeOptions);
    return {
        name: '@vuepress/theme-default',
        layouts: utils_1.path.resolve(__dirname, '../client/layouts'),
        templateBuild: utils_1.path.resolve(__dirname, '../../templates/build.html'),
        // use alias to make all components replaceable
        alias: Object.fromEntries(utils_1.fs
            .readdirSync(utils_1.path.resolve(__dirname, '../client/components'))
            .filter((file) => file.endsWith('.vue'))
            .map((file) => [
            `@theme/${file}`,
            utils_1.path.resolve(__dirname, '../client/components', file),
        ])),
        clientConfigFile: utils_1.path.resolve(__dirname, '../client/config.js'),
        extendsPage: (page) => {
            // save relative file path into page data to generate edit link
            page.data.filePathRelative = page.filePathRelative;
            // save title into route meta to generate navbar and sidebar
            page.routeMeta.title = page.title;
        },
        plugins: [
            // @vuepress/plugin-active-header-link
            themePlugins.activeHeaderLinks !== false
                ? (0, plugin_active_header_links_1.activeHeaderLinksPlugin)({
                    headerLinkSelector: 'a.sidebar-item',
                    headerAnchorSelector: '.header-anchor',
                    // should greater than page transition duration
                    delay: 300,
                })
                : [],
            // @vuepress/plugin-back-to-top
            themePlugins.backToTop !== false ? (0, plugin_back_to_top_1.backToTopPlugin)() : [],
            // @vuepress/plugin-container
            themePlugins.container?.tip !== false
                ? (0, plugin_container_1.containerPlugin)((0, utils_2.resolveContainerPluginOptions)(localeOptions, 'tip'))
                : [],
            themePlugins.container?.warning !== false
                ? (0, plugin_container_1.containerPlugin)((0, utils_2.resolveContainerPluginOptions)(localeOptions, 'warning'))
                : [],
            themePlugins.container?.danger !== false
                ? (0, plugin_container_1.containerPlugin)((0, utils_2.resolveContainerPluginOptions)(localeOptions, 'danger'))
                : [],
            themePlugins.container?.details !== false
                ? (0, plugin_container_1.containerPlugin)({
                    type: 'details',
                    before: (info) => `<details class="custom-container details">${info ? `<summary>${info}</summary>` : ''}\n`,
                    after: () => '</details>\n',
                })
                : [],
            themePlugins.container?.codeGroup !== false
                ? (0, plugin_container_1.containerPlugin)({
                    type: 'code-group',
                    before: () => `<CodeGroup>\n`,
                    after: () => '</CodeGroup>\n',
                })
                : [],
            themePlugins.container?.codeGroupItem !== false
                ? (0, plugin_container_1.containerPlugin)({
                    type: 'code-group-item',
                    before: (info) => `<CodeGroupItem title="${info}">\n`,
                    after: () => '</CodeGroupItem>\n',
                })
                : [],
            // @vuepress/plugin-external-link-icon
            themePlugins.externalLinkIcon !== false
                ? (0, plugin_external_link_icon_1.externalLinkIconPlugin)({
                    locales: Object.entries(localeOptions.locales || {}).reduce((result, [key, value]) => {
                        result[key] = {
                            openInNewWindow: value.openInNewWindow ?? localeOptions.openInNewWindow,
                        };
                        return result;
                    }, {}),
                })
                : [],
            // @vuepress/plugin-git
            themePlugins.git !== false
                ? (0, plugin_git_1.gitPlugin)({
                    createdTime: false,
                    updatedTime: localeOptions.lastUpdated !== false,
                    contributors: localeOptions.contributors !== false,
                })
                : [],
            // @vuepress/plugin-medium-zoom
            themePlugins.mediumZoom !== false
                ? (0, plugin_medium_zoom_1.mediumZoomPlugin)({
                    selector: '.theme-default-content > img, .theme-default-content :not(a) > img',
                    zoomOptions: {},
                    // should greater than page transition duration
                    delay: 300,
                })
                : [],
            // @vuepress/plugin-nprogress
            themePlugins.nprogress !== false ? (0, plugin_nprogress_1.nprogressPlugin)() : [],
            // @vuepress/plugin-palette
            (0, plugin_palette_1.palettePlugin)({ preset: 'sass' }),
            // @vuepress/plugin-prismjs
            themePlugins.prismjs !== false ? (0, plugin_prismjs_1.prismjsPlugin)() : [],
            // @vuepress/plugin-theme-data
            (0, plugin_theme_data_1.themeDataPlugin)({ themeData: localeOptions }),
        ],
    };
};
exports.defaultTheme = defaultTheme;
