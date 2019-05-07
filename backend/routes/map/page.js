var express = require('express');
var router = express.Router();

router.get("/mapTest", function(_req,_res){
  _res.render('layout/main2', { body:"../erp/mapTest",  csession:_req.csession});

});

module.exports = router;