var express = require('express');
var orderRouter = express.Router();

// 查询orders
orderRouter.get('/', function(req, res) {
  res.send('[{"query":"orders"}]');
});
// 新增order
orderRouter.post('/', function(req, res) {
  res.send('{"add": "order"}');
});

module.exports = orderRouter;