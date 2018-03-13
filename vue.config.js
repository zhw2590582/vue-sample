module.exports = {
    baseUrl: '/',
    outputDir: 'dist',
    lintOnSave: true,
    compiler: false,
    chainWebpack: () => { },
    configureWebpack: () => { },
    vueLoader: {},
    productionSourceMap: true,
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {},
        modules: false
    },
    parallel: require('os').cpus().length > 1,
    dll: false,
    pwa: {},
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null,
        before: app => { }
    },
    pluginOptions: {}
}