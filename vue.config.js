module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://sva.talana.com:8000/api/product/?format=api',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }