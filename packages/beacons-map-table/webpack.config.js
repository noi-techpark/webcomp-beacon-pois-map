// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: CC0-1.0

const defaultConfig = require('@open-wc/building-webpack/modern-config')
const merge = require('webpack-merge')
const path = require('path')

module.exports = merge(
  defaultConfig({
    input: './src/index.html',
    plugins: {
      workbox: false
    }
  }),
  {
    mode: 'production',
    output: {
      path: path.resolve(__dirname + '/../../', 'dist'),
      filename: 'beacons-map-table.min.js'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: 'css-loader'
        },
        {
          test: /\.svg$/,
          use: 'svg-inline-loader'
        },
        {
          test: /\.(gif|png|jpe?g)$/i,
          use: 'url-loader',
        }
      ]
    }
  }
)