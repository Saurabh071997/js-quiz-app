const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   mode: 'development',
   target:"web",

   devtool: 'inline-source-map',
   devServer: {
     historyApiFallback: true,
     contentBase: './dist',
     port: 3000
   },
 });