module.exports = {
  configureWebpack: (config) => {
    config.module.rules.push({
      test: /\.vue$/,
      use: [{
        loader: 'vue-windicss-preprocess',
        options: {
          config: 'tailwind.config.js',
          compile: false,
          globalPreflight: true,
          globalUtility: true,
          prefix: 'windi-',
        },
      }],
    });
  },
};
