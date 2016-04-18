var webpack = require('webpack')

module.exports = {
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  entry:"./index.js",

  output: {
    filename: 'main.js',
    publicPath: '/assets/js',
    path: 'public/assets/js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1" }
    ]
  }
}