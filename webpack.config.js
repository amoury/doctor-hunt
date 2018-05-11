const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');


module.exports = {
  entry: ['./public/js/entry.js', './public/sass/style.scss'],
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'main.bundle.js'
  },
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, 
          MiniCssExtractPlugin.loader,
        { 
          loader: "css-loader" 
        },
        {
          loader: "sass-loader", // compiles Sass to CSS
          options: {
            sourcemap: true
          }
        }]
      }
    ]
  },
  watch: true
};