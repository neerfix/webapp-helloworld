const path = require('path');

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@': path.resolve(__dirname, './src/'),
			'@Assets': path.resolve(__dirname, './src/assets/'),
			'@Pages': path.resolve(__dirname, './src/pages/'),
			'@Components': path.resolve(__dirname, './src/components/'),
			'@Utils': path.resolve(__dirname, './src/utils/'),
			'@Services': path.resolve(__dirname, './src/services/'),
		},
	},
};