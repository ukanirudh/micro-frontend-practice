const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFedarationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: '8082'
    },
    plugins: [
        new ModuleFedarationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap'
            },
            shared: ['faker']
        }),
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ]
}