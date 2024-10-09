const { env, createProxy } = require('./common');

// const { env, createProxy } = require("./common");
const { PROXY } = env;

// 开发环境
const devServer = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Credentials': '*',
  },
  compress: true,
  hot: true,
  host: '0.0.0.0',
  open: false,
  port: 'auto',
  historyApiFallback: true,
  // proxy: createProxy(PROXY),
  client: {
    overlay: false,
  },
};

module.exports = devServer;
