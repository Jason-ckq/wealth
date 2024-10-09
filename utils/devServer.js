const { env, createProxy } = require('./common');
const { PROXY } = env;

const createDevServer = (port = 8080) => ({
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
  port,
  historyApiFallback: true,
  proxy: createProxy(PROXY),
  client: {
    overlay: false,
  },
});

module.exports = { createDevServer };
