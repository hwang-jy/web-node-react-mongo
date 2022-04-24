const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://172.17.0.3:5000',
      //target: 'http://devdiabloh.synology.me:5000',
      changeOrigin: true
    })
  )
}