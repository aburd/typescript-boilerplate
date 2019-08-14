const path = require('path')
const webpack = require('webpack')

const dev = process.env.NODE_ENV === 'development'
const plugins = []
plugins.push(
  new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('development') } })
)

const resolvedPaths = ['../src/lib', '../packs', '../src', '../../assets'].map(p => path.resolve(__dirname, p))

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, './src/main.tsx'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'target'),
  },
  module: {
    rules: [
      {
        test: /\.css|scss?$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    modules: [...resolvedPaths, 'node_modules'],
  },
  plugins,
  devtool: dev ? 'inline-source-map' : 'none',
}; 
