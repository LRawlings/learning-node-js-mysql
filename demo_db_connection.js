var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOURPASSWORD"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});