var express = require('express');
var router = express.Router();

var mainRouter = require('./main/main');


router.use('/main',mainRouter);


module.exports = router;