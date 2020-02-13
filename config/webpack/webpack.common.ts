import { join, resolve } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

export interface WebpackEnv {
  mode?: string
  debug?: boolean
}

export const getCommonConfig = (env: WebpackEnv = {}): webpack.Configuration => {
  const { mode = 'development', debug = true } = env

  return {
    mode: 'none',
    entry: {
      index: join(resolve('src'), 'index.tsx'),
    },
    output: {
      pathinfo: debug === true,
      path: resolve('dist'),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Babel + TypeScript + React = ❤️',
        template: 'src/index.html',
      }),
    ],
  }
}
