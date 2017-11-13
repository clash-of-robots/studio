const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'demo/index.js'),
  devtool: 'source-map',
  resolve: {
    modules: [
      path.join(__dirname, 'demo'),
      'node_modules',
    ],
    alias: {
      'studio': path.join(__dirname, 'src/index.js'),
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['env', 'stage-1', 'react'],
      },
    }],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'node_modules/monaco-editor/min/vs',
        to: 'vs',
      },
    ]),
  ],
};
