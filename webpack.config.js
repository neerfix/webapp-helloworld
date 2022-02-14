const path = require('path');

module.exports = {
	resolve: {
		extensions: ['js', 'jsx'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@views': path.resolve(__dirname, 'src/views'),
			'@utils': path.resolve(__dirname, 'src/utils'),
			'@services': path.resolve(__dirname, 'src/services'),
		},
	},
};