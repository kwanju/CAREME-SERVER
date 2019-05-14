
exports.login = function (_id, _pw, _callback) {
    var login = require('./shelter/login');
    login.login(_id, _pw, _callback);
}

exports.checkDupId = function (_id, _callback) {
    var registration = require('./shelter/registration');
    registration.checkDupId(_id, _callback);
}

exports.registration = function (_data, _callback) {
    var r = require('./shelter/registration');
    r.registration(_data, _callback);
}

exports.writeBoard = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.writeBoard(_data, _callback);
}

exports.deleteBoard = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.deleteBoard(_data, _callback);
}

exports.getBbsList = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.getBbsList(_data, _callback);
}

exports.getPages = function (_callback) {
    var b = require('./bbs/bbs');
    b.getPages(_callback);
}

exports.getBb = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.getBb(_data, _callback);
}

exports.getUserSerialFromBb = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.getUserSerial(_data, _callback);
}

exports.getComments = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.getComments(_data, _callback);
}

exports.writeComment = function (_data, _callback) {
    var b = require('./bbs/bbs');
    b.writeComment(_data, _callback);
}

exports.searchShelterCategory = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getShelterByCategory(_data, _callback);
}


//유기견 리스트, 등록, 삭제
exports.addAnimal = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.addAnimal(_data, _callback);
}

exports.deleteAnimal = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.deleteAnimal(_data, _callback);
}

exports.getAnimalList = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.getAnimalList(_data, _callback);
}

exports.getAnimalListPage = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.getAnimalListPage(_data, _callback);
}

exports.checkScheduleReadState = function (_data, _callback) {
    var readState = require('./shelter/schedule');
    readState.checkScheduleReadState(_data, _callback);
}

exports.getAllShelterLocation = function (_callback) {
    var addr = require('./discover/map');
    addr.getAllShelterLocation(_callback);
}

exports.getScheduleListPermitted = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.getScheduleListPermitted(_data, _callback);
};

exports.getScheduleListWaiting = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.getScheduleListWaiting(_data, _callback);
};

exports.updateSheduleListNotRead = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.updateScheduleListNotRead(_data, _callback);
}

exports.permitSchedule = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.permitSchedule(_data, _callback);
}

exports.rejectSchedule = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.rejectSchedule(_data, _callback)
}

exports.getAnimal = function (_data, _callback) {
    var animal = require('./erp/animal');
    animal.getAnimal(_data, _callback);
}

exports.updateAnimal = function (_data, _idx, _callback) {
    var animal = require('./erp/animal');
    animal.updateAnimal(_data, _idx, _callback);
}

exports.createDiscoverRequest = function (_data, _callback) {
    var create = require('./discover/discover');
    create.createDiscoverRequest(_data, _callback);
}

exports.checkDiscoverRequestReadState = function (_data, _callback) {
    var check = require('./discover/discover');
    check.checkDiscoverRequestReadState(_data, _callback);
}

exports.getPushInfoAboutSchedule = function (_data, _callback) {
    var schedule = require('./erp/schedule');
    schedule.getPushInfoAboutSchedule(_data, _callback);
};

exports.registerLocation = function (_data, _callback) {
    var registration = require('./shelter/registration');
    registration.registerLocation(_data, _callback)
}

exports.getShelter = function (_data, _callback) {
    var shelter = require('./erp/shelter');
    shelter.getShelter(_data, _callback);
}

exports.updateShelter = function (_data, _idx, _callback) {
    var shelter = require('./erp/shelter');
    shelter.updateShelter(_data, _idx, _callback);
}

exports.getAllDiscoverRequestInDiscover = function (_data, _callback) {
    var discover = require('./discover/discover');
    discover.getAllDiscoverRequestInDiscover(_data, _callback);
}