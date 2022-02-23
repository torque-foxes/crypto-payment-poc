const path = require("path");
const globImporter = require('node-sass-glob-importer');

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            additionalData: "$icon-path: '../icons'; $font-path: '../fonts';$image-path: '../images';",
            sassOptions: {
              // Allow SCSS import wildcards
              importer: globImporter(),
            }
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    // Return the altered config
    return config;
  },
};
