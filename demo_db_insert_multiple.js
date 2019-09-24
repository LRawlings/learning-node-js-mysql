var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "cars"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO cars (make, model, colour, engine_size) VALUES ?";
  var values = [
    ['Peugeot', '205 GTI', 'Blue', '1.9'],
    ['VW', 'Golf GTI', 'Black', '1.8'],
    ['MG', 'Midget', 'Green', '1']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});