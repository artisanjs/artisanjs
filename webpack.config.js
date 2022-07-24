const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'artisan.js',
		path: path.resolve(__dirname, 'dist'),
	},
};