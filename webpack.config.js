const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
      rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract(
              {
                fallback: 'style-loader',
                use: ['css-loader']
              })
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader'
        }
      ],
  },
  plugins: [
    new CopyWebpackPlugin([
        {from:'./src/images',to:'images'} 
    ]),
    new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html",
        inject: 'body'
    }),
    new ExtractTextPlugin('bundle.css')
  ]
};
