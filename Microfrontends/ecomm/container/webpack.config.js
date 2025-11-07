const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
            new ModuleFederationPlugin({
                    name: 'container',
                    remotes: {
                        products:'products@http://localhost:8081/remoteEntry.js'
                        //products referuje k webpack.configu produktu name: 'products',
                    }
                    }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
};