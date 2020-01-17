
const client = {
	mode: 'development',
	entry: {
		client: './src/client/index.tsx'
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist-es/'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader'
			}
		]
	}
};
module.exports = [client];
