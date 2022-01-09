const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

// const stylesHandler = MiniCssExtractPlugin.loader;

let Env = "local";

const config = {
	entry: {
		app: ["babel-polyfill","./src/scripts/app/"],
	},
	output: {
		path: path.join(__dirname,"..", "public"),
		publicPath: '/',
		filename: "js/[name].js"
	},
	devServer: {
	  open: {
		app: {
			name: 'chrome',
			arguments: ['--incognito', '--new-window'],
		  },
	  },
	  host: "localhost",
	//   static: {
	// 	directory: path.join(__dirname,'..', 'public'),
	//   },
		compress: true,
		port: 9000,
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.DefinePlugin({
			ENV: JSON.stringify(Env),
			__VUE_OPTIONS_API__: true, // If you are using the options api.
			__VUE_PROD_DEVTOOLS__: false, // If you don't want people sneaking around your components in production.
		}),
		new HtmlWebpackPlugin({
			chunks:['app'],
			template: "./src/scripts/app/app.html",
			inject: 'body'
			//filename:"index.html"
		}),
  
	  // new MiniCssExtractPlugin(),
  
	  // Add your plugins here
	  // Learn more about plugins from https://webpack.js.org/configuration/plugins/
	],
	module: {
		rules: [
			{ 
				test: /\.ts$/, 
				loader: 'ts-loader',   
				exclude: /node_modules\/(?!@pictoric\/fb-components)|vue\/src/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
					//configFile:"buildJs/tsconfig.app.json",
					transpileOnly: true
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					esModule: true
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ["transform-regenerator"],
					}
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					//useRelativePath:true,
					emitFile:false,
				}
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
		],
	},
	optimization: {
		// minimize: true,
		// minimizer: [new TerserPlugin()],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		enforceExtension: false,
		alias: {
			// 'vue$': 'vue/dist/vue.common.js',
			vue: "@vue/runtime-dom"
		}
	},
	externals: {
		"lodash": {
			commonjs: "lodash",
			commonjs2: "lodash",
			amd: "lodash",
			root: "_"
		},
		"jquery": "jQuery",
		// "vue": "Vue",
		// "vue-router": "VueRouter",
		// "vuex": "Vuex",
		// "vuetify":"Vuetify",
		"ss-utils": "ss-utils",
		"moment": "moment",
		"axios": "axios",
	},
  };
  
  module.exports = () => {
	if (isProduction) {
	  config.mode = "production";
	} else {
	  config.mode = "development";
	}
	return config;
  };