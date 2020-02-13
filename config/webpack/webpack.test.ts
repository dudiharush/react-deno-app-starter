import { getDevConfig } from './webpack.dev'
import { getCommonConfig } from './webpack.common'
import merge from 'webpack-merge'

export default merge(getCommonConfig(), getDevConfig(false))
