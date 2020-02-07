const FileManagerPlugin = require('filemanager-webpack-plugin');
const path = require('path');

const client = {
  mode: 'development',
  entry: {
    'sample-feature-service': './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    path: __dirname + '/dist-es/',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.build.es.json'),
          },
        },
      },
    ],
  },
  plugins: [],
};
module.exports = [client];
