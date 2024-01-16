process.env.VUE_APP_GIT_HASH = `Build_${Math.round(Math.random() * 100000)}`;

const gateway = {
  '/api': {
    target: `http://localhost:8090`,
  },
};

const path = require('path');
const fs = require('fs');

module.exports = {
  devServer: {
    watchOptions: { poll: 500 },
    proxy: gateway,
    port: 7777,
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'YOURPRIVATE.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'YOURPUBLIC.pem')),
    // },

    overlay: {
      warnings: false,
      errors: false,
    },
  },
  publicPath: '/',
};
