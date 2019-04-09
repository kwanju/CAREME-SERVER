var express = require('express');
var router = express.Router();
var verbose = require('../verbose')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout/main', { body:"../index", csession:req.csession });
});

module.exports = router;
