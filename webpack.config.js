const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
	return  {
		entry: [
			"@babel/polyfill", // polyfill must be included before the app entry point
			"./src/index.js"
		],
		output: {
			path: path.join(__dirname, "/dist"),
			filename: "app.bundle.js",
			publicPath: '/',
		},
		devServer: {
			historyApiFallback: true,
		},
		resolve: {
			extensions: [".js"]
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader"
					},
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								hmr: true,
							},
						},
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.svg$/,
					use: ['@svgr/webpack'],
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css'
			}),
			new HtmlWebpackPlugin({
				template: "./src/index.html"
			})
		]
	}
};