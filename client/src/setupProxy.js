const {createProxyMiddleware} = require('http-proxy-middleware');
// const express = require('express');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    ); 
};

// const app = express();
 
// app.use('/api', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true }));
// app.listen(3000);
