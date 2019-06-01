var express = require('express');
var router = express.Router();

router.get("/adoptDetail", function(_req,_res){
  //_res.render('layout/main2', {  body:"../erp/erp",  csession:_req.csession});
  _res.render('layout/main', {body:"../erp/adoptDetail",  csession:_req.csession});

});

module.exports = router;