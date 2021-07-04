/**
 * The build is run with laravel-mix, see docs here: https://laravel-mix.com
 */
/* eslint-disable import/no-extraneous-dependencies */
const mix = require("laravel-mix");
const webpack = require("webpack");
const fs = require("fs");

const srcFolder = `./themes/app/src`;
const distFolder = `./themes/app/dist`;

mix
  .js(`${srcFolder}/js/app.js`, "/")
  .vue({ version: 3 })
  .sass(`${srcFolder}/scss/app.scss`, "/")
  .sass(`${srcFolder}/scss/editor.scss`, "/");

// Places images processed in scss into themes/app/dist folder
mix.setPublicPath(distFolder);

/**
 * Setup vue correctly
 */
mix.webpackConfig({
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
});

/**
 * Development specific
 */
if (process.env.NODE_ENV === "development") {
  // Add style lint
  // eslint-disable-next-line global-require
  const StyleLintPlugin = require("stylelint-webpack-plugin");
  mix.webpackConfig({
    plugins: [
      new StyleLintPlugin({
        context: srcFolder,
        files: ["**/*.{scss,vue}"],
      }),
    ],
  });

  // Add eslint
  mix.webpackConfig({
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.(js|vue)$/,
          exclude: /node_modules/,
          loader: "eslint-loader",
        },
      ],
    },
  });

  // This allows you to proxy your site while watching, meaning when you change
  // your css/scss the file will get injected rather than requiring a reload
  // mix.browserSync("your-domain.test");

  // Add sourcemaps in depending on the scenario you might want to
  // use these in prod too if the unminified code is fine to share
  // as it can make solving bugs easier
  mix.sourceMaps();
  mix.webpackConfig({ devtool: "inline-source-map" });
}

/**
 * Windows specific config
 *
 * Depending on the version and setup of Windows, it will either not support symlinks entirely
 * or use a junction folder in place (a Windows feature comparible to Unix's symbolic links).
 *
 * The former results in need of copying data, the latter works out of the box.
 * We need to check the file type (directory, file, symlink, etc.) to know whether or not to copy.
 *
 * However, a junction presents itself to NodeJS as a standard directory, not as a symlink, and
 * and in turn causes "Error: Source and destination must not be the same." on attempted copy.
 * Luckily `realpath` returns as expected, so we can get around this by checking if source and
 * destination are the same.
 *
 * NOTE: This needs to be run after all other transpile actions.
 */
const publicResourcesFolder = `public/_resources/${distFolder}`;
if (
  process.platform === "win32"
  && fs.realpathSync(distFolder) !== fs.realpathSync(publicResourcesFolder)
) {
  mix.copyDirectory(distFolder, publicResourcesFolder);
}
