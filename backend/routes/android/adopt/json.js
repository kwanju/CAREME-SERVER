var express = require('express');
var router = express.Router();
/* GET home page. */
var adopt = require('../../../model/android/adopt/adopt')
router.post('/getAdoptList', function (_req, _res) {
    adopt.getAdoptList(_req.body, function (_result) {
        _res.send(_result);
    });
});


module.exports = router;
