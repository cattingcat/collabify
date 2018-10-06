const 
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

const output = path.resolve(__dirname, 'dist');
const serviceWorker = path.resolve(__dirname, 'src', 'infrastructure', 'ServiceWorker.js');
const jsOutput = path.resolve(output, 'js');

module.exports = {
    mode: "development",
    entry: {
        main: [
            './src/app/mvp/main/Main.ts'
        ],

        SpaceListModule: [
            './src/app/mvp/space_list/SpaceListModule.ts'
        ],
        ComponentDemoModule: [
            './src/app/mvp/component_demo/ComponentDemoModule.ts'
        ]
    },
    output: {
        path: output,
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        alias: {
            "common": path.resolve(__dirname, 'src', 'app', 'common'),
            "components": path.resolve(__dirname, 'src', 'app', 'components'),
            "container": path.resolve(__dirname, 'src', 'app', 'container'),
            "container_services": path.resolve(__dirname, 'src', 'app', 'container_services'),
            "kit": path.resolve(__dirname, 'src', 'app', 'kit'),
            "mvp": path.resolve(__dirname, 'src', 'app', 'mvp')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader'
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader" 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            chunks: ['main']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([{
            from: serviceWorker,
            to: path.resolve(output, 'sw.js'),
            toType: 'file'
        }], {copyUnmodified: true})
    ]
}