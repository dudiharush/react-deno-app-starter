import merge from 'webpack-merge'
import { getCommonConfig } from './webpack.common'
import { Configuration as WebpackConfiguration } from 'webpack'
import 'webpack-dev-server'

export const getDevConfig = (openBrowser = true): WebpackConfiguration => ({
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '/dist',
    port: 8080,
    open: openBrowser,
    hot: openBrowser,
    compress: true,
    stats: 'errors-only',
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
})

export default merge(getCommonConfig(), getDevConfig())
