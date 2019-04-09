
var config = {

};

config.db = {
  connectionLimit: 50,
  host: "localhost",  // Please input MySQL server IP
  user: "root",       // Please input MYSQL ID
  password: "root",   // Please input MySQl password
  database: 'myapp'
};
config.server = {
  port: 3000
}


module.exports = config;