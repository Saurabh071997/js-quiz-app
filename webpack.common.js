const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


const webpackConfig = {
	entry: path.resolve(__dirname, "src", "index.js"),

	output: {
		filename: "[name].[contenthash].bundle.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "images/[hash][ext][query]",
		clean: true 
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},

			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},

			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
				type: "asset"
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "Vanilla JS Starter",
			template: path.resolve(__dirname, "src", "index.html")
		}),
		new ESLintPlugin({
			extensions: ["js"],
		  }),
		new FaviconsWebpackPlugin('./src/favicon.png')
	],

	optimization: {
		splitChunks: {
			cacheGroups: {
				node_vendors: {
					name: "vendor",
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
					priority: 1
				}
			}
		},

		minimizer: [
			new CssMinimizerPlugin(),
		  ],
	},

	

};

module.exports = webpackConfig;