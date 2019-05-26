var express = require('express');
var router = express.Router();

var action = require('./action');



//router.use("/json",JSONuser);
//router.use(page);
router.use("/action",action);


module.exports = router;
