const url = require('url');
const proxy = require('express-http-proxy');

module.exports=proxy('messaging:8081', {
  proxyReqPathResolver: req=>url.parse(req.originalUrl).path
});
