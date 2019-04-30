var express = require('express');
var router = express.Router();
var actionRouter = require('./action');
var jsonRouter = require('./json');
/* GET home page. */

router.use('/action',actionRouter);
router.use('/json',jsonRouter);

module.exports = router;
