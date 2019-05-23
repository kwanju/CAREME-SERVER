var express = require('express');
var router = express.Router();

router.get("/adoptRegister", function(_req,_res){
  //_res.render('layout/main2', {  body:"../erp/erp",  csession:_req.csession});
  _res.render('layout/main', {body:"../adoptRegister/adoptRegister",  csession:_req.csession});

});

module.exports = router;