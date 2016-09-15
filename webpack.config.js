/* Webpack should have 3 major obj: the entry point, the compiler(babel),
and the output file*/

/*The HtmlWebpackPlugin is required for newly compiled index.js(now
index_bundle.js). The newly compiled bundle.js is injected into the new HTML
*/

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/app.js'
  ],
  module: {
    loaders: [
      {test:/\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [HtmlWebpackPluginConfig]
};
