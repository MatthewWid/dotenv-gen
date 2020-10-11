const path = require("path");
const webpack = require("webpack");

const BASEDIR = path.resolve(__dirname);

const config = {
	entry: path.join(BASEDIR, "./src/index.ts"),
	output: {
		path: path.join(BASEDIR, "./build"),
		filename: "dotenv-gen.js",
	},
	target: "node",
	resolve: {
		extensions: [".ts", ".js"],
	},
	plugins: [
		new webpack.BannerPlugin({
			banner: "#!/usr/bin/env node",
			raw: true,
		}),
	],
};

module.exports = config;
