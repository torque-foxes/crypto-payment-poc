const path = require('path');
const Autoprefixer = require("autoprefixer");

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                Autoprefixer,
              ],
              config: {},
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, '../')]
            }
          },
        ],
        include: path.resolve(__dirname, '../')
      }
    ],
  },
};
