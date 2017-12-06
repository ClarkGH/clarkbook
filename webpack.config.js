const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

// Path Constants
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SCRIPTS: path.resolve(__dirname, 'src/scripts'),
  SRC: path.resolve(__dirname, 'src'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.SCRIPTS, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  // Loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};
