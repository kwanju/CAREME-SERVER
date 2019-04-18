var express = require('express');
var router = express.Router();
var actionRouter = require('./action');
/* GET home page. */

router.use('/action',actionRouter);

module.exports = router;
