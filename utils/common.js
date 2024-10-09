const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //提取js中的css成单独文件
const dotenv = require('dotenv');
const path = require('path');
const isProductionMode = process.env.NODE_ENV === 'production';

const env = dotenv.config({
  path: path.resolve(__dirname, '../.env.dev'), // 配置文件路径
  encoding: 'utf8',
  debug: false,
}).parsed;

// 配置服务端代理
const createProxy = function (list) {
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

// 配置样式的Loaders
const getStyleLoaders = (preProcessor, isCssModules = true) => {
  return [
    isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader', //这个loader取代style-loader。 作用：提取js中的css成单独文件
    {
      loader: 'css-loader',
      options: {
        modules: isCssModules
          ? {
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            }
          : false,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['postcss-preset-env'],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
};

module.exports = {
  env,
  createProxy,
  getStyleLoaders,
};
