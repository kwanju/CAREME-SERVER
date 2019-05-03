var express = require('express');
var router = express.Router();
var verbose = require('../verbose')

/* GET home page. */
router.get('/', function(req, res, next) {
  //if(req.session.user)
  //  console.log(req.session.user.idx);
  res.render('layout/main', { body:"../index", csession:req.csession });
});

module.exports = router;
