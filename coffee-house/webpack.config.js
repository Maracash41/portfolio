const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV);
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;


module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  entry: {
    index: path.resolve(__dirname, 'src', 'app.js'),
    menu: path.resolve(__dirname, 'src/components/menu', 'menu.js'),
  },
  output: {
    path: path.resolve(__dirname, 'coffee-house'),
    clean: true,
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]'
  },
  optimization: { minimize: false },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),
      chunks: ['index'],
      minify: false,  //для отключения минификация html
    }),
    new HtmlWebpackPlugin({
      filename: 'pages/menu.html',
      template: path.resolve(__dirname, 'src/pages/menu', 'menu.html'),
      chunks: ['menu'],
      minify: false,  //для отключения минификация html
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false, // для отключения минификация html
        },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          {
            loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },

            }
          },
          {
            loader:"sass-loader",
            options: {
              sassOptions: {
                outputStyle: "expanded", //Отключить значение по умолчания 'compressed' тогда не будет минификации css
              }
            }
          },
        ],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]'
        }
      },
      { //настрйока куда будут складываться ассетсы
        test: /\.(jpe?g|png|webp|gif|svg)$/i, //расширения файлов
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ],
        type: 'asset/resource',
        generator: { //генератор нужен для создания отдельной папки
          filename: 'assets/images/[name][ext]' // [name] сохраняет оригинальное имя файла, [hash] имя
        }
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ],
  },
}