const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');

module.exports = merge(baseConf, {
    mode: 'development',
    devServer: {
        port: '9000'
    },
    devtool: 'source-map'
});
