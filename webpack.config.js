const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

const config = {
    entry: APP_DIR + '/src/Index.js',
    devServer:{
        contentBase: PUBLIC_DIR,
        port:9000,
        open:true
    },
    output: {
        path: PUBLIC_DIR,
        filename: 'bundle.js'
    }
}
module.exports = config;