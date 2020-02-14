import merge from 'webpack-merge'
import { getCommonConfig } from './webpack.common'
import { Configuration as WebpackConfiguration } from 'webpack'

export const getDevConfig = (openBrowser = true): WebpackConfiguration => ({
  mode: 'development',
  devtool: 'inline-source-map',
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
