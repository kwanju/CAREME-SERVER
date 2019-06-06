var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //if(req.session.user)
  //  console.log(req.session.user.idx);
  res.render('chattest', { });
});

module.exports = router;
