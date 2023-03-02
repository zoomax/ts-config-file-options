const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  mode: 'production',
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    // filename: '[contenthash].bundle.js', // for caching purposes
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist',
  },
  plugins: [
    new CleanWebpackPlugin(), //this plugin  id for deleting bundeled code before building the application
  ],
}
