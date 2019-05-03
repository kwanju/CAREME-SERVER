var config = require('../../config').animalImageUpload;

var multer = require('multer');
var date = require('../../utils/date')().split(" ");
var day = date[0];
var time = date[1].split(":");
var storage = multer.diskStorage({
    destination: function (_req, _file, _cb) {
        _cb(null, config.saveDirectory); // postition where you save file
    },
    filename: function (_req, _file, _cb) {
        _cb(null, day + time[0] + time[1] + time[2] + config.fileTag + _file.originalname); // filename that you save in our directory.
    }
})
var upload = multer({ storage: storage });

exports.upload = function () {
    return upload.single(config.inputName);
}