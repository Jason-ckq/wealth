const dotenv = require('dotenv');
const path = require('path');

exports.env = dotenv.config({
  path: path.resolve(__dirname, '../.env'), // 配置文件路径
  encoding: 'utf8',
  debug: false,
}).parsed;

exports.createProxy = function (list) {
  list = typeof list === 'string' ? JSON.parse(list) : list;
  let httpsRE = /^https:\/\//,
    proxy = {};
  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target);
    // https://github.com/http-party/node-http-proxy#options
    proxy[prefix] = {
      target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      // https is require secure=false
      ...(isHttps ? { secure: false } : {}),
    };
  }
  return proxy;
};
