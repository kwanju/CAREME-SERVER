
var config = {

};

config.db = {
    connectionLimit: 50,
    host: "localhost",  // Please input MySQL server IP
    user: "root",       // Please input MYSQL ID
    password: "root",   // Please input MySQl password
    database: 'ZANGDOL',
    timezone: 'utc',
    multipleStatements: true
};
config.server = {
    port: 3000
}

config.fcm = {
    serverKey: "AAAAJBu8XZo:APA91bE8mYsbShl51atI0nfUHnMuORbfKHXRia6qBQ4sYS6zHdstT2P7uhbWRtPPX3Ux3XuuEoF6fRTftNwtqxDRy38dxs3BX7JREBPN2YovdUeY5xShNJZq0omVnOdIUvW8ZToFf7lV",
    package: "zangdol.careme"
}

config.animalImageUpload = {
    fileTag: "-zangdol-", // 파일 구분자
    saveDirectory: "drive/animalImage/", // 파일을 저장할 위치
    inputName: "animalImage"
}

config.animalList = {
    numberpage: 10
}
module.exports = config;