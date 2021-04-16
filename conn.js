var mysql = require('mysql');

// establish mysql connection
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "askbot"
});

con.connect(function (err) {
    if (err) throw err;
});

module.exports = con;