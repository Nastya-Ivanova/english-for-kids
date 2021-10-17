const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    assetModuleFilename: './assets/[base]',
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: 'asset/inline',
      },{
        test: /\.mp3$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ]
  },

  resolve: {
    alias: {
      asset: path.resolve(__dirname, 'src/asset/'),
      shared: path.resolve(__dirname, 'src/shared/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      'enum.types': path.resolve(__dirname, 'src/enum.types.ts'),
  },
    extensions: ['.tsx', '.ts', '.js', 'scss']
  },

  mode: "development",

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  devServer: {
    open: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    historyApiFallback: true,
  },

};
