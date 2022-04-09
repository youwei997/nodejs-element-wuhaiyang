const { defineConfig } = require('@vue/cli-service')
const url = 'http://localhost:3000/api/'
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: url,
        change: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
  }
})
