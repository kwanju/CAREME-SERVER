var express = require('express');
var router = express.Router();

var JSONuser = require('./json');



router.use("/json",JSONuser);
//router.use(page);
//router.use("/action",action);


module.exports = router;
