var express = require('express');
var router = express.Router();

router.get("/erp/notifytest", function(_req,_res){
  _res.render('layout/main2', { body:"../erp/notifytest",  csession:_req.csession});

});

module.exports = router;