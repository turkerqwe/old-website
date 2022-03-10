module.exports = {
  images: {
    domains: [ "i.imgur.com", "turker.vercel.app", "/", "cdn.discordapp.com" ]
  },
  mode: 'production',
  optimization: {
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
        }).apply(compiler);
      },
    ],
  }
};