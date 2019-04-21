var express = require('express');
var router = express.Router();
var jsonRouter = require('./json');
/* GET home page. */

router.use('/json',jsonRouter);


module.exports = router;
