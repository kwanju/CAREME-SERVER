
exports.uploadImage = function(){
    var upload = require('../../utils/erp/animalImageUploader');;
    return upload.upload();
}