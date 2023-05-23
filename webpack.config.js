
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  
  module.exports = {
    entry: './src/index.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /.ts$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
      ],
    },
    resolve: {
      extensions: ['.ts', '.js',],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: true,
        minify: false,
      }),
      new MiniCssExtractPlugin({
        filename: "main.css",
        chunkFilename: "main.css",
      }),
    ],
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      
      compress: true,
      port: 3000,
    },
    stats: 'errors-only',
  
  };
