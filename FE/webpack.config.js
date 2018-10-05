const 
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        project_list: [
            './src/ProjectList.tsx'
        ],
        task_list: [
            './src/TaskList.tsx'
        ],
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
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
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

        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, 'src', 'project_list.html'),
            filename: 'project_list.html',
            chunks: ['project_list']
        }),
        new HtmlWebpackPlugin({ 
            template: path.resolve(__dirname, 'src', 'task_list.html'),
            filename: 'task_list.html',
            chunks: ['task_list']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}