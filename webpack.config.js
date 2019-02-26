'use strict';
// Document：https://www.yuque.com/easy-team/easywebpack 和 https://www.yuque.com/easy-team/egg-vue 
module.exports = {
  loaders: {
    vue: {
      include: [/app\/web/, /node_modules\/lefit/]
    }
  },
  plugins: {
    imagemini: false
  }
};