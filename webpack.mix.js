const mix = require('laravel-mix');
// eslint-disable-next-line import/no-extraneous-dependencies
const StyleLintPlugin = require('stylelint-webpack-plugin');

// Set up project folders
const themeFolder = 'themes/app';
const srcFolder = `${themeFolder}/src`;
const distFolder = `${themeFolder}/dist`;

if (process.env.NODE_ENV === 'development') {
  // Setup linting
  mix.webpackConfig({
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|vue)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
      ],
    },
    plugins: [
      new StyleLintPlugin({
        context: 'themes/app/src/',
        files: ['**/*.{scss,vue}'],
      }),
    ],
    devtool: 'inline-source-map',
  });
  mix.sourceMaps();
}

mix.setPublicPath(distFolder); // Places images processed in scss into themes/app/dist folder
mix.setResourceRoot(`/_resources/${distFolder}/`); // Prefixes urls in processed css with _resources/themes/app/dist

mix.js(`${srcFolder}/js/app.js`, distFolder)
  .sass(`${srcFolder}/scss/app.scss`, distFolder)
  .sass('themes/app/src/scss/editor.scss', distFolder)
  .options({ processCssUrls: true });

if (process.env.NODE_ENV === 'production') {
  mix.minify(`${distFolder}/app.css`)
    .minify(`${distFolder}/app.js`)
    .minify(`${distFolder}/editor.css`);
}
