module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'dist/bundle.js'
  },
  devtool: 'sourcemap',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
};
