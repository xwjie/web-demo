const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    // https://webpack.js.org/configuration/resolve/
    resolve: {
        alias: {
            utils: path.resolve(__dirname, 'src/utils')
        }
    }
};
