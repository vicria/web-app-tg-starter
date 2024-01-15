process.env.VUE_APP_GIT_HASH = `Build_${Math.round(Math.random() * 100000)}`;

const gateway = {
  '/api': {
    target: `http://localhost:8090`,
  },
};

module.exports = {
  devServer: {
    watchOptions: { poll: 500 },
    proxy: gateway,
    port: 7777,

    overlay: {
      warnings: false,
      errors: false,
    },
  },
  publicPath: '/',
};
