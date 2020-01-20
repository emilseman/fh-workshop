const FileManagerPlugin = require('filemanager-webpack-plugin');

const client = {
    mode: 'development',
    entry: {
        fa1: './src/index.tsx'
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        path: __dirname + '/dist-es/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
    new FileManagerPlugin({
        onEnd: {
            copy: [{source: __dirname + '/dist-es/' + 'fa1.js', destination: __dirname + '/../integrator/dist-es/'}],
        }
    }),
        ],
    externals: {react: 'react', 'styled-components': 'styled-components'}
};
module.exports = [client];
