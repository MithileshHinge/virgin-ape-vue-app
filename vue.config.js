/* eslint-disable @typescript-eslint/no-var-requires */
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: 'Montserrat' },
          { family: 'Lato', variants: ['300'] },
        ],
      }),
    ],
  },
};
