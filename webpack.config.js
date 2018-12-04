var HtmlWebpackplugin = require('html-webpack-plugin');
var MiniCssExtractlugin = require('mini-css-extract-plugin');
var webpack =require('webpack');
var path = require('path');

var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    entry: {
        app: './favColor.js',
        appStyles: './style.scss',

        vendor: [
            '@babel/polyfill',
            'jquery',
        ],
        vendorStyles: [
            '../node_modules/bootstrap/dist/css/bootstrap.css',
        ]
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name:'vendor',
                    test: 'vendor',
                    enforce: true,
                }
            }    
        }
    },
    devServer: {
        port:8081,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractlugin.loader,              
                    },
                    {
                        loader: 'css-loader',              
                    }
                ]
            },

            {
                test: /\.scss$/,
                use: [
                        MiniCssExtractlugin.loader,
                        'css-loader',
                        'sass-loader',
                ]
            }, 
            {
               test: /\.(png|jpg)$/,
               exclude: /node_modules,
               loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackplugin({
            filename: 'index.html', //este está en dist
            template: 'index.html',
            hash: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new MiniCssExtractlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}