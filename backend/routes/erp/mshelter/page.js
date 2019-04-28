var express = require('express');
var router = express.Router();

router.get("/mshelter", function(_req,_res){
  _res.render('layout/main2', { body:"../erp/mshelter",  csession:_req.csession});

});

module.exports = router;