module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'dist/bundle.js'
  },
  devtool: 'sourcemap',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};
