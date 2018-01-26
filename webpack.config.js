var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: './conversations/static/js/index.js',
     output: {
         path: path.resolve(__dirname, 'conversations/static/compiled/'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['env']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };