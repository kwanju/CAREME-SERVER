
var config = {

};

config.db = {
  connectionLimit: 50,
  host: "localhost",  // Please input MySQL server IP
  user: "root",       // Please input MYSQL ID
  password: "root",   // Please input MySQl password
  database: 'ZANGDOL',
  timezone: 'utc'
};
config.server = {
  port: 3000
}

config.fcm={
    serverKey :"AAAAJBu8XZo:APA91bE8mYsbShl51atI0nfUHnMuORbfKHXRia6qBQ4sYS6zHdstT2P7uhbWRtPPX3Ux3XuuEoF6fRTftNwtqxDRy38dxs3BX7JREBPN2YovdUeY5xShNJZq0omVnOdIUvW8ZToFf7lV",
    package: "zangdol.careme"
}
module.exports = config;