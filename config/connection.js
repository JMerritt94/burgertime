const mysql = require('mysql')
if (process.env.JAWSDB_URL) {

  connection = mysql.createConnection(process.env.JAWSDB_URL)}
  else{;

 connection = mysql.createConnection({
  host: "localhost",


  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "burger_db"
})};

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id:" + connection.threadid);
});
module.exports = connection;