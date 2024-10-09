const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const { getStyleLoaders } = require('./utils/common.js');
const { createDevServer } = require('./utils/devServer.js');
const os = require('os');

const isPro = process.env.NODE_ENV === 'production';

// cpu 核数
const threads = os.cpus().length;
module.exports = {
  mode: isPro ? 'production' : 'development',
  devtool: isPro ? 'none' : 'source-map',
  entry: {
    main: path.resolve(__dirname, './src'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name:10].js',
    chunkFilename: './js/[name:4].chunk.js', // 动态导入输出资源命名方式
    assetModuleFilename: './assets/media/[name:4].[hash:2][ext]', // 图片、字体等资源命名方式（注意用hash）
    publicPath: '/wealth/',
    clean: true,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.less',
      '.css',
      '.tsx',
      '.ts',
      '.svg',
      '.png',
      '.jpg',
    ],
    alias: {
      '@': path.resolve('src'), // 这样配置后 @ 可以指向 src 目录
    },
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /.css$/,
            use: getStyleLoaders('', false),
          },
          {
            test: /.less$/,
            use: getStyleLoaders('less-loader', false),
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            type: 'asset/resource',
            generator: {
              filename: 'resources/[hash:10][ext][query]',
            },
          },

          {
            test: /\.(mp3|4)$/,
            use: 'file-loader',
          },
          {
            test: /\.(mp4)$/,
            use: 'file-loader',
          },
          {
            test: /\.(wav)$/,
            use: 'file-loader',
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'thread-loader', // 开启多进程
                options: {
                  workers: threads, // 数量
                },
              },
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  cacheCompression: false, // 缓存文件不要压缩
                },
              },
            ],
          },

          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: { loader: 'ts-loader' },
          },
          {
            test: /\.(png|jpg|gif|svg|mp3|mp4)$/i,
            type: 'asset/resource',
          },
          // Shaders
          {
            test: /\.(glsl|vs|fs)$/,
            loader: 'ts-shader-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist'],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      // template: './src/native/index.html',
      // template: './src/native/star.html',
      // template: './src/wedding/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    // new ESLintWebpackPlugin({
    //   // 指定检查文件的根目录
    //   context: path.resolve(__dirname, './src'),
    //   exclude: 'node_modules', // 默认值 cache: true, // 开启缓存
    //   // 缓存目录
    //   cacheLocation: path.resolve(
    //     __dirname,
    //     './node_modules/.cache/.eslintcache',
    //   ),
    //   threads, // 开启多进程
    // }),
  ],
  // cache: {
  //   type: 'filesystem', // 使用文件缓存
  // },
  optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: 'all', // 对所有模块都进行分割
    },
  },
  externals: { jquery: 'jQuery' },
};
