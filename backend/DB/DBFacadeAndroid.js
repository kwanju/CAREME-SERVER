exports.login = function (_data, _callback) {
    var login = require('./android/user');
    login.login(_data, _callback);
}

exports.getAnimalSummary = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getAnimalSummary(_data, _callback);
}

exports.getAnimalInfo = function (_data, _callback) {
    var animal = require('./android/animal');
    animal.getAnimalInfo(_data, _callback);
}

exports.getAnimalSchedule = function (_data, _callback) {
    var animal = require('./android/animal');
    animal.getAnimalSchedule(_data, _callback);
}

exports.checkDupID = function (_data, _callback) {
    var user = require("./android/user");
    user.checkDupID(_data, _callback);
};

exports.registration = function (_data, _callback) {
    var user = require('./android/user');
    user.registration(_data, _callback);
}

exports.getVolunteerShelter = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getVolunteerShelter(_data, _callback);
}

exports.getShelter = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getShelter(_data, _callback);
}

exports.registerSchedule = function (_data, _callback) {
    var animal = require('./android/animal');
    animal.registerSchedule(_data, _callback);
}

exports.setToken = function (_data, _callback) {
    var user = require('./android/user');
    user.setToken(_data, _callback);
}

exports.deleteToken = function (_data, _callback) {
    var user = require('./android/user');
    user.deleteToken(_data, _callback);
}

exports.getUserSchedule = function (_data, _callback) {
    var schedule = require('./android/schedule');
    schedule.getUserSchedule(_data, _callback);
}

exports.registerDiscover = function (_data, _callback) {
    var discover = require('./android/discover');
    discover.registerDiscover(_data, _callback);
}

exports.getDiscoverRecord = function (_data, _callback) {
    var discover = require('./android/discover');
    discover.getDiscoverRecord(_data, _callback);
}

exports.registerFind = function (_data, _callback) {
    var find = require('./android/find');
    find.registerFind(_data, _callback);
}

exports.getDiscoverInBulletinBoard = function (_data, _callback) {
    var discover = require('./android/discover');
    discover.getDiscoverInBulletinBoard(_data, _callback);
}

exports.getFindInBulletinBoard = function (_data, _callback) {
    var find = require('./android/find');
    find.getFindInBulletinBoard(_data, _callback);
}

exports.getDiscover = function (_data, _callback) {
    var discover = require('./android/discover');
    discover.getDiscover(_data, _callback);
}

exports.getFind = function (_data, _callback) {
    var find = require('./android/find');
    find.getFind(_data, _callback);
}

exports.getAnimalListByFindAnimal = function (_data, _callback) {
    var shelter = require('./android/shelter');
    shelter.getAnimalListByFindAnimal(_data, _callback)
}

exports.getDiscoverListByFindAnimal = function (_data, _callback) {
    var discover = require('./android/discover');
    discover.getDiscoverListByFindAnimal(_data, _callback)
}

exports.matchingFind = function (_data, _callback) {
    var find = require('./android/find');
    find.matchingFind(_data, _callback);
}

exports.getFindRecord = function (_data, _callback) {
    var find = require('./android/find');
    find.getFindRecord(_data, _callback);
}

exports.getFavoriteInfoList = function (_data, _callback) {
    var user = require('./android/user');
    user.getFavoriteInfoList(_data, _callback);
}

exports.getInfo = function (_data, _callback) {
    var user = require('./android/user');
    user.getInfo(_data, _callback);
}

exports.getAdoptList = function (_data, _callback) {
    var adopt = require('./android/adopt');
    adopt.getAdoptList(_data, _callback);
}

exports.getChatList = function (_data, _callback) {
    var chat = require('./android/chat');
    chat.getChatList(_data, _callback);
}

exports.getNewChatList = function (_data, _callback) {
    var chat = require('./android/chat');
    chat.getNewChatList(_data, _callback);
}

exports.updateChatNotRead = function (_data, _callback) {
    var chat = require('./android/chat');
    chat.updateChatNotRead(_data, _callback);
}