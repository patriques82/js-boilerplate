const merge = require('webpack-merge');
const baseConf = require('./webpack.base.conf');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(baseConf, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: 'bundle-report.html'
        })
    ]
});
