var express = require('express');
var router = express.Router();
/* GET home page. */
var chat = require('../../../model/android/chat/chat');

router.post('/getChat', function (_req, _res) {
    chat.getChat(_req.body, function (_result) {
        _res.send(_result);
    });
});


module.exports = router;
