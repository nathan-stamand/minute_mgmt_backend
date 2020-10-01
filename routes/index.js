var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    return res.send('received GET HTTP')
  })
  .post(function(req, res) {
    return res.send('received POST HTTP')
  })
  .patch(function(req, res) {
    return res.send('received PATCH HTTP')
  })
  .delete(function(req, res) {
    return res.send('received DELETE HTTP')
  });
  
module.exports = router;
