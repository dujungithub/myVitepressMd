//const navBarJson = require('./nav.js')
const sideBarJson = require('../node_cmd/sidebar.json')
//console.log('sideBarJson',sideBarJson)
module.exports = {
    title: "xraybot博客",
    description: "xraybot博客, 干货满满",
    base:'/myVitepressMd/',
    markdown: {
        toc: {
            level: [1, 2, 3, 4],
            includeLevel:[1, 2, 3, 4]
        },
    },
    themeConfig: {
        nav:sideBarJson,
        sidebar:sideBarJson
    },
    plugins: [

    ]
};